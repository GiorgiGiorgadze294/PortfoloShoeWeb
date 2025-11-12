import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './Pages/homepage/homepage';
import { ProductDetail } from './Pages/product-detail/product-detail';
import { Products } from './Pages/products/products';
import { Cart } from './Pages/cart/cart';
import { Checkout } from './Pages/checkout/checkout';
import { About } from './Pages/about/about';
import { Contact } from './Pages/contact/contact';

const routes: Routes = [
  {path:'',component:Homepage},
  {path:'product/:id',component:ProductDetail},
  {path:'products',component:Products},
  {path:'cart',component:Cart},
  {path:'checkout',component:Checkout},
  {path:'about',component:About},
  {path:'contact',component:Contact}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
