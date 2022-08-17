import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MdbNotificationModule} from "mdb-angular-ui-kit/notification";
import { FullWidthComponent } from "./full-width.component";
import { NotFoundComponent } from "../../component/error/not-found/not-found.component";
import { ForbiddenComponent } from "../../component/error/forbidden/forbidden.component";

@NgModule({
  declarations: [
    // bỏ các component dùng trong module này vào đây
    FullWidthComponent,
    NotFoundComponent,
    ForbiddenComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    MdbNotificationModule,
  ]
})
export class FullWidthModule { }
