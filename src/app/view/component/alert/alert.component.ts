import { Component, OnInit } from '@angular/core';
import {MdbNotificationRef} from "mdb-angular-ui-kit/notification";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})

export class AlertComponent {
  success: boolean;
  message: string | null = null;

export class AlertComponent implements OnInit {
  success: boolean;
  message: string;

  constructor(public notificationRef: MdbNotificationRef<AlertComponent>) {}
}
