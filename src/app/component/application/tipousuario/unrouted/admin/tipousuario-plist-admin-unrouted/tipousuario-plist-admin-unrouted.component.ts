import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/constant/constants';
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

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.usertype;
  strOperation: string = Constants.OPERATIONS.plist;
  oPage: ITipousuarioPage;

  constructor(
    private oTipoUsuarioService: TipousuarioService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as ITipousuarioPage;
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage = () => {
    this.oTipoUsuarioService
      .getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter)
      .subscribe((oPage: ITipousuarioPage) => {
        this.oPage = oPage;
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, null, null, null, null);
        if (this.oPage.totalPages > 0) {
          if (this.oPage.number > this.oPage.totalPages - 1) {
            this.oPage.number = this.oPage.totalPages - 1;
            this.getPage();
          }
        }
      });
  };

  onSetOrder(order: IOrder) {
    this.oPage.strSortField = order.sortField;
    this.oPage.strSortDirection = order.sortDirection;
    this.getPage();
  }

}