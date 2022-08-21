// create module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdbNotificationModule} from "mdb-angular-ui-kit/notification";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { DefaultComponent } from './default.component';
import {CarouselComponent} from "../../component/carousel/carousel.component";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {environment} from "../../../../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {MdbTabsModule} from "mdb-angular-ui-kit/tabs";
import {ProductCardComponent} from "../../component/product-card/product-card.component";
import {ProductListComponent} from "../../component/product-list/product-list.component";
import {BreadcrumbComponent} from "../../component/breadcrumb/breadcrumb.component";
import {FilterComponent} from "../../component/filter/filter.component";
import {PaginationComponent} from "../../component/pagination/pagination.component";
import {ProcessComponent} from "../../component/process/process.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "../../page/home/home.component";
import {LoginComponent} from "../../page/login/login.component";
import {ProductsComponent} from "../../page/products/products.component";
import {ProductDetailComponent} from "../../page/product-detail/product-detail.component";
import {OrderCompleteComponent} from "../../page/order-complete/order-complete.component";
import {CartComponent} from "../../page/cart/cart.component";
import {CheckoutComponent} from "../../component/checkout/checkout.component";

@NgModule({
  declarations: [
    // bỏ các component dùng trong module này vào đây
    DefaultComponent,
    HomeComponent,
    CarouselComponent,
    LoginComponent,
    ProductCardComponent,
    ProductListComponent,
    BreadcrumbComponent,
    FilterComponent,
    PaginationComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    ProcessComponent,
    OrderCompleteComponent,
    CheckoutComponent
  ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule,
        MdbNotificationModule,
        MdbCarouselModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        MdbTabsModule,
        ReactiveFormsModule,
        FormsModule,
    ]


})
export class DefaultModule {}
