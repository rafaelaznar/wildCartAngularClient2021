import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { debounceTime } from 'rxjs/operators';
import { PaginationService } from 'src/app/service/pagination.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { ITipoproducto, ITipoproductoPage } from 'src/app/model/tipoproducto-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-tipoproducto-plist-admin-unrouted',
  templateUrl: './tipoproducto-plist-admin-unrouted.component.html',
  styleUrls: ['./tipoproducto-plist-admin-unrouted.component.css'],
})

export class TipoproductoPlistAdminUnroutedComponent implements OnInit {

  strEntity: string = 'tipoproducto';
  strOperation: string = 'plist';
  strTitleSingular: string = 'Tipo Producto';
  strATitleSingular: string = "El tipo de producto";
  strTitlePlural: string = 'Tipos de producto';
  strATitlePlural: string = 'Los tipos de producto';
  //
  aTipoproductos: ITipoproducto[];
  //
  nTotalElements: number;
  nTotalPages: number;
  nPage: number;
  aPaginationBar: string[];
  nPageSize: number = 10;
  //
  strSortField: string = "";
  strSortDirection: string = "";
  //
  strFilter: string = "";
  strFilteredMessage: string = "";
  subjectFilter = new Subject();
  //  
  

  constructor(
    private oPaginationService: PaginationService,
    private oPostService: TipoproductoService,
    public oMetadataService: MetadataService,
  ) {
  }

  ngOnInit(): void {
    this.subjectFilter
      .pipe(debounceTime(1000))
      .subscribe(() => this.getPage());
    this.nPage = 1;
    this.getPage();
  }

  getPage = () => {
    this.oPostService
      .getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter)
      .subscribe((oPage: ITipoproductoPage) => {
        this.strFilteredMessage = this.oMetadataService.getFilterMsg(this.strFilter, null, null, null, null);
        this.aTipoproductos = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.nTotalPages = oPage.totalPages;
        this.aPaginationBar = this.oPaginationService.pagination(
          this.nTotalPages,
          this.nPage
        );
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

}
