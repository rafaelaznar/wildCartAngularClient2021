import { ProductoService } from '../../../../../service/producto.service';
import { IPageProducto, IProducto } from 'src/app/model/producto-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { PaginationService } from 'src/app/service/pagination.service';
import { IconService } from 'src/app/service/icon.service';
import { debounceTime } from 'rxjs/operators';
import { IOrder } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-producto-plist-unrouted',
  templateUrl: './producto-plist-unrouted.component.html',
  styleUrls: ['./producto-plist-unrouted.component.css']
})
export class ProductoPlistUnroutedComponent implements OnInit {

  @Input() id_tipoproducto: number = null;
  @Input() mode: boolean = true; //true=edición; false=selección
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
    private oPaginationService: PaginationService,
    private oProductoService: ProductoService,
    public oIconService: IconService
  ) {
    this.nPage = 1;
    this.getPage();
  }

  ngOnInit(): void {
    this.subjectFilter.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.getPage();
      this.nPage = 1;
    });
  }

  getPage = () => {
    this.oProductoService.getPage(this.nPageSize, this.nPage, this.strSortField, this.strSortDirection, this.strFilter, this.id_tipoproducto).subscribe((oPage: IPageProducto) => {
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
      this.aPaginationBar = this.oPaginationService.pagination(this.nTotalPages, this.nPage);
    })
  }

  doJumpToPage = () => {
    this.getPage();
    return false;
  }
  onKeyUpFilter(event: KeyboardEvent): void {
    this.subjectFilter.next();
  }

  doResetOrder() {
    this.strSortField = "";
    this.strSortDirection = "";
    this.getPage();
  }

  doSetOrder(order: IOrder) {
    this.strSortField = order.sortField;
    this.strSortDirection = order.sortDirection;
    this.getPage();
  }

  onSelection(id: number) {
    console.log("selection plist emite " + id);
    this.selection.emit(id);
  }

}