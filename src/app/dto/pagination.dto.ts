export class Pagination {
  length: number;
  pageSize: number;

  totalPages(): number {
    return Math.ceil(this.length / this.pageSize);
  }

  constructor(length: number, pageSize: number) {
    this.length = length;
    this.pageSize = pageSize;
  }

}
