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

@NgModule({
  declarations: [
    // bỏ các component dùng trong module này vào đây
    DefaultComponent,
    HomeComponent,
    CarouselComponent,
    LoginComponent,
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
  ]
})
export class DefaultModule {}
