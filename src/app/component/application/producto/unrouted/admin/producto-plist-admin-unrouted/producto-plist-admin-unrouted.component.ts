import { ProductoService } from '../../../../../../service/producto.service';
import { IProductoPage, IProducto } from 'src/app/model/producto-interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { IOrder } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-producto-plist-admin-unrouted',
  templateUrl: './producto-plist-admin-unrouted.component.html',
  styleUrls: ['./producto-plist-admin-unrouted.component.css']
})

export class ProductoPlistAdminUnroutedComponent implements OnInit {

  @Input() id_tipoproducto: number = null;

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
  

  constructor(
    private oProductoService: ProductoService,
    public oMetadataService: MetadataService
  ) {
  }

  ngOnInit(): void {
    this.nPage = 1;
    this.getPage(); //important! id_tipoproducto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oProductoService.getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter, this.id_tipoproducto)
      .subscribe((oPage: IProductoPage) => {
        this.strFilteredMessage = this.oMetadataService.getFilterMsg(this.strFilter, 'tipoproducto', this.id_tipoproducto, null, null);
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

}