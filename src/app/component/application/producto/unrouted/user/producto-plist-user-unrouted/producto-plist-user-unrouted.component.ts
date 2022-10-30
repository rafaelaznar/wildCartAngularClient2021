import { IProductoPage } from 'src/app/model/producto-interfaces';
import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { CarritoService } from 'src/app/service/carrito.service';
import { ProductoCarritoViewService } from 'src/app/service/productocarritoview.service';
import { Constants } from 'src/app/model/constants';
import { IOrder } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-producto-plist-user-unrouted',
  templateUrl: './producto-plist-user-unrouted.component.html',
  styleUrls: ['./producto-plist-user-unrouted.component.css']
})

export class ProductoPlistUserUnroutedComponent implements OnInit {

  @Input() id_tipousuario_session: number = null;
  @Input() id_tipoproducto: number = null;
  @Output() addCarritoEE = new EventEmitter<number>();
  @ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.plist
  oPage: IProductoPage;

  constructor(
    private oProductoService: ProductoCarritoViewService,
    private oCarritoService: CarritoService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as IProductoPage;
  }

  ngOnInit() {
    this.getPage();
  }

  getPage = () => {
    this.oProductoService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_tipoproducto)
      .subscribe((oPage: IProductoPage) => {
        this.oPage = oPage;
        this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, 'tipoproducto', this.id_tipoproducto, null, null);
        if (this.oPage.number > this.oPage.totalPages - 1) {
          this.oPage.number = this.oPage.totalPages - 1;
          this.getPage();
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
    this.oCarritoService.add(id_producto, 1).subscribe((result: number) => {
      this.addCarritoEE.emit(id_producto);
      this.getPage();
    })
  }

  removeCarrito(id_producto: number) {
    this.oCarritoService.reduce(id_producto, 1).subscribe((result: number) => {
      this.addCarritoEE.emit(id_producto);
      this.getPage();
    })
  }

}