import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/model/constants';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-tipousuario-plist-admin-routed',
  templateUrl: './tipousuario-plist-admin-routed.component.html',
  styleUrls: ['./tipousuario-plist-admin-routed.component.css'],
})

export class TipousuarioPlistAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.usertype;
  strOperation: string = Constants.OPERATIONS.plist;
  oUserSession: IUsuario;
  subjectFiltro$ = new Subject();

  constructor(
    oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    super(Constants.PROFILES.admin, oRouter, oActivatedRoute);
  }

  ngOnInit(): void { }

}
