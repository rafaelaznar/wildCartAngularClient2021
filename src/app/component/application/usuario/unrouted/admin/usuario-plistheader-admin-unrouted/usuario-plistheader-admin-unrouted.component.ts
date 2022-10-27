import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from 'src/app/model/constants';
import { IOrder } from 'src/app/model/model-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-usuario-plistheader-admin-unrouted]',
  templateUrl: './usuario-plistheader-admin-unrouted.component.html',
  styleUrls: ['./usuario-plistheader-admin-unrouted.component.css']
})

export class UsuarioPlistheaderAdminUnroutedComponent implements OnInit {

  @Input() strSortField: string = "";
  @Input() strSortDirection: string = "";
  @Input() mode: boolean = true; //mode ... true=normal; false=selection;
  @Output() sort = new EventEmitter<IOrder>();

  strEntity: string = Constants.ENTITIES.user;
  strOperation: string = Constants.OPERATIONS.plist;

  constructor(
    public oMetadataService: MetadataService
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
