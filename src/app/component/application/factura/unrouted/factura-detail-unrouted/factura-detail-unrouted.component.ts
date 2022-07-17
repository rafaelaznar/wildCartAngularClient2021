import { Component, Input, OnInit } from '@angular/core';
import { IFactura } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-factura-detail-unrouted',
  templateUrl: './factura-detail-unrouted.component.html',
  styleUrls: ['./factura-detail-unrouted.component.css']
})
export class FacturaDetailUnroutedComponent implements OnInit {

  @Input() id: number = null;  

  oFactura: IFactura;
  constructor(
    private oFacturaService: FacturaService,
    public oIconService: IconService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oFacturaService
      .getOne(this.id)
      .subscribe((oData: IFactura) => {
        this.oFactura = oData;
      });
  };
}
