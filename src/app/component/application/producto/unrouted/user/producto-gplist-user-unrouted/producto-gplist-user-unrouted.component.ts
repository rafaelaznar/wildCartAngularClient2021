import { IProductoPage } from 'src/app/model/producto-interfaces';
import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { CarritoService } from 'src/app/service/carrito.service';
import { ProductoCarritoViewService } from 'src/app/service/productocarritoview.service';
import { Constants } from 'src/app/constant/constants';
import { IOrder } from 'src/app/model/model-interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: 'app-producto-gplist-user-unrouted',
  templateUrl: './producto-gplist-user-unrouted.component.html',
  styleUrls: ['./producto-gplist-user-unrouted.component.css']
})

export class ProductoGPlistUserUnroutedComponent implements OnInit {

  @Input() id_tipoproducto: number = null;
  @Output() cartChangeEE = new EventEmitter<number>();
  @ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.plist
  //
  oPage: IProductoPage;
  //
  strAPI_URL: string = API_URL;

  constructor(
    private oProductoService: ProductoCarritoViewService,
    private oCarritoService: CarritoService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as IProductoPage;
  }

  ngOnInit() {
    this.oPage.number = 0;
    this.oPage.size = 10;
    this.getPage();
  }

  getPage = () => {
    this.oProductoService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_tipoproducto).subscribe({
      next: (oPage: IProductoPage) => {
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

  addCarrito(id_producto: number) {
    this.oCarritoService.add(id_producto, 1).subscribe({
      next: (result: number) => {
        this.cartChangeEE.emit(id_producto);
        this.getPage();
      }
    })
  }

  removeCarrito(id_producto: number) {
    this.oCarritoService.reduce(id_producto, 1).subscribe({
      next: (result: number) => {
        this.cartChangeEE.emit(id_producto);
        this.getPage();
      }
    })
  }

}