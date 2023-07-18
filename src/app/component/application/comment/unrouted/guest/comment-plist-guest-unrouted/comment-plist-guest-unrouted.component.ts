import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { CommentService } from 'src/app/service/comment.service';
import { ICommentPage } from 'src/app/model/comment-interfaces';

@Component({
  selector: 'app-comment-plist-guest-unrouted',
  templateUrl: './comment-plist-guest-unrouted.component.html',
  styleUrls: ['./comment-plist-guest-unrouted.component.css']
})

export class CommentPlistGuestUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  @Input() id_producto: number = null;
  //
  strProfile: string = Constants.PROFILES.guest;
  strEntity: string = Constants.ENTITIES.comment
  strOperation: string = Constants.OPERATIONS.plist
  //
  oPage: ICommentPage;

  constructor(
    private oCommentService: CommentService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as ICommentPage;
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage = () => {
    this.oCommentService.getPage(this.oPage.number, 5, 'creation', 'desc', null, this.id_usuario, this.id_producto)
      .subscribe({
        next: (oPage: ICommentPage) => {
          Object.assign(this.oPage, oPage);
          this.oPage.error = null;
          this.oPage.strFilteredMessage = this.oPage.strFilter
          if (this.oPage.number > this.oPage.totalPages - 1) {
            this.oPage.number = this.oPage.totalPages - 1;
            this.getPage();
          }
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error('ERROR: ' + this.strEntity + '-' + this.strOperation + ': ' + error.status + '(' + error.statusText + ') ' + error.message);
        }
      })
  }

  onSetPage = (nPage: number) => {
    this.oPage.number = nPage - 1; //pagination component starts at 1, but spring data starts at 0
    this.getPage();
    return false;
  }

}