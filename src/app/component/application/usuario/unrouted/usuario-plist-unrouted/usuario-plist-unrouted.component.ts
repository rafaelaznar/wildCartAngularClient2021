import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IUsuarioPage, IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { IOrder } from 'src/app/model/model-interfaces';

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
    private oUsuarioService: UsuarioService,
    public oIconService: IconService,
  ) {
  }

  ngOnInit(): void {
    this.nPage = 1;
    this.getPage(); //important! don't call in constructor; id_tipousuario must be initialized before calling getPage()
  }

  getPage = () => {
    this.oUsuarioService.getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter, this.id_tipousuario).subscribe((oPage: IUsuarioPage) => {
      if (this.id_tipousuario) {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por el tipo de producto " + this.id_tipousuario + " y por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado filtrado por el tipo de producto " + this.id_tipousuario;
        }
      } else {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado NO filtrado";
        }
      }
      this.aUsuarios = oPage.content;
      this.nTotalElements = oPage.totalElements;
      this.nTotalPages = oPage.totalPages;
      if (this.nPage > this.nTotalPages) {
        this.nPage = this.nTotalPages;
        this.getPage();
      }
    })
  }

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