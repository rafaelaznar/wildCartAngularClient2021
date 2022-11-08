import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from 'src/app/model/constants';
import { IOrder } from 'src/app/model/model-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-factura-plistheader-admin-unrouted]',
  templateUrl: './factura-plistheader-admin-unrouted.component.html',
  styleUrls: ['./factura-plistheader-admin-unrouted.component.css']
})

export class FacturaPlistheaderAdminUnroutedComponent implements OnInit {

  @Input() strSortField: string = "";
  @Input() strSortDirection: string = "";
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() sort = new EventEmitter<IOrder>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.invoice;
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
