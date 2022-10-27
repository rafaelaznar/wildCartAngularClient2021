import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Constants } from 'src/app/model/constants';
import { IOrder } from 'src/app/model/model-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-carrito-plistheader-user-unrouted]',
  templateUrl: './carrito-plistheader-user-unrouted.component.html',
  styleUrls: ['./carrito-plistheader-user-unrouted.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CarritoPlistheaderUserUnroutedComponent implements OnInit {

  @Input() mode: boolean = true; //true=edición; false=selección
  @Input() strSortField: string = "";
  @Input() strSortDirection: string = "";
  @Output() sort = new EventEmitter<IOrder>();

  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

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
