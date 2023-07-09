import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/constant/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-comment-view-admin-routed',
  templateUrl: './comment-view-admin-routed.component.html',
  styleUrls: ['./comment-view-admin-routed.component.css']
})

export class CommentViewAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.comment;
  strOperation: string = Constants.OPERATIONS.view
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