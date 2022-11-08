import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/model/constants';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-carrito-plist-admin-routed',
  templateUrl: './carrito-plist-admin-routed.component.html',
  styleUrls: ['./carrito-plist-admin-routed.component.css'],
})

export class CarritoPlistAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;
  strUsuarioSession: string;
  id_producto: number = null;
  id_usuario: number = null;  

  constructor(
    protected oRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute
  ) {    
    super(Constants.PROFILES.admin, oRouter, oActivatedRoute);   
    this.id_producto = this.oActivatedRoute.snapshot.params.id_producto;
    this.id_usuario = this.oActivatedRoute.snapshot.params.id_usuario;
  }

  ngOnInit(): void {}
}
