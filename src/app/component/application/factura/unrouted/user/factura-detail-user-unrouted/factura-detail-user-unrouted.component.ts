import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { IFactura } from 'src/app/model/factura-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { FacturaService } from 'src/app/service/factura.service';

@Component({
  selector: 'app-factura-detail-user-unrouted',
  templateUrl: './factura-detail-user-unrouted.component.html',
  styleUrls: ['./factura-detail-user-unrouted.component.css']
})

export class FacturaDetailUserUnroutedComponent implements OnInit {

  @Input() id: number = null;

  public set value(val: string) {
    console.log('FacturaDetailUserUnroutedComponent set value', val);
    this.getOne();

  }

  oFactura: IFactura;
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.view

  constructor(
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) { //sensible a cambios en el id
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
