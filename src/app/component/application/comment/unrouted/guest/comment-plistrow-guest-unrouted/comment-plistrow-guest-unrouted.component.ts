import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { IComment } from 'src/app/model/comment-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: '[app-comment-plistrow-guest-unrouted]',
  templateUrl: './comment-plistrow-guest-unrouted.component.html',
  styleUrls: ['./comment-plistrow-guest-unrouted.component.css']
})
export class CommentPlistRowGuestUnroutedComponent implements OnInit {

  @Input() oComment: IComment = null;
  @Input() mode: boolean = true; //true=edición; false=selección

  strAPI_URL: string = API_URL;
  strProfile: string = Constants.PROFILES.guest;
  strEntity: string = Constants.ENTITIES.comment;
  strOperation: string = Constants.OPERATIONS.plist;

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

}
