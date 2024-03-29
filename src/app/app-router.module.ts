import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./view/layout/default/default.component";
import {FullWidthComponent} from "./view/layout/full-width/full-width.component";
import {HomeComponent} from "./view/page/home/home.component";
import {LoginComponent} from "./view/page/login/login.component";
import {ProductsComponent} from "./view/page/products/products.component";
import {AboutUsComponent} from "./view/page/about-us/about-us.component";
import {ProductDetailComponent} from "./view/page/product-detail/product-detail.component";
import {CartComponent} from "./view/page/cart/cart.component";
import {OrderCompleteComponent} from "./view/page/order-complete/order-complete.component";
import {AccountComponent} from "./view/page/account/account.component";
import {ChangePasswordComponent} from "./view/component/change-password/change-password.component";
import {ProfileComponent} from "./view/component/profile/profile.component";
import {OrderHistoryComponent} from "./view/component/order-history/order-history.component";
import {NotFoundComponent} from "./view/page/error/not-found/not-found.component";
import {ForbiddenComponent} from "./view/page/error/forbidden/forbidden.component";
import {CheckoutComponent} from "./view/page/checkout/checkout.component";
import {AuthenticationGuard} from "./guard/authentication.guard";
import {OrderDetailHistoryComponent} from "./view/component/orderDetail-history/orderDetail-history.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'product/:gender', component: ProductsComponent, data: {title: 'Sản phẩm', gender:'1'}},
      {path: 'product/search', component: ProductsComponent, data: {title: 'Tìm kiếm', query:'1'}},
      {path: 'about', component: AboutUsComponent},
      {path: 'product/:gender/:id', component: ProductDetailComponent},
      {path: 'cart', component: CartComponent},
      {path: 'order-complete', component: OrderCompleteComponent},
      {path: 'checkout', component: CheckoutComponent, canActivate: [AuthenticationGuard],},
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthenticationGuard],
        children: [
          {path: '', redirectTo: 'profile', pathMatch: 'full'},
          {path: 'change-password', component: ChangePasswordComponent},
          {path: 'profile', component: ProfileComponent},
          {path: 'order-history', component: OrderHistoryComponent},
          {path: 'orderdetail-history/:orderTrackingNumber', component: OrderDetailHistoryComponent},
        ]
      },
    ]
  },
  {
    path: '',
    component: FullWidthComponent,
    children: [
      {path: 'not-found', component: NotFoundComponent},
      {path: 'forbidden', component: ForbiddenComponent},
      {path: 'login', component: LoginComponent},
    ]
  },
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
