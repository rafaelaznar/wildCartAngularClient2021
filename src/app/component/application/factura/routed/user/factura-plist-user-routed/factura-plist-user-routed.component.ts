import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/model/constants';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-factura-plist-user-routed',
  templateUrl: './factura-plist-user-routed.component.html',
  styleUrls: ['./factura-plist-user-routed.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FacturaPlistUserRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;
  oUserSession: IUsuario;
  id_producto: number = null;
  id_usuario: number = null;
  tipousuarioSession_id: number = null;

  constructor(
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.user, oRouter, oSessionService);
    this.id_usuario = this.oActivatedRoute.snapshot.params.id_usuario;
  }

  ngOnInit(): void { }

  onPrintFactura(id: number) {
    console.log("printFactura");
  }

}
