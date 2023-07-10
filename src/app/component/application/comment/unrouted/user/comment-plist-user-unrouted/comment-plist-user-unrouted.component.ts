import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { CommentService } from 'src/app/service/comment.service';
import { ICommentPage } from 'src/app/model/comment-interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comment-plist-user-unrouted',
  templateUrl: './comment-plist-user-unrouted.component.html',
  styleUrls: ['./comment-plist-user-unrouted.component.css']
})

export class CommentPlistUserUnroutedComponent implements OnInit, OnChanges {

  @Input() id_usuario: number = null;
  @Input() id_producto: number = null;

  @Input() reloadCommentsPlistSubject: Subject<boolean> = new Subject<boolean>();

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.comment
  strOperation: string = Constants.OPERATIONS.plist
  oPage: ICommentPage;

  constructor(
    private oCommentService: CommentService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as ICommentPage;
  }

  ngOnInit(): void {
    console.log("id_p: " + this.id_producto);
    this.reloadCommentsPlistSubject.subscribe({
      next: (response) => {
        if (response) {
          this.getPage();
        }
      }
    })
    this.getPage();
  }

  getPage = () => {
    console.log("id_p: " + this.id_producto);
    this.oCommentService.getPage(this.oPage.number, 5, "creation", "desc", null, this.id_usuario, this.id_producto)
      .subscribe({
        next: (oPage: ICommentPage) => {
          this.oPage = oPage;
          this.oPage.error = null;
          this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, 'usuario', this.id_usuario, 'producto', this.id_producto);
          if (this.oPage.number > this.oPage.totalPages - 1) {
            this.oPage.number = this.oPage.totalPages - 1;
            this.getPage();
          }
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
        }
      })
  }

  ngOnChanges() {
    /**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    console.log("PARENT COMPONENT UPDATES");
    this.getPage();
  }

  onSetPage = (nPage: number) => {
    this.oPage.number = nPage - 1; //pagination component starts at 1, but spring data starts at 0
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    //this.oPage.size = nRpp;
    //this.getPage();
  }

  onSetFilter(strFilter: string) {
    //this.oPage.strFilter = strFilter;
    //this.getPage();
  }

  onSetOrder(order: IOrder) {
    //this.oPage.strSortField = order.sortField;
    //this.oPage.strSortDirection = order.sortDirection;
    //this.getPage();
  }

}