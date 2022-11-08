import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/model/constants';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-usuario-view-admin-routed',
  templateUrl: './usuario-view-admin-routed.component.html',
  styleUrls: ['./usuario-view-admin-routed.component.css'],
})

export class UsuarioViewAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.view
  id: number;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    super(Constants.PROFILES.admin, oRouter, oActivatedRoute);
    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }

}