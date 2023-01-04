import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { FacturaService } from 'src/app/service/factura.service';
import { IFactura, IFacturaPage } from 'src/app/model/factura-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/model/constants';
import { FacturaPrintService } from 'src/app/service/factura.print.service';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-factura-plist-user-unrouted',
  templateUrl: './factura-plist-user-unrouted.component.html',
  styleUrls: ['./factura-plist-user-unrouted.component.css'],
})

export class FacturaPlistUserUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  @Input() id_tipousuario_session: number = null;

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.invoice;
  strOperation: string = Constants.OPERATIONS.plist;
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
    this.oFacturaService
      .getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_usuario)
      .subscribe((oPage: IFacturaPage) => {
        this.oPage = oPage;
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oMetadataService.getFilteredMessage1(this.oPage.strFilter, 'usuario', this.id_usuario);
        if (this.oPage.number > this.oPage.totalPages - 1 && this.oPage.totalPages > 0) {
          this.oPage.number = this.oPage.totalPages - 1;
          this.getPage();
        } else if (this.oPage.number < 0) {
          this.oPage.number = 0;
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

  onPrintFactura(id_factura: number) {
    this.oFacturaPrintService.printFactura(id_factura);
  }

  onViewFactura(id_factura: number) {
    this.id_factura = id_factura;
    console.log('onViewFactura', id_factura);
    this.eventsSubjectShowModal.next();
  }

  id_factura: number;

  eventsSubjectShowModal: Subject<void> = new Subject<void>();
  eventsSubjectHideModal: Subject<void> = new Subject<void>();

  onCloseModal(): void {
    //no hacer nada    
  }
}
