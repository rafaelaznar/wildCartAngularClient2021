import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-producto-plistheader-unrouted]',
  templateUrl: './producto-plistheader-unrouted.component.html',
  styleUrls: ['./producto-plistheader-unrouted.component.css']
})
export class ProductoPlistheaderUnroutedComponent implements OnInit {
  @Input() strSortField: string = "";
  @Input() strSortDirection: string = "";
  @Output() sort = new EventEmitter<any>();

  strEntity: string = "producto";
  strOperation: string = "plist";
  constructor(
    public oIconService: IconService
  ) { }

  ngOnInit() {
  }
  
  doSetOrder(order: string) {
    this.strSortField = order;
    if (this.strSortDirection == 'asc') {
      this.strSortDirection = 'desc';
    } else if (this.strSortDirection == 'desc') {
      this.strSortDirection = '';
    } else {
      this.strSortDirection = 'asc';
    }
    this.sort.emit({ strSortField: order, strSortDirection: this.strSortDirection });
  }


}
