import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IUsuarioPage, IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-usuario-selection-admin-unrouted',
  templateUrl: './usuario-selection-admin-unrouted.component.html',
  styleUrls: ['./usuario-selection-admin-unrouted.component.css']
})

export class UsuarioSelectionAdminUnroutedComponent implements OnInit {

  @Input() id_tipousuario: number = null;
  @Output() selection = new EventEmitter<number>();

  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.plist
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
  

  constructor(
    private oUsuarioService: UsuarioService,
    public oMetadataService: MetadataService,
  ) {
  }

  ngOnInit(): void {
    this.nPage = 1;
    this.getPage(); //important! don't call in constructor; id_tipousuario must be initialized before calling getPage()
  }

  getPage = () => {
    this.oUsuarioService.getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter, this.id_tipousuario).subscribe((oPage: IUsuarioPage) => {
      this.strFilteredMessage = this.oMetadataService.getFilterMsg(this.strFilter, 'tipousuario', this.id_tipousuario, null, null);
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