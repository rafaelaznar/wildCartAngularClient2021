import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/constant/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-tipoproducto-view-admin-routed',
  templateUrl: './tipoproducto-view-admin-routed.component.html',
  styleUrls: ['./tipoproducto-view-admin-routed.component.css'],
})

export class TipoproductoViewAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.producttype
  strOperation: string = Constants.OPERATIONS.view
  //
  id: number = 0;  

  constructor(    
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }
  
}
