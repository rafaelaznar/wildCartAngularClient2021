import { Component, Input, OnInit } from '@angular/core';
import { IFactura, IFacturaPage } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { CompraService } from 'src/app/service/compra.service';
import { ICompra, ICompraPage } from 'src/app/model/compra-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/model/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { FacturaPrintService } from 'src/app/service/factura.print.service';

declare let jsPDF: any;

@Component({
  selector: 'app-factura-plist-admin-unrouted',
  templateUrl: './factura-plist-admin-unrouted.component.html',
  styleUrls: ['./factura-plist-admin-unrouted.component.css']
})

export class FacturaPlistAdminUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.invoice
  strOperation: string = Constants.OPERATIONS.plist
  oPage: IFacturaPage;

  constructor(
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService,
    private oCompraService: CompraService,
    private oFacturaPrintService: FacturaPrintService
  ) {
    this.oPage = {} as IFacturaPage;
  }

  ngOnInit(): void {
    this.getPage(); //important! don't call in constructor; id_usuario must be initialized before calling getPage()
  }

  getPage = () => {
    this.oFacturaService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_usuario)
      .subscribe((oPage: IFacturaPage) => {
        this.oPage = oPage;
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, 'usuario', this.id_usuario, null, null);
        if (this.oPage.number > this.oPage.totalPages - 1) {
          this.oPage.number = this.oPage.totalPages - 1;
          this.getPage();
        }
      }, (error: HttpErrorResponse) => {
        this.oPage.error = error;
        console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
      }
      )
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

  onPrintFactura = (id_factura: number) => {
    this.oFacturaPrintService.printFactura(id_factura);
  }

  

}
