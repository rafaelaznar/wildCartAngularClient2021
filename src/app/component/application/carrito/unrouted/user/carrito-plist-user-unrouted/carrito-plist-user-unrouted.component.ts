import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { CarritoService } from 'src/app/service/carrito.service';
import { ICarrito, ICarritoPage } from 'src/app/model/carrito-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';

@Component({
  selector: 'app-carrito-cplist-user-unrouted',
  templateUrl: './carrito-plist-user-unrouted.component.html',
  styleUrls: ['./carrito-plist-user-unrouted.component.css'],
})

export class CarritoPlistUserUnroutedComponent implements OnInit {

  @Input() id_producto: number = null;
  @Input() id_usuario: number = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Input() id_tipousuario_session: number = null;
  @Output() selection = new EventEmitter<number>();
  @Output() addCarritoEE = new EventEmitter<number>();
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;
  //
  oPage: ICarritoPage;
  nTotal: number = 0;

  constructor(
    private oCarritoService: CarritoService,
    public oMetadataService: MetadataService,
  ) {
    this.oPage = {} as ICarritoPage;
  }

  ngOnInit() {
    this.getPage();
  }

  getPage = () => {
    this.oCarritoService
      .getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_producto, this.id_usuario)
      .subscribe({
        next: (oPage: ICarritoPage) => {
          this.oPage = oPage;
          this.oPage.error = null;
          this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, 'usuario', this.id_usuario, 'producto', this.id_producto);
          if (this.oPage.totalPages > 0) {
            if (this.oPage.number > this.oPage.totalPages - 1) {
              this.oPage.number = this.oPage.totalPages - 1;
              this.getPage();
            }
          }
          this.getTotalCarrito4User();
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

  onSelection(id: number) {
    this.selection.emit(id);
  }

  onAddCarrito(id_producto: number) {
    this.getPage();
    this.addCarritoEE.emit(id_producto);
  }

  getTotalCarrito4User() {
    this.oCarritoService.getTotalCarrito4User().subscribe({
      next: (nTotal: number) => {
        this.nTotal = nTotal;
      }
    });
  }

}
