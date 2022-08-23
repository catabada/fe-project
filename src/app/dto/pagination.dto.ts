export class Pagination {
  length: number;
  pageSize: number;

  totalPages(): number {
      return Math.ceil(Number.parseFloat(String(this.length)) / Number.parseFloat(String(this.pageSize)));
  }

  constructor(length: number, pageSize: number) {
    this.length = length;
    this.pageSize = pageSize;
  }

}
