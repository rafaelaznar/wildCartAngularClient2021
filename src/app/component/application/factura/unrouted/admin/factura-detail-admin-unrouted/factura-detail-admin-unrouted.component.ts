import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { IFactura } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-factura-detail-admin-unrouted',
  templateUrl: './factura-detail-admin-unrouted.component.html',
  styleUrls: ['./factura-detail-admin-unrouted.component.css']
})

export class FacturaDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.invoice;
  strOperation: string = Constants.OPERATIONS.view
  //
  oFactura: IFactura;
  status: HttpErrorResponse = null;

  constructor(
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oFacturaService.getOne(this.id).subscribe({
      next: (oData: IFactura) => {
        this.oFactura = oData;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    });
  };

}
