import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFactura } from 'src/app/model/factura-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { API_URL } from '../../../../../../environments/environment';

@Component({
  selector: '[app-factura-plistrow-unrouted]',
  templateUrl: './factura-plistrow-unrouted.component.html',
  styleUrls: ['./factura-plistrow-unrouted.component.css']
})
export class FacturaPlistRowUnroutedComponent implements OnInit {
  @Input() oFactura: IFactura = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();

  strAPI_URL: string = API_URL;
  strEntity: string = "factura";
  strOperation: string = "plist";
  
  constructor(
    public oIconService: IconService
  ) { }

  ngOnInit() {
  }
  onSelection(id: number) {
    this.selection.emit(id);
  }
}
