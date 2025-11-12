import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product-service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail  implements OnInit {
  product!: Product | undefined;
  selectedSize: number | null = null;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }

  selectSize(size: number) {
    this.selectedSize = size;
  }

  increaseQty() {
    if (this.quantity < 10) this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    if (!this.selectedSize) {
      alert('გთხოვ აირჩიო ზომა 👟');
      return;
    }

    alert(
      `${this.product?.name} (${this.selectedSize} ზომა, ${this.quantity} ცალი) დაემატა კალათაში ✅`
    );
  }
}