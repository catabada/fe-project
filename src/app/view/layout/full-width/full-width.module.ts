import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MdbNotificationModule} from "mdb-angular-ui-kit/notification";
import {FullWidthComponent} from "./full-width.component";
import {NotFoundComponent} from "../../page/error/not-found/not-found.component";
import {ForbiddenComponent} from "../../page/error/forbidden/forbidden.component";
import {LoginComponent} from "../../page/login/login.component";
import {MdbTabsModule} from "mdb-angular-ui-kit/tabs";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    // bỏ các component dùng trong module này vào đây
    FullWidthComponent,
    NotFoundComponent,
    ForbiddenComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    MdbNotificationModule,
    MdbTabsModule,
    ReactiveFormsModule,
  ]
})
export class FullWidthModule {
}
