import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';
@Component({
  selector: 'app-carrito-view-admin-routed',
  templateUrl: './carrito-view-admin-routed.component.html',
  styleUrls: ['./carrito-view-admin-routed.component.css']
})

export class CarritoViewAdminRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.view;
  id: number = null;
  oUserSession: IUsuario;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    super(oRouter, oActivatedRoute);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit() { }

}