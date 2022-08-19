import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  @Input() process: Number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
