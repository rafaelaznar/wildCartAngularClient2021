import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationService } from 'src/app/service/pagination.service';

@Component({
  selector: 'app-pagination-unrouted',
  templateUrl: './pagination-unrouted.component.html',
  styleUrls: ['./pagination-unrouted.component.css']
})

export class PaginationUnroutedComponent implements OnInit {
  _nPage: number;
  _nTotalPages: number;

  @Input()
  set nPage(value: number) {
    //console.log("set npage " + value);
    this._nPage = value;
    this.aPaginationBar = this.oPaginationService.pagination(this._nTotalPages, this._nPage);
  }  
  get nPage(): number {
    return this._nPage;
  }

  @Input()
  set nTotalPages(value: number) {
    //console.log("set ntotalpages " + value);
    this._nTotalPages = value;
    this.aPaginationBar = this.oPaginationService.pagination(this._nTotalPages, this._nPage);
  }
  get nTotalPages(): number {
    return this._nTotalPages;
  }

  @Output() eePage = new EventEmitter<number>();

  aPaginationBar: string[];

  constructor(
    private oPaginationService: PaginationService
  ) { }

  ngOnInit() {
  }

  doJumpToPage() {
    this.eePage.emit(this._nPage);
    return false;
  }

}
