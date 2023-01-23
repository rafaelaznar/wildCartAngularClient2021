import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-comment-plist-admin-routed',
  templateUrl: './comment-plist-admin-routed.component.html',
  styleUrls: ['./comment-plist-admin-routed.component.css']
})

export class CommentPlistAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.comment;
  strOperation: string = Constants.OPERATIONS.plist
  id_usuario: number = null;
  id_producto: number = null;

  constructor(
    protected oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oActivatedRoute, oSessionService);
    this.id_producto = this.oActivatedRoute.snapshot.params.id_producto;
    this.id_usuario = this.oActivatedRoute.snapshot.params.id_usuario;
    this.strProfile = this.oActivatedRoute.snapshot.url[0].path;
    this.strEntity = this.oActivatedRoute.snapshot.url[1].path;
    this.strOperation = this.oActivatedRoute.snapshot.url[2].path;
  }

  ngOnInit(): void { }

}



