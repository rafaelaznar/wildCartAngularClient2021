import { IPageFactura } from './../../../model/factura-interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactura } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { PaginationService } from 'src/app/service/pagination.service';

@Component({
  selector: 'app-plist-factura',
  templateUrl: './plist-factura.component.html',
  styleUrls: ['./plist-factura.component.css']
})
export class PlistFacturaComponent implements OnInit {

 
  aFacturas: IFactura[];
  totalElements: number;
  totalPages: number;
  page: number;
  barraPaginacion: string[];
  pageSize: number = 10;
  id2ShowViewModal: number = 0;
  strUsuarioSession: string;
  strResult: string = null;
  currentSortField: string = "";
  currentSortDirection: string = "";
  filterActual: string = "";
  filtered: boolean = false;


  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oFacturaService: FacturaService,
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", this.oRoute.snapshot.data.message);
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.page = 1;
    this.getPage();
  }

  ngOnInit(): void {
  }


  getPage = () => {
    this.oFacturaService.getPage(this.pageSize, this.page, this.filterActual, this.currentSortField, this.currentSortDirection).subscribe((oPage: IPageFactura) => {
      if (this.filterActual) {
        this.filtered = true;
      } else {
        this.filtered = false;
      }
      this.aFacturas = oPage.content;
      this.totalElements = oPage.totalElements;
      this.totalPages = oPage.totalPages;
      this.barraPaginacion = this.oPaginationService.pagination(this.totalPages, this.page);
    })
  }

  jumpToPage = () => {
    this.getPage();
    return false;
  }

  doFilter() {
    this.getPage();
  }

  onKeydownEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      //alert("do filter");
      this.getPage();
    }
  }


  doResetOrder() {
    this.currentSortField = "";
    this.currentSortDirection = "";
    this.getPage();
  }

  doSetOrder(order: string) {
    this.currentSortField = order;
    if (this.currentSortDirection == 'asc') {
      this.currentSortDirection = 'desc';
    } else if (this.currentSortDirection == 'desc') {
      this.currentSortDirection = '';
    } else {
      this.currentSortDirection = 'asc';
    }
    this.getPage();
  }
 }