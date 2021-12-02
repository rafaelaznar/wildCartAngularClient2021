import { PaginationService } from './../../../service/pagination.service';
import { PostService } from './../../../service/post.service';
import { Component, OnInit } from '@angular/core';
import { IPage, IPost } from 'src/app/model/model-interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IPageUsuario, IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-plist-usuario',
  templateUrl: './plist-usuario.component.html',
  styleUrls: ['./plist-usuario.component.css']
})
export class PlistUsuarioComponent implements OnInit {
  strEntity: string = "usuario"
  strOperation: string = "plist"
  strTitleSingular: string = "Usuario";
  strTitlePlural: string = "Usuarios";
  aPosts: IUsuario[];
  nTotalElements: number;
  totalPages: number;
  page: number;
  barraPaginacion: string[];
  pageSize: number = 10;
  id2ShowViewModal: number = 0;
  strUsuarioSession: string;
  strResult: string = null;
  strFilter: string = "";
  currentSortField: string = "";
  currentSortDirection: string = "";
  filtered: boolean = false;
  strFilteredMessage: string = "";
  subjectFiltro$ = new Subject();
  id_tipousuario:number = null;

  eventsSubjectView: Subject<number> = new Subject<number>();
  eventsSubjectModal: Subject<void> = new Subject<void>();

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oPostService: UsuarioService,
    public oIconService: IconService,
    private oActivatedRoute: ActivatedRoute,
  ) {

    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    this.id_tipousuario = this.oActivatedRoute.snapshot.params.id_tipousuario;
    if (this.id_tipousuario) {
      this.strFilteredMessage = "Listado filtrado por el tipo de usuario " + this.id_tipousuario;
    } else {
      this.strFilteredMessage = "";
    }
    this.page = 1;
    this.getPage();
  }

  ngOnInit(): void {
    this.subjectFiltro$.pipe(
      debounceTime(1000)
    ).subscribe(() => this.getPage());
  }

  getPage = () => {
    if (this.id_tipousuario) {
      this.oPostService.getPageFiltered(this.pageSize, this.page, this.currentSortField, this.currentSortDirection, this.strFilter, this.id_tipousuario).subscribe((oPage: IPageUsuario) => {
        if (this.strFilter) {
          this.filtered = true;
        } else {
          this.filtered = false;
        }
        this.aPosts = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.totalPages = oPage.totalPages;
        this.barraPaginacion = this.oPaginationService.pagination(this.totalPages, this.page);
        console.log(oPage);
      })
    } else {
      this.oPostService.getPage(this.pageSize, this.page, this.currentSortField, this.currentSortDirection, this.strFilter).subscribe((oPage: IPageUsuario) => {
        if (this.strFilter) {
          this.filtered = true;
        } else {
          this.filtered = false;
        }
        this.aPosts = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.totalPages = oPage.totalPages;
        this.barraPaginacion = this.oPaginationService.pagination(this.totalPages, this.page);
        console.log(oPage);
      })
    }
  }

  jumpToPage = () => {
    this.getPage();
    return false;
  }

  onKeyUpFilter(event: KeyboardEvent): void {
    this.subjectFiltro$.next();
  }

  doFilter() {
    this.getPage();
  }

  doResetFilter() {
    this.strFilter = "";
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