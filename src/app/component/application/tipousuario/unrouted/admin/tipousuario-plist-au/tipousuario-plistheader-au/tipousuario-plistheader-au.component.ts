import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOrder } from 'src/app/model/model-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-tipousuario-plistheader-admin-unrouted]',
  templateUrl: './tipousuario-plistheader-au.component.html',
  styleUrls: ['./tipousuario-plistheader-au.component.css']
})

export class TipousuarioPlistheaderAdminUnroutedComponent implements OnInit {
  
  @Input() strSortField: string = "";
  @Input() strSortDirection: string = "";
  @Input() mode: boolean = true; //mode ... true=normal; false=selection;
  @Output() sort = new EventEmitter<IOrder>();

  strEntity: string = "usuario";
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
