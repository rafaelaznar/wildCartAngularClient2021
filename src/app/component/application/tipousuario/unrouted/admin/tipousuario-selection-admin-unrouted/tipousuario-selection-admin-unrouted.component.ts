import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { IOrder } from 'src/app/model/model-interfaces';
import { ITipousuarioPage } from 'src/app/model/tipousuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-selection-admin-unrouted',
  templateUrl: './tipousuario-selection-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-selection-admin-unrouted.component.css'],
})

export class TipousuarioSelectionAdminUnroutedComponent implements OnInit {

  @Output() selection = new EventEmitter<number>();

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
    this.oTipoUsuarioService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter).subscribe({
      next: (oPage: ITipousuarioPage) => {
        Object.assign(this.oPage, oPage);
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oPage.strFilter
        if (this.oPage.totalPages > 0) {
          if (this.oPage.number > this.oPage.totalPages - 1) {
            this.oPage.number = this.oPage.totalPages - 1;
            this.getPage();
          }
        }
      },
      error: (error: HttpErrorResponse) => {
        this.oPage.error = error;
        console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
      }
    })
  }

  onSetPage = (nPage: number) => {
    this.oPage.number = nPage - 1; //pagination component starts at 1, but spring data starts at 0
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    this.oPage.size = nRpp;
    this.getPage();
  }

  onSetFilter(strFilter: string) {
    this.oPage.strFilter = strFilter;
    this.getPage();
  }

  onSetOrder(order: IOrder) {
    this.oPage.strSortField = order.sortField;
    this.oPage.strSortDirection = order.sortDirection;
    this.getPage();
  }

  onSelection(id: number) {
    this.selection.emit(id);
  }

}