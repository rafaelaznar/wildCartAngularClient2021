import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/model/constants';
import { IOrder } from 'src/app/model/model-interfaces';
import { ITipousuario, ITipousuarioPage } from 'src/app/model/tipousuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-plist-admin-unrouted',
  templateUrl: './tipousuario-plist-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-plist-admin-unrouted.component.css'],
})

export class TipousuarioPlistAdminUnroutedComponent implements OnInit {

  strEntity: string = Constants.ENTITIES.usertype;
  strOperation: string = Constants.OPERATIONS.plist;
  aTipoUsuarios: ITipousuario[];
  nTotalElements: number;
  nTotalPages: number;
  nPage: number;
  nPageSize: number = 10;
  strSortField: string = "";
  strSortDirection: string = "";
  strFilter: string = "";
  strFilteredMessage: string = "";

  constructor(
    private oTipoUsuarioService: TipousuarioService,
    public oMetadataService: MetadataService
  ) {
    this.nPage = 1;
    this.getPage();
  }

  ngOnInit(): void { }

  getPage = () => {
    this.oTipoUsuarioService
      .getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter)
      .subscribe((oPage: ITipousuarioPage) => {
        this.strFilteredMessage = this.oMetadataService.getFilterMsg(this.strFilter, null, null, null, null);
        this.aTipoUsuarios = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.nTotalPages = oPage.totalPages;
        if (this.nPage > this.nTotalPages) {
          this.nPage = this.nTotalPages;
          this.getPage();
        }
      });
  };

  jumpToPage = () => {
    this.getPage();
    return false;
  };

  onSetOrder(order: IOrder) {
    this.strSortField = order.sortField;
    this.strSortDirection = order.sortDirection;
    this.getPage();
  }

}