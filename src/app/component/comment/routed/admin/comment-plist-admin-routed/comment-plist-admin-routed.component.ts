import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';

@Component({
  selector: 'app-comment-plist-admin-routed',
  templateUrl: './comment-plist-admin-routed.component.html',
  styleUrls: ['./comment-plist-admin-routed.component.css']
})

export class CommentPlistAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.comment;
  strOperation: string = Constants.OPERATIONS.plist
  id_tipoproducto: number = null;

  constructor(
    protected oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService
  ) {
    super(Constants.PROFILES.admin, oRouter, oActivatedRoute);
    this.id_tipoproducto = this.oActivatedRoute.snapshot.params.id_tipoproducto;
    this.strOperation = this.oActivatedRoute.snapshot.url[1].path;
  }

  ngOnInit(): void { }

}



