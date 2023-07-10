import { MetadataService } from 'src/app/service/metadata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/constant/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-tipousuario-view-admin-routed',
  templateUrl: './tipousuario-view-admin-routed.component.html',
  styleUrls: ['./tipousuario-view-admin-routed.component.css'],
})

export class TipousuarioViewAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.usertype;
  strOperation: string = Constants.OPERATIONS.view;
  //
  id: number;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    oRouter: Router,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }

}
