import { ProductoService } from './../../../service/producto.service';
import { IPageProduct, Iproduct } from 'src/app/model/producto-interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IPost, IPage } from 'src/app/model/model-interfaces';
import { PaginationService } from 'src/app/service/pagination.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-plist-producto',
  templateUrl: './plist-producto.component.html',
  styleUrls: ['./plist-producto.component.css']
})
export class PlistProductoComponent implements OnInit {

  aProducts: Iproduct[];
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
  filtertype:number=null;

  eventsSubjectView: Subject<number> = new Subject<number>();
  eventsSubjectModal: Subject<void> = new Subject<void>();

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oProductService: ProductoService,
  ) {

    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.page = 0;
    this.getPage();
  }

  ngOnInit(): void {
  }

  getPage = () => {
    this.oProductService.getPage(this.pageSize, this.page, this.filterActual, this.currentSortField, this.currentSortDirection,this.filtertype).subscribe((oPageProduct: IPageProduct) => {
      if (this.filterActual) {
        this.filtered = true;
      } else {
        this.filtered = false;
      }
      this.aProducts = oPageProduct.content;
      this.totalElements = oPageProduct.totalElements;
      this.totalPages = oPageProduct.totalPages;
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
