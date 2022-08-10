import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOrder } from 'src/app/model/model-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-compra-plistheader-unrouted]',
  templateUrl: './compra-plistheader-unrouted.component.html',
  styleUrls: ['./compra-plistheader-unrouted.component.css']
})
export class CompraPlistheaderUnroutedComponent implements OnInit {
  
  @Input() strSortField: string = "";
  @Input() strSortDirection: string = "";
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() sort = new EventEmitter<IOrder>();

  strEntity: string = "compra";
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
    this.sort.emit({ sortField: order, sortDirection: this.strSortDirection });
  }


}
