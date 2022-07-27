import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DefaultComponent} from "./view/layout/default/default.component";
import {FullWidthComponent} from "./view/layout/full-width/full-width.component";
import {NotFoundComponent} from "./view/component/error/not-found/not-found.component";
import { ForbiddenComponent } from './view/component/error/forbidden/forbidden.component';
import {HomeComponent} from "./view/component/home/home.component";
import { LoginComponent } from './view/component/login/login.component';
import {ProductsComponent} from "./view/component/products/products.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'product', component: ProductsComponent }
    ]
  },
  {
    path: '',
    component: FullWidthComponent,
    children: [
      { path: 'not-found', component: NotFoundComponent },
      { path: 'forbidden', component: ForbiddenComponent }
    ]
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
