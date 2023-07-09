import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IFactura } from 'src/app/model/factura-interfaces';
import { Constants } from 'src/app/constant/constants';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: '[app-factura-plistrow-user-unrouted]',
  templateUrl: './factura-plistrow-user-unrouted.component.html',
  styleUrls: ['./factura-plistrow-user-unrouted.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FacturaPlistrowUserUnroutedComponent implements OnInit {

  @Input() oFactura: IFactura = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Input() id_tipousuario_session: number = null;
  @Output() selection = new EventEmitter<number>();  

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;
  oUsuarioSession: IUsuario;
  strAPI_URL: string = API_URL;

  constructor(
    public oMetadataService: MetadataService,
    private oFacturaService: FacturaService
  ) {
    this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() { }

  onSelection(id: number) {
    this.selection.emit(id);
  }

}
