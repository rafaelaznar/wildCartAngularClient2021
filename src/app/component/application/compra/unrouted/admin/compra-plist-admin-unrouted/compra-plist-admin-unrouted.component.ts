import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { CompraService } from 'src/app/service/compra.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { ICompra, ICompraPage } from 'src/app/model/compra-interfaces';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-compra-plist-admin-unrouted',
  templateUrl: './compra-plist-admin-unrouted.component.html',
  styleUrls: ['./compra-plist-admin-unrouted.component.css']
})

export class CompraPlistAdminUnroutedComponent implements OnInit {

  @Input() id_factura: number = null;
  @Input() id_producto: number = null;
  @Input() mode: boolean = true; //true=edición; false=selección

  strEntity: string = Constants.ENTITIES.purchase
  strOperation: string = Constants.OPERATIONS.plist
  aCompras: ICompra[];
  nTotalElements: number;
  nTotalPages: number;
  nPage: number;  
  nPageSize: number = 10;
  strSortField: string = "";
  strSortDirection: string = "";
  strFilter: string = "";
  strFilteredMessage: string = "";

  constructor(
    private oCompraService: CompraService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit(): void {
    this.nPage = 1;
    this.getPage(); //important! id_tipoproducto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oCompraService.getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter, this.id_factura, this.id_producto).subscribe((oPage: ICompraPage) => {
      this.strFilteredMessage = this.oMetadataService.getFilterMsg(this.strFilter, 'factura', this.id_factura, 'producto', this.id_producto);
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

}
