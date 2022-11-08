import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Location } from '@angular/common';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';

@Component({
  selector: 'app-usuario-view-user-routed',
  templateUrl: './usuario-view-user-routed.component.html',
  styleUrls: ['./usuario-view-user-routed.component.css'],
})

export class UsuarioViewUserRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.view
  id: number;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    protected oLocation: Location
  ) {
    super(Constants.PROFILES.user, oRouter, oActivatedRoute);
    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }

}