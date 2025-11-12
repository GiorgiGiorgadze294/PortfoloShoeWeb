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
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  selectedBrand: string = 'ყველა';

  brands: string[] = ['ყველა', 'Nike', 'Adidas', 'Puma', 'GoldenGoose'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  filterProducts() {
    const query = this.searchQuery.toLowerCase();

    this.filteredProducts = this.products.filter(product => {
      const matchesBrand =
        this.selectedBrand === 'ყველა' ||
        product.brand.toLowerCase() === this.selectedBrand.toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(query);
      return matchesBrand && matchesSearch;
    });
  }

  selectBrand(brand: string) {
    this.selectedBrand = brand;
    this.filterProducts();
  }

  onSearchChange() {
    this.filterProducts();
  }

  /** 🎯 დამატება კალათაში **/
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

  /** ✅ პატარა შეტყობინება როცა პროდუქტი დაემატება **/
  showAddedMessage(name: string) {
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerText = `✅ ${name} დამატებულია კალათაში`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  getBrandColor(brand: string): string {
    switch (brand.toLowerCase()) {
      case 'nike':
        return '#111';
      case 'adidas':
        return '#0077ff';
      case 'puma':
        return '#e53935';
      case 'goldengoose':
        return '#f7b731';
      default:
        return '#555';
    }
  }
}