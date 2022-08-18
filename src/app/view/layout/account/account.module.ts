import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AccountComponent} from "./account.component";
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {MdbSidenavModule} from "mdb-angular-ui-kit/sidenav";
import {AddressComponent} from "../../component/address/address.component";
import {ProfileComponent} from "../../component/profile/profile.component";
import {MdbDatepickerModule} from "mdb-angular-ui-kit/datepicker";
import {MdbRadioModule} from "mdb-angular-ui-kit/radio";
import {OrderHistoryComponent} from "../../component/order-history/order-history.component";



@NgModule({
  declarations: [
// bỏ các component dùng trong module này vào đây
    AccountComponent,
    SidebarComponent,
    AddressComponent,
    ProfileComponent,
    OrderHistoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MdbSidenavModule,
    MdbDatepickerModule,
    MdbRadioModule,
  ]
})
export class AccountModule { }
