import { Component, OnInit } from '@angular/core';
import {MdbPopconfirmRef} from "mdb-angular-ui-kit/popconfirm";

@Component({
  selector: 'app-pop-confirm',
  templateUrl: './pop-confirm.component.html',
  styleUrls: ['./pop-confirm.component.scss']
})
export class PopConfirmComponent implements OnInit {

  constructor(public popconfirmRef: MdbPopconfirmRef<PopConfirmComponent>) { }

  ngOnInit(): void {
  }

  onConfirm() {

  }

}
