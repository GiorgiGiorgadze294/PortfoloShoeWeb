import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homepage } from './Pages/homepage/homepage';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { ProductDetail } from './Pages/product-detail/product-detail';
import { Products } from './Pages/products/products';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cart } from './Pages/cart/cart';
import { Checkout } from './Pages/checkout/checkout';
import { About } from './Pages/about/about';
import { Contact } from './Pages/contact/contact';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    Homepage,
    Navbar,
    Footer,
    ProductDetail,
    Products,
    Cart,
    Checkout,
    About,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
