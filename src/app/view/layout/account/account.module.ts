import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AccountComponent} from "./account.component";
import {SidebarComponent} from "../../component/sidebar/sidebar.component";



@NgModule({
  declarations: [
// bỏ các component dùng trong module này vào đây
    AccountComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class AccountModule { }
