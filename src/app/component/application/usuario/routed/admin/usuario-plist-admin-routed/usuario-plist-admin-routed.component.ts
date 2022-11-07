import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/model/constants';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-usuario-plist-admin-routed',
  templateUrl: './usuario-plist-admin-routed.component.html',
  styleUrls: ['./usuario-plist-admin-routed.component.css']
})

export class UsuarioPlistAdminRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.plist
  id_tipousuario: number = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    super(oRouter, oActivatedRoute);
    this.id_tipousuario = this.oActivatedRoute.snapshot.params.id_tipousuario;
  }

  ngOnInit(): void { }

}