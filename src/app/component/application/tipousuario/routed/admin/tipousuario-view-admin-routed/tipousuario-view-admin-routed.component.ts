import { MetadataService } from 'src/app/service/metadata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';

@Component({
  selector: 'app-tipousuario-view-admin-routed',
  templateUrl: './tipousuario-view-admin-routed.component.html',
  styleUrls: ['./tipousuario-view-admin-routed.component.css'],
})

export class TipousuarioViewAdminRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.usertype;
  strOperation: string = Constants.OPERATIONS.view;
  id: number;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    super(oRouter, oActivatedRoute);
    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }

}
