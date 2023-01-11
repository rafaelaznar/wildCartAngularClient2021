import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/model/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { CommentService } from 'src/app/service/comment.service';
import { ICommentPage } from 'src/app/model/comment-interfaces';

@Component({
  selector: 'app-comment-plist-admin-unrouted',
  templateUrl: './comment-plist-admin-unrouted.component.html',
  styleUrls: ['./comment-plist-admin-unrouted.component.css']
})

export class CommentPlistAdminUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  @Input() id_producto: number = null;

  strProfile: string = Constants.PROFILES.admin;
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
    this.getPage(); //important! don't call in constructor; id_tipoproducto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oCommentService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_usuario, this.id_producto)
      .subscribe((oPage: ICommentPage) => {
        this.oPage = oPage;
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, 'usuario', this.id_usuario, 'producto', this.id_producto);
        if (this.oPage.number > this.oPage.totalPages - 1) {
          this.oPage.number = this.oPage.totalPages - 1;
          this.getPage();
        }
      }, (error: HttpErrorResponse) => {
        this.oPage.error = error;
        console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
      }
      )
  }

  onSetPage = (nPage: number) => {
    this.oPage.number = nPage - 1; //pagination component starts at 1, but spring data starts at 0
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    this.oPage.size = nRpp;
    this.getPage();
  }

  onSetFilter(strFilter: string) {
    this.oPage.strFilter = strFilter;
    this.getPage();
  }

  onSetOrder(order: IOrder) {
    this.oPage.strSortField = order.sortField;
    this.oPage.strSortDirection = order.sortDirection;
    this.getPage();
  }

}