import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AccountComponent} from "./account.component";
import {SidebarComponent} from "../../shared/sidebar/sidebar.component";
import {MdbSidenavModule} from "mdb-angular-ui-kit/sidenav";
import {ChangePasswordComponent} from "../../component/change-password/change-password.component";
import {ProfileComponent} from "../../component/profile/profile.component";
import {MdbDatepickerModule} from "mdb-angular-ui-kit/datepicker";
import {MdbRadioModule} from "mdb-angular-ui-kit/radio";
import {OrderHistoryComponent} from "../../component/order-history/order-history.component";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderDetailHistoryComponent} from "../../component/orderDetail-history/orderDetail-history.component";

@NgModule({
  declarations: [
// bỏ các component dùng trong module này vào đây
    AccountComponent,
    SidebarComponent,
    ChangePasswordComponent,
    ProfileComponent,
    OrderHistoryComponent,
    OrderDetailHistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MdbSidenavModule,
    MdbDatepickerModule,
    MdbRadioModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
