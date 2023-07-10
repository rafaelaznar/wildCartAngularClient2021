import { Component, Input, OnInit } from '@angular/core';
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

  oFactura: IFactura;
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
      }
    });
  };

}
