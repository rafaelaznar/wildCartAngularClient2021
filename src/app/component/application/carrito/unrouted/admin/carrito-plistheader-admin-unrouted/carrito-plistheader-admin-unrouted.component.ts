import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOrder } from 'src/app/model/model-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-carrito-plistheader-admin-unrouted]',
  templateUrl: './carrito-plistheader-admin-unrouted.component.html',
  styleUrls: ['./carrito-plistheader-admin-unrouted.component.css']
})

export class CarritoPlistheaderAdminUnroutedComponent implements OnInit {
  
  @Input() mode: boolean = true; //true=edición; false=selección
  @Input() strSortField: string = "";
  @Input() strSortDirection: string = "";
  @Output() sort = new EventEmitter<IOrder>();


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
