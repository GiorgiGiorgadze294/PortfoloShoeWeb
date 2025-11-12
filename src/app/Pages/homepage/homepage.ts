import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService, Product } from '../../services/product-service';

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getPopularProducts();
  }

  // 🎯 დამატება კალათაში
  addToCart(product: Product) {
    let cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.showAddedMessage(product.name);
  }

  showAddedMessage(name: string) {
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerText = `✅ ${name} დამატებულია კალათაში`;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
}
