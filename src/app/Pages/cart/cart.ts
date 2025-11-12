import { Component, OnInit } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
}
@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  cartItems: CartItem[] = [];

  // New: shipping / progress
  freeShipThreshold = 150; // ₾, თუ არ გინდა progress — დააყენე 0
  shippingCost = 12;       // ₾

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.saveCart();
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.saveCart();
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }

  clearCart() {
    this.cartItems = [];
    localStorage.removeItem('cart');
  }

  getTotal() {
    return this.cartItems.reduce((t, i) => t + i.price * i.quantity, 0);
  }

  // Helpers for progress bar / shipping (optional UI sugar)
  freeShippingLeft(): number {
    if (!this.freeShipThreshold) return 0;
    const left = this.freeShipThreshold - this.getTotal();
    return left > 0 ? Math.ceil(left) : 0;
  }

  shippingProgress(): number {
    if (!this.freeShipThreshold) return 0;
    const pct = (this.getTotal() / this.freeShipThreshold) * 100;
    return Math.max(0, Math.min(100, Math.round(pct)));
  }
}