import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  title = "Giới thiệu";

  constructor() { }

  ngOnInit(): void {
    document.title = 'AHA - ' + this.title;
  }

}
