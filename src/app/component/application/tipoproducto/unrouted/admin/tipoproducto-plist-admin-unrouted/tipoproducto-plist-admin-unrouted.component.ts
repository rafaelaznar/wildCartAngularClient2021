import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { ITipoproducto, ITipoproductoPage } from 'src/app/model/tipoproducto-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';

@Component({
  selector: 'app-tipoproducto-plist-admin-unrouted',
  templateUrl: './tipoproducto-plist-admin-unrouted.component.html',
  styleUrls: ['./tipoproducto-plist-admin-unrouted.component.css'],
})

export class TipoproductoPlistAdminUnroutedComponent implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.producttype;
  strOperation: string = Constants.OPERATIONS.plist;
  oPage: ITipoproductoPage;

  constructor(
    private oPostService: TipoproductoService,
    public oMetadataService: MetadataService,
  ) {
    this.oPage = {} as ITipoproductoPage;
  }

  ngOnInit() {
    this.getPage();
  }

  getPage = () => {
    this.oPostService
      .getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter)
      .subscribe((oPage: ITipoproductoPage) => {
        this.oPage = oPage;
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, null, null, null, null);
        if (this.oPage.totalPages > 0) {
          if (this.oPage.number > this.oPage.totalPages - 1) {
            this.oPage.number = this.oPage.totalPages - 1;
            this.getPage();
          }
        }
      });
  };

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
