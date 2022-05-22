import { PaginationService } from '../../../../../service/pagination.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IPageUsuario, IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-plist-unrouted',
  templateUrl: './usuario-plist-unrouted.component.html',
  styleUrls: ['./usuario-plist-unrouted.component.css']
})
export class UsuarioPlistUnroutedComponent implements OnInit {

  @Input() id_tipousuario: number = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();

  strEntity: string = "usuario"
  strOperation: string = "plist"
  strTitleSingular: string = "Usuario";
  strATitleSingular: string = "El usuario";
  strTitlePlural: string = "Usuarios";
  //
  aUsuarios: IUsuario[];
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
  strResult: string = null;

  constructor(
    private oPaginationService: PaginationService,
    private oPostService: UsuarioService,
    public oIconService: IconService,
  ) { 
    this.getPage();
  }

  ngOnInit(): void {    
    this.subjectFilter.pipe(
      debounceTime(1000)
    ).subscribe(() => {
      this.getPage();
      this.nPage = 1;
    });      
  }

  getPage = () => {
    if (this.id_tipousuario) {
      this.oPostService.getPageFiltered(this.nPageSize, this.nPage, this.strSortField, this.strSortDirection, this.strFilter, this.id_tipousuario).subscribe((oPage: IPageUsuario) => {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por el tipo de usuario " + this.id_tipousuario + " y por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado filtrado por el tipo de usuario " + this.id_tipousuario;
        }
        this.aUsuarios = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.nTotalPages = oPage.totalPages;
        this.aPaginationBar = this.oPaginationService.pagination(this.nTotalPages, this.nPage);
      })
    } else {
      this.oPostService.getPage(this.nPageSize, this.nPage, this.strSortField, this.strSortDirection, this.strFilter).subscribe((oPage: IPageUsuario) => {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado NO filtrado";
        }
        this.aUsuarios = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.nTotalPages = oPage.totalPages;
        this.aPaginationBar = this.oPaginationService.pagination(this.nTotalPages, this.nPage);
        console.log(oPage);
      })
    }
  }

  doJumpToPage = () => {
    this.getPage();
    return false;
  }

  onKeyUpFilter(event: KeyboardEvent): void {
    this.subjectFilter.next();
  }

  doFilter() {
    this.getPage();
  }

  doResetFilter() {
    this.strFilter = "";
    this.getPage();
  }

  doResetOrder() {
    this.strSortField = "";
    this.strSortDirection = "";
    this.getPage();
  }

  doSetOrder(order: string) {
    this.strSortField = order;
    if (this.strSortDirection == 'asc') {
      this.strSortDirection = 'desc';
    } else if (this.strSortDirection == 'desc') {
      this.strSortDirection = '';
    } else {
      this.strSortDirection = 'asc';
    }
    this.getPage();
  }

  onSelection(id: number) {
    this.selection.emit(id);
  }

}