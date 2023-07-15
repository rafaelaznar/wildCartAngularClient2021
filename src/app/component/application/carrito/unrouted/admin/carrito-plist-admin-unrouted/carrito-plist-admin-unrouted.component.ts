import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { CarritoService } from 'src/app/service/carrito.service';
import { ICarritoPage } from 'src/app/model/carrito-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ProductoService } from 'src/app/service/producto.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IProducto } from 'src/app/model/producto-interfaces';

@Component({
  selector: 'app-carrito-plist-admin-unrouted',
  templateUrl: './carrito-plist-admin-unrouted.component.html',
  styleUrls: ['./carrito-plist-admin-unrouted.component.css'],
})

export class CarritoPlistAdminUnroutedComponent implements OnInit {

  @Input() id_producto: number = null;
  @Input() id_usuario: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;
  //
  oPage: ICarritoPage;

  constructor(
    private oCarritoService: CarritoService,
    private oProductoService: ProductoService,
    private oUsuarioService: UsuarioService,
    public oMetadataService: MetadataService,
  ) {
    this.oPage = {} as ICarritoPage;
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
    if (this.id_usuario != null) {
      this.oUsuarioService.getOne(this.id_usuario).subscribe({
        next: (oUsuario: IUsuario) => {
          this.oPage.strFilteredTitle = oUsuario.nombre + ' ' + oUsuario.apellido1 + ' ' + oUsuario.apellido2;
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
        }
      })
    }
    this.getPage(); //important! don't call in constructor; id_usuario & id_producto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oCarritoService.getPage(
      this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection,
      this.oPage.strFilter, this.id_producto, this.id_usuario).subscribe({
        next: (oPage: ICarritoPage) => {
          Object.assign(this.oPage, oPage);
          this.oPage.error = null;
          this.oPage.strFilteredMessage = this.oPage.strFilter
          this.oCarritoService.getCount().subscribe({
            next: (nRecords: number) => {
              this.oPage.nRecords = nRecords;
            },
            error: (error: HttpErrorResponse) => {
              this.oPage.error = error;
              console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
              this.oPage.nRecords = null;
            }
          })
          if (this.oPage.number > this.oPage.totalPages - 1) {
            this.oPage.number = this.oPage.totalPages - 1;
            this.getPage();
          }
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
        }
      });
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

}
