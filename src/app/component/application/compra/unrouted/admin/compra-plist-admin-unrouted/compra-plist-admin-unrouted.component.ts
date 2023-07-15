import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { CompraService } from 'src/app/service/compra.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { ICompraPage } from 'src/app/model/compra-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { IProducto } from 'src/app/model/producto-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { IFactura } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-compra-plist-admin-unrouted',
  templateUrl: './compra-plist-admin-unrouted.component.html',
  styleUrls: ['./compra-plist-admin-unrouted.component.css']
})

export class CompraPlistAdminUnroutedComponent implements OnInit {

  @Input() id_factura: number = null;
  @Input() id_producto: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.purchase
  strOperation: string = Constants.OPERATIONS.plist
  //
  oPage: ICompraPage;

  constructor(
    private oCompraService: CompraService,
    private oProductoService: ProductoService,
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as ICompraPage;
  }

  ngOnInit() {
    if (this.id_producto != null) {
      this.oProductoService.getOne(this.id_producto).subscribe({
        next: (oProducto: IProducto) => {
          this.oPage.strFilteredTitle = oProducto.nombre;
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
        }
      })
    }
    if (this.id_factura != null) {
      this.oFacturaService.getOne(this.id_factura).subscribe({
        next: (oFactura: IFactura) => {
          this.oPage.strFilteredTitle = oFactura.usuario.nombre + ' ' + oFactura.usuario.apellido1 + ' ' + oFactura.usuario.apellido2 + ' - ' + formatDate(oFactura.fecha, 'dd/MM/yyyy', 'es-ES');
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
        }
      })
    }
    this.getPage(); //important! don't call in constructor; id_tipousuario must be initialized before calling getPage()
  }

  getPage = () => {
    this.oCompraService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_factura, this.id_producto)
      .subscribe({
        next: (oPage: ICompraPage) => {
          Object.assign(this.oPage, oPage);
          this.oPage.error = null;
          this.oPage.strFilteredMessage = this.oPage.strFilter
          this.oCompraService.getCount().subscribe({
            next: (nRecords: number) => {
              this.oPage.nRecords = nRecords;
            },
            error: (error: HttpErrorResponse) => {
              this.oPage.error = error;
              console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
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

}
