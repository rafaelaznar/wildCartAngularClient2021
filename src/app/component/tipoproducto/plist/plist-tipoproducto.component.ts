import { ITipoProducto, IPageTP } from './../../../model/tipoproducto-interfaces';
import { TipoproductoService } from './../../../service/tipoproducto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PaginationService } from 'src/app/service/pagination.service';

@Component({
  selector: 'app-plist-tipoproducto',
  templateUrl: './plist-tipoproducto.component.html',
  styleUrls: ['./plist-tipoproducto.component.css']
})
export class PlistTipoproductoComponent implements OnInit {

  aTipoProductos: ITipoProducto[];
  totalElements: number;
  totalPages: number;
  page: number;
  barraPaginacion: string[];
  pageSize: number = 10;
  id2ShowViewModal: number = 0;
  strUsuarioSession: string;
  strResult: string = null;
  filterActual: string = "";
  currentSortField: string = "";
  currentSortDirection: string = "";
  filtered: boolean = false;

  eventsSubjectView: Subject<number> = new Subject<number>();
  eventsSubjectModal: Subject<void> = new Subject<void>();

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oTipoProductoService: TipoproductoService,
  ) {

    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
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
    this.oTipoProductoService.getPage(this.pageSize, this.page, this.filterActual, this.currentSortField, this.currentSortDirection).subscribe((oPage: IPageTP) => {
      if (this.filterActual) {
        this.filtered = true;
      } else {
        this.filtered = false;
      }
      this.aTipoProductos = oPage.content;
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

  doResetFilter() {
    this.filterActual = "";
    this.getPage();
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

  showViewModal(id2ShowViewModal1: number) {
    this.eventsSubjectModal.next();
    this.eventsSubjectView.next(id2ShowViewModal1);
  }

  closeModal(): void { }

}
