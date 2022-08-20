import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./view/layout/default/default.component";
import {FullWidthComponent} from "./view/layout/full-width/full-width.component";
import {NotFoundComponent} from "./view/page/error/not-found/not-found.component";
import {ForbiddenComponent} from './view/page/error/forbidden/forbidden.component';
import {HomeComponent} from "./view/page/home/home.component";
import {LoginComponent} from './view/page/login/login.component';
import {ProductsComponent} from "./view/component/products/products.component";
import {ProductDetailComponent} from "./view/page/product-detail/product-detail.component";
import {CartComponent} from "./view/page/cart/cart.component";
import {OrderCompleteComponent} from "./view/page/order-complete/order-complete.component";
import {AboutUsComponent} from "./view/page/about-us/about-us.component";
import {AccountComponent} from "./view/component/account/account.component";
import {AddressComponent} from "./view/component/address/address.component";
import {ProfileComponent} from "./view/component/profile/profile.component";
import {OrderHistoryComponent} from "./view/component/order-history/order-history.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'product', component: ProductsComponent},
      {path: 'about', component: AboutUsComponent},
      {path: 'product/:id', component: ProductDetailComponent},
      {path: 'cart', component: CartComponent},
      {path: 'order-complete', component: OrderCompleteComponent},
      {
        path: 'account',
        component: AccountComponent,
        children: [
          {path: '', redirectTo: 'profile', pathMatch: 'full'},
          {path: 'address', component: AddressComponent},
          {path: 'profile', component: ProfileComponent},
          {path: 'order-history', component: OrderHistoryComponent}
        ]
      },
    ]
  },
  {
    path: '',
    component: FullWidthComponent,
    children: [
      {path: 'not-found', component: NotFoundComponent},
      {path: 'forbidden', component: ForbiddenComponent}
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'about', component: AboutUsComponent }
      { path: 'product', component: ProductsComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'order-complete', component: OrderCompleteComponent },
      { path: 'check-out', component: CheckoutComponent },
    ]
  },
  {
    path: '',
    component: FullWidthComponent,
    children: [
      {path: 'not-found', component: NotFoundComponent},
      {path: 'forbidden', component: ForbiddenComponent}
    ]
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {path: 'address', component: AddressComponent},
      {path:'profile', component: ProfileComponent},
      {path:'order-history', component: OrderHistoryComponent},
    ]
  },
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}

]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRouterModule {
}
