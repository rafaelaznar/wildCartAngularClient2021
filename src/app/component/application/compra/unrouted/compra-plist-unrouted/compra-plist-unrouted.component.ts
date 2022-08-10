import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IconService } from 'src/app/service/icon.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { CompraService } from 'src/app/service/compra.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { ICompra, ICompraPage } from 'src/app/model/compra-interfaces';

@Component({
  selector: 'app-compra-plist-unrouted',
  templateUrl: './compra-plist-unrouted.component.html',
  styleUrls: ['./compra-plist-unrouted.component.css']
})

export class CompraPlistUnroutedComponent implements OnInit {

  @Input() id_factura: number = null;
  @Input() id_producto: number = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();

  strEntity: string = "compra"
  strOperation: string = "plist"
  strTitleSingular: string = "Compra";
  strATitleSingular: string = "La compra";
  strTitlePlural: string = "Compras";
  //
  aCompras: ICompra[];
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
    private oCompraService: CompraService,
    public oIconService: IconService,
    private oPaginationService: PaginationService
  ) {
  }

  ngOnInit(): void {
    this.nPage = 1;
    this.getPage(); //important! id_tipoproducto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oCompraService.getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter, this.id_factura, this.id_producto).subscribe((oPage: ICompraPage) => {
      if (this.id_factura) {

        if (this.id_producto) {
          if (this.strFilter) {
            this.strFilteredMessage = "Listado filtrado por la factura " + this.id_factura + ", por el producto " + this.id_producto + " y por " + this.strFilter;
          } else {
            this.strFilteredMessage = "Listado filtrado por la factura " + this.id_factura + " y por el producto " + this.id_producto;
          }
        } else { //no producto

          if (this.strFilter) {
            this.strFilteredMessage = "Listado filtrado por  la factura " + this.id_factura + " y por " + this.strFilter;
          } else {
            this.strFilteredMessage = "Listado filtrado por  la factura " + this.id_factura;
          }

        }

      } else { // no factura
        if (this.id_producto) {
          if (this.strFilter) {
            this.strFilteredMessage = "Listado filtrado por el producto " + this.id_producto + " y por " + this.strFilter;
          } else {
            this.strFilteredMessage = "Listado filtrado por el producto " + this.id_producto;
          }
        } else { //no producto

          if (this.strFilter) {
            this.strFilteredMessage = "Listado filtrado por " + this.strFilter;
          } else {
            this.strFilteredMessage = "Listado NO filtrado";
          }

        }
      }
      this.aCompras = oPage.content;
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
