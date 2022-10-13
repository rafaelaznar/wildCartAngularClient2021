import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IFactura, IFacturaPage } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { IOrder } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-factura-selection-admin-unrouted',
  templateUrl: './factura-selection-admin-unrouted.component.html',
  styleUrls: ['./factura-selection-admin-unrouted.component.css']
})

export class FacturaSelectionAdminUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  @Output() selection = new EventEmitter<number>();

  strEntity: string = "factura"
  strOperation: string = "plist"
  strTitleSingular: string = "Factura";
  strATitleSingular: string = "La factura";
  strTitlePlural: string = "Facturas";
  //
  aFacturas: IFactura[];
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
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService
  ) {
  }

  ngOnInit(): void {
    this.nPage = 1;
    this.getPage(); //important! id_tipoproducto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oFacturaService.getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter, this.id_usuario)
      .subscribe((oPage: IFacturaPage) => {
        this.strFilteredMessage = this.oMetadataService.getFilterMsg(this.strFilter, 'usuario', this.id_usuario, null, null);
        this.aFacturas = oPage.content;
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
