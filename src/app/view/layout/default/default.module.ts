// create module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdbNotificationModule} from "mdb-angular-ui-kit/notification";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import { DefaultComponent } from './default.component';
import {HomeComponent} from "../../component/home/home.component";
import {CarouselComponent} from "../../component/carousel/carousel.component";
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {environment} from "../../../../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {MdbTabsModule} from "mdb-angular-ui-kit/tabs";
import {LoginComponent} from "../../component/login/login.component";
import {ProductCardComponent} from "../../component/product-card/product-card.component";
import {ProductListComponent} from "../../component/product-list/product-list.component";
import {BreadcrumbComponent} from "../../component/breadcrumb/breadcrumb.component";
import {FilterComponent} from "../../component/filter/filter.component";
import {Pagination} from "../../../model/pagination";
import {PaginationComponent} from "../../component/pagination/pagination.component";
import {ProductsComponent} from "../../component/products/products.component";
import {AboutUsComponent} from "../../component/about-us/about-us.component";

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
    AboutUsComponent
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    ProcessComponent,
    OrderCompleteComponent,
    CheckoutComponent,
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
        FormsModule,
    ]
})
export class DefaultModule {}
