import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  cartItems: CartItem[] = [];
  fullName: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  notes: string = '';
  paymentMethod: string = 'cash';

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  confirmOrder() {
    if (!this.fullName || !this.phone || !this.address || !this.city) {
      alert('გთხოვ შეავსე ყველა საჭირო ველი!');
      return;
    }

    alert(`✅ შეკვეთა დადასტურებულია!\n\nმიწოდება მოხდება მისამართზე:\n${this.city}, ${this.address}\n\nგადახდა: ნაღდი ფულით (${this.getTotal()} ₾)`);

    localStorage.removeItem('cart');
  }
}