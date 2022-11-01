import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { CarritoService } from 'src/app/service/carrito.service';
import { ICarritoPage } from 'src/app/model/carrito-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-carrito-plist-admin-unrouted',
  templateUrl: './carrito-plist-admin-unrouted.component.html',
  styleUrls: ['./carrito-plist-admin-unrouted.component.css'],
})

export class CarritoPlistAdminUnroutedComponent implements OnInit {

  @Input() id_producto: number = null;
  @Input() id_usuario: number = null;

  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;
  oPage: ICarritoPage;

  constructor(
    private oCarritoService: CarritoService,
    public oMetadataService: MetadataService,
  ) {
    this.oPage = {} as ICarritoPage;
  }

  ngOnInit() {
    this.getPage(); //important! don't call in constructor; id_usuario & id_producto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oCarritoService
      .getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_producto, this.id_usuario)
      .subscribe((oPage: ICarritoPage) => {
        this.oPage = oPage;
this.oPage.error = null; 
        this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, 'usuario', this.id_usuario, 'producto', this.id_producto);
        if (this.oPage.number > this.oPage.totalPages - 1) {
          this.oPage.number = this.oPage.totalPages - 1;
          this.getPage();
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
