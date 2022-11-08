import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/model/constants';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-compra-plist-admin-routed',
  templateUrl: './compra-plist-admin-routed.component.html',
  styleUrls: ['./compra-plist-admin-routed.component.css'],
})

export class CompraPlistAdminRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.purchase;
  strOperation: string = Constants.OPERATIONS.plist;
  id_producto: number = null;
  id_factura: number = null;

  constructor(    
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute
  ) {
    super(Constants.PROFILES.admin, oRouter, oActivatedRoute);   
    this.id_producto = this.oActivatedRoute.snapshot.params.id_producto;
    this.id_factura = this.oActivatedRoute.snapshot.params.id_factura;
  }

  ngOnInit(): void { }
  
}
