import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Constants } from 'src/app/constant/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';
@Component({
  selector: 'app-carrito-view-admin-routed',
  templateUrl: './carrito-view-admin-routed.component.html',
  styleUrls: ['./carrito-view-admin-routed.component.css']
})

export class CarritoViewAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.view;
  id: number = null;
  oUserSession: IUsuario;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit() { }

}