import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFacturaPage } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-factura-selection-admin-unrouted',
  templateUrl: './factura-selection-admin-unrouted.component.html',
  styleUrls: ['./factura-selection-admin-unrouted.component.css']
})

export class FacturaSelectionAdminUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  @Output() selection = new EventEmitter<number>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.invoice
  strOperation: string = Constants.OPERATIONS.plist
  //
  oPage: IFacturaPage;

  constructor(
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as IFacturaPage;
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage = () => {
    this.oFacturaService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_usuario).subscribe({
      next: (oPage: IFacturaPage) => {
        Object.assign(this.oPage, oPage);
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oPage.strFilter
        this.oFacturaService.getCount().subscribe({
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
