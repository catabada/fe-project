import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AccountComponent} from "./account.component";
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {MdbSidenavModule} from "mdb-angular-ui-kit/sidenav";
import {ProfileComponent} from "../../component/profile/profile.component";



@NgModule({
  declarations: [
// bỏ các component dùng trong module này vào đây
    AccountComponent,
    SidebarComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MdbSidenavModule,
  ]
})
export class AccountModule { }
