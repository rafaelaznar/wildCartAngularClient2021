import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { IComment } from 'src/app/model/comment-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: '[app-comment-plistrow-admin-unrouted]',
  templateUrl: './comment-plistrow-admin-unrouted.component.html',
  styleUrls: ['./comment-plistrow-admin-unrouted.component.css']
})
export class CommentPlistRowAdminUnroutedComponent implements OnInit {

  @Input() oComment: IComment = null;
  @Input() mode: boolean = true; //true=edición; false=selección

  strAPI_URL: string = API_URL;
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.comment;
  strOperation: string = Constants.OPERATIONS.plist;

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

}
