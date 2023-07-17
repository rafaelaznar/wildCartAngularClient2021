import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { FacturaService } from 'src/app/service/factura.service';
import { IFacturaPage } from 'src/app/model/factura-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';
import { FacturaPrintService } from 'src/app/service/factura.print.service';
import { Subject } from 'rxjs/internal/Subject';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-factura-plist-user-unrouted',
  templateUrl: './factura-plist-user-unrouted.component.html',
  styleUrls: ['./factura-plist-user-unrouted.component.css'],
})

export class FacturaPlistUserUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  //
  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.invoice;
  strOperation: string = Constants.OPERATIONS.plist;
  //
  oPage: IFacturaPage;

  constructor(
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService,
    private oFacturaPrintService: FacturaPrintService
  ) {
    this.oPage = {} as IFacturaPage;
  }

  ngOnInit() {
    this.getPage();
  }

  getPage = () => {
    this.oFacturaService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_usuario).subscribe({
      next: (oPage: IFacturaPage) => {
        Object.assign(this.oPage, oPage);
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oPage.strFilter
        if (this.oPage.number > this.oPage.totalPages - 1 && this.oPage.totalPages > 0) {
          this.oPage.number = this.oPage.totalPages - 1;
          this.getPage();
        } else if (this.oPage.number < 0) {
          this.oPage.number = 0;
          this.getPage();
        }
      },
      error: (error: HttpErrorResponse) => {
        this.oPage.error = error;
        console.error('ERROR: ' + this.strEntity + '-' + this.strOperation + ': ' + error.status + '(' + error.statusText + ') ' + error.message);
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

  onPrintFactura(id_factura: number) {
    this.oFacturaPrintService.printFactura(id_factura);
  }

  onViewFactura(id_factura: number) {
    this.id_factura = id_factura;
    this.eventsSubjectShowModal.next();
  }

  id_factura: number;

  eventsSubjectShowModal: Subject<void> = new Subject<void>();
  eventsSubjectHideModal: Subject<void> = new Subject<void>();

  onCloseModal(): void {
    //no hacer nada    
  }
}
