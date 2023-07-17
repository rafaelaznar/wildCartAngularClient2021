import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { ITipoproductoPage } from 'src/app/model/tipoproducto-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tipoproducto-selection-admin-unrouted',
  templateUrl: './tipoproducto-selection-admin-unrouted.component.html',
  styleUrls: ['./tipoproducto-selection-admin-unrouted.component.css'],
})

export class TipoproductoSelectionAdminUnroutedComponent implements OnInit {

  @Output() selection = new EventEmitter<number>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.producttype;
  strOperation: string = Constants.OPERATIONS.plist;
  //
  oPage: ITipoproductoPage;

  constructor(
    private oTipoproductoService: TipoproductoService,
    public oMetadataService: MetadataService,
  ) {
    this.oPage = {} as ITipoproductoPage;
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage = () => {
    this.oTipoproductoService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter).subscribe({
      next: (oPage: ITipoproductoPage) => {
        Object.assign(this.oPage, oPage);
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oPage.strFilter
        this.oTipoproductoService.getCount().subscribe({
          next: (nRecords: number) => {
            this.oPage.nRecords = nRecords;
          },
          error: (error: HttpErrorResponse) => {
            this.oPage.error = error;
            console.error('ERROR: ' + this.strEntity + '-' + this.strOperation + ': ' + error.status + '(' + error.statusText + ') ' + error.message);
            this.oPage.nRecords = null;
          }
        })
        if (this.oPage.totalPages > 0) {
          if (this.oPage.number > this.oPage.totalPages - 1) {
            this.oPage.number = this.oPage.totalPages - 1;
            this.getPage();
          }
        }
      },
      error: (error: HttpErrorResponse) => {
        this.oPage.error = error;
        console.error('ERROR: ' + this.strEntity + '-' + this.strOperation + ': ' + error.status + '(' + error.statusText + ') ' + error.message);
      }
    })
  };

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
