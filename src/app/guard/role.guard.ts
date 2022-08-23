import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from "../service/authentication.service";
import {AppRole} from "../model/app-role.model";
import {AlertComponent} from "../view/component/alert/alert.component";
import {MdbNotificationRef, MdbNotificationService} from "mdb-angular-ui-kit/notification";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  notificationRef: MdbNotificationRef<AlertComponent> | null = null;

  constructor(private authenticationService: AuthenticationService, private notificationService: MdbNotificationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = route.data.role as AppRole;

    if (role) {
      const match = this.authenticationService.roleMatch(role);
      if (match) {
        return true;
      }
    }

    this.openAlert('You are not authorized to access this page');
    return false
  }

  openAlert(message: string) {
    this.notificationRef = this.notificationService.open(AlertComponent, {
      data: {success: false, message: message},
      autohide: true,
      delay: 2000,
    })
  }

}
