import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/model/constants';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-factura-plist-admin-routed.',
  templateUrl: './factura-plist-admin-routed.component.html',
  styleUrls: ['./factura-plist-admin-routed.component.css'],
})

export class FacturaPlistAdminRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.invoice;
  strOperation: string = Constants.OPERATIONS.plist;
  id_usuario: number = null;

  constructor(
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute
  ) {
    super(oRouter, oActivatedRoute);   
    this.id_usuario = this.oActivatedRoute.snapshot.params.id_usuario;
  }

  ngOnInit(): void { }

}
