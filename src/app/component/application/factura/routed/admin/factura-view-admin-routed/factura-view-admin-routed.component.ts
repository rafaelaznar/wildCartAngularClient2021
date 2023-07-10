import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/constant/constants';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-factura-view-admin-routed',
  templateUrl: './factura-view-admin-routed.component.html',
  styleUrls: ['./factura-view-admin-routed.component.css']
})

export class FacturaViewAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.invoice
  strOperation: string = Constants.OPERATIONS.view
  //
  id: number = null;

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