import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { CompraService } from 'src/app/service/compra.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { ICompraPage } from 'src/app/model/compra-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-compra-plist-user-unrouted',
  templateUrl: './compra-plist-user-unrouted.component.html',
  styleUrls: ['./compra-plist-user-unrouted.component.css']
})

export class CompraPlistUserUnroutedComponent implements OnInit {

  private _id_factura: number;

  @Input()

  set id_factura(value: number) {
    this._id_factura = value;
    this.getPage();
  }

  get categoryId(): number {
    return this._id_factura;
  }

  //@Input() id_factura: number = null;
  //@Input() id_producto: number = null;

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.purchase
  strOperation: string = Constants.OPERATIONS.plist
  oPage: ICompraPage;

  constructor(
    private oCompraService: CompraService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as ICompraPage;
  }

  ngOnInit() {
    this.getPage();
  }

  getPage = () => {
    this.oCompraService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this._id_factura, null).subscribe({
      next: (oPage: ICompraPage) => {
        Object.assign(this.oPage, oPage);
        this.oPage.error = null;
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

  onSetOrder(order: IOrder) {
    this.oPage.strSortField = order.sortField;
    this.oPage.strSortDirection = order.sortDirection;
    this.getPage();
  }

}
