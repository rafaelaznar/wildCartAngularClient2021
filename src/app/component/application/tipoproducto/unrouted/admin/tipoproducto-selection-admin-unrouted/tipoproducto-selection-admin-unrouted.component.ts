import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { ITipoproducto, ITipoproductoPage } from 'src/app/model/tipoproducto-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';

@Component({
  selector: 'app-tipoproducto-selection-admin-unrouted',
  templateUrl: './tipoproducto-selection-admin-unrouted.component.html',
  styleUrls: ['./tipoproducto-selection-admin-unrouted.component.css'],
})

export class TipoproductoSelectionAdminUnroutedComponent implements OnInit {

  @Output() selection = new EventEmitter<number>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.producttype;
  strOperation: string = Constants.OPERATIONS.plist;
  aTipoproductos: ITipoproducto[];
  nTotalElements: number;
  nTotalPages: number;
  oPage: ITipoproductoPage;
  nPage: number;
  nPageSize: number = 10;
  strSortField: string = "";
  strSortDirection: string = "";
  strFilter: string = "";
  strFilteredMessage: string = "";

  constructor(
    private oPostService: TipoproductoService,
    public oMetadataService: MetadataService,
  ) { }

  ngOnInit(): void {
    this.nPage = 1;
    this.getPage();
  }

  getPage = () => {
    this.oPostService
      .getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter)
      .subscribe((oPage: ITipoproductoPage) => {
        this.oPage = oPage;
        this.strFilteredMessage = this.oMetadataService.getFilterMsg(this.strFilter, null, null, null, null);
        this.aTipoproductos = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.nTotalPages = oPage.totalPages;
        if (this.nPage > this.nTotalPages) {
          this.nPage = this.nTotalPages;
          this.getPage();
        }
      });
  };

  onSetPage = (nPage: number) => {
    this.nPage = nPage;
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    this.nPageSize = nRpp;
    this.getPage();
  }

  onSetFilter(strFilter: string) {
    this.strFilter = strFilter;
    this.getPage();
  }

  onSetOrder(order: IOrder) {
    this.strSortField = order.sortField;
    this.strSortDirection = order.sortDirection;
    this.getPage();
  }

  onSelection(id: number) {
    this.selection.emit(id);
  }
}
