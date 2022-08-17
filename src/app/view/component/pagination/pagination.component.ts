import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() currentPage = new EventEmitter();
  numPage: number = 1;
  @Input() pagination: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  changePage(page: number) {
    this.numPage = page;
    this.currentPage.emit(page);
  }

  nextPage() {
    if (this.numPage < this.pagination.totalPages()) {
      this.numPage++;
      this.currentPage.emit(this.numPage);
    }
  }

  previousPage() {
    if (this.numPage > 1) {
      this.numPage--;
      this.currentPage.emit(this.numPage);
    }
  }

  counter(i: number) {
    return Array(i);
  }
}
