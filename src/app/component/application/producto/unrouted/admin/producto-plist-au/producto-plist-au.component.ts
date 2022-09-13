import { ProductoService } from '../../../../../../service/producto.service';
import { IProductoPage, IProducto } from 'src/app/model/producto-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IconService } from 'src/app/service/icon.service';
import { IOrder } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-producto-plist-admin-unrouted',
  templateUrl: './producto-plist-au.component.html',
  styleUrls: ['./producto-plist-au.component.css']
})

export class ProductoPlistAdminUnroutedComponent implements OnInit {

  @Input() id_tipoproducto: number = null;
  @Input() mode: boolean = true; //mode ... true=normal; false=selection;
  @Output() selection = new EventEmitter<number>();

  strEntity: string = "producto"
  strOperation: string = "plist"
  strTitleSingular: string = "Producto";
  strATitleSingular: string = "El producto";
  strTitlePlural: string = "Productos";
  //
  aProductos: IProducto[];
  //  
  nTotalElements: number;
  nTotalPages: number;
  nPage: number;
  aPaginationBar: string[];
  nPageSize: number = 10;
  //
  strSortField: string = "";
  strSortDirection: string = "";
  //
  strFilter: string = "";
  strFilteredMessage: string = "";
  subjectFilter = new Subject();
  //
  strResult: string = null;

  constructor(
    private oProductoService: ProductoService,
    public oIconService: IconService
  ) {
  }

  ngOnInit(): void {
    this.nPage = 1;
    this.getPage(); //important! id_tipoproducto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oProductoService.getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter, this.id_tipoproducto).subscribe((oPage: IProductoPage) => {
      if (this.id_tipoproducto) {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por el tipo de producto " + this.id_tipoproducto + " y por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado filtrado por el tipo de producto " + this.id_tipoproducto;
        }
      } else {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado NO filtrado";
        }
      }
      this.aProductos = oPage.content;
      this.nTotalElements = oPage.totalElements;
      this.nTotalPages = oPage.totalPages;
      if (this.nPage > this.nTotalPages) {
        this.nPage = this.nTotalPages;
        this.getPage();
      }
    })
  }

  onSetPage = (nPage: number) => {
    this.nPage = nPage;
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    this.nPageSize = nRpp;
    this.getPage();
  }

  onSetFilter(strFilter: string) {
    this.strFilter = strFilter;
    this.getPage();
  }

  onSetOrder(order: IOrder) {
    this.strSortField = order.sortField;
    this.strSortDirection = order.sortDirection;
    this.getPage();
  }

  onSelection(id: number) {
    this.selection.emit(id);
  }

}