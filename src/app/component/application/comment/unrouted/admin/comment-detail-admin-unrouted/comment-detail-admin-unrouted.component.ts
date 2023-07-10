import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { IComment } from 'src/app/model/comment-interfaces';
import { CommentService } from 'src/app/service/comment.service';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-comment-detail-admin-unrouted',
  templateUrl: './comment-detail-admin-unrouted.component.html',
  styleUrls: ['./comment-detail-admin-unrouted.component.css']
})

export class CommentDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.comment;
  strOperation: string = Constants.OPERATIONS.view;
  //
  oComment: IComment;

  constructor(
    private oCommentService: CommentService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oCommentService.getOne(this.id).subscribe({
      next: (oData: IComment) => {
        this.oComment = oData;
      }
    });
  };

}
