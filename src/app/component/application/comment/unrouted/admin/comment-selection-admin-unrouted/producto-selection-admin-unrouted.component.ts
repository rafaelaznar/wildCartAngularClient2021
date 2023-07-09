import { IProductoPage } from 'src/app/model/producto-interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { Constants } from 'src/app/constants/constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-producto-selection-admin-unrouted',
  templateUrl: './producto-selection-admin-unrouted.component.html',
  styleUrls: ['./producto-selection-admin-unrouted.component.css']
})

export class ProductoSelectionAdminUnroutedComponent implements OnInit {

  @Input() id_tipoproducto: number = null;
  @Output() selection = new EventEmitter<number>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.plist
  oPage: IProductoPage;

  constructor(
    private oProductoService: ProductoService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as IProductoPage;
  }

  ngOnInit() {
    this.getPage();
  }

  getPage = () => {
    this.oProductoService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_tipoproducto)
      .subscribe((oPage: IProductoPage) => {
        this.oPage = oPage;
        this.oPage.error = null;
        this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, 'tipoproducto', this.id_tipoproducto, null, null);
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

  onSelection(id: number) {
    this.selection.emit(id);
  }

}