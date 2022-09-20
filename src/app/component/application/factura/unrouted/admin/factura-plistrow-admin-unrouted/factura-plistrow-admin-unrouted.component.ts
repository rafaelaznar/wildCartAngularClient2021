import { Component, Input, OnInit } from '@angular/core';
import { IFactura } from 'src/app/model/factura-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: '[app-factura-plistrow-unrouted]',
  templateUrl: './factura-plistrow-admin-unrouted.component.html',
  styleUrls: ['./factura-plistrow-admin-unrouted.component.css']
})

export class FacturaPlistrowAdminUnroutedComponent implements OnInit {
  @Input() oFactura: IFactura = null;
  @Input() mode: boolean = true; //true=edición; false=selección

  strAPI_URL: string = API_URL;
  strEntity: string = "factura";
  strOperation: string = "plist";

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

}
