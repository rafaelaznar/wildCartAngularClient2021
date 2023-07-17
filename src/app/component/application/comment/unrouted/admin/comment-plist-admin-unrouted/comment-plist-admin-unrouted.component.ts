import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { CommentService } from 'src/app/service/comment.service';
import { ICommentPage } from 'src/app/model/comment-interfaces';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ProductoService } from 'src/app/service/producto.service';
import { IProducto } from 'src/app/model/producto-interfaces';
import { IUsuario } from 'src/app/model/usuario-interfaces';

@Component({
  selector: 'app-comment-plist-admin-unrouted',
  templateUrl: './comment-plist-admin-unrouted.component.html',
  styleUrls: ['./comment-plist-admin-unrouted.component.css']
})

export class CommentPlistAdminUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  @Input() id_producto: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.comment
  strOperation: string = Constants.OPERATIONS.plist
  //
  oPage: ICommentPage;

  constructor(
    private oCommentService: CommentService,
    private oProductoService: ProductoService,
    private oUsuarioService: UsuarioService,
    public oMetadataService: MetadataService
  ) {
    this.oPage = {} as ICommentPage;
  }

  ngOnInit(): void {
    if (this.id_producto != null) {
      this.oProductoService.getOne(this.id_producto).subscribe({
        next: (oProducto: IProducto) => {
          this.oPage.strFilteredTitle = oProducto.nombre;
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error('ERROR: ' + this.strEntity + '-' + this.strOperation + ': ' + error.status + '(' + error.statusText + ') ' + error.message);
        }
      })
    }
    if (this.id_usuario != null) {
      this.oUsuarioService.getOne(this.id_usuario).subscribe({
        next: (oUsuario: IUsuario) => {
          this.oPage.strFilteredTitle = oUsuario.nombre + ' ' + oUsuario.apellido1 + ' ' + oUsuario.apellido2;
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error('ERROR: ' + this.strEntity + '-' + this.strOperation + ': ' + error.status + '(' + error.statusText + ') ' + error.message);
        }
      })
    }    
    this.getPage(); //important! don't call in constructor; id_tipoproducto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oCommentService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_usuario, this.id_producto)
      .subscribe({
        next: (oPage: ICommentPage) => {
          Object.assign(this.oPage, oPage);
          this.oPage.error = null;
          this.oPage.strFilteredMessage = this.oPage.strFilter
          this.oCommentService.getCount().subscribe({
            next: (nRecords: number) => {
              this.oPage.nRecords = nRecords;
            },
            error: (error: HttpErrorResponse) => {
              this.oPage.error = error;
              console.error('ERROR: ' + this.strEntity + '-' + this.strOperation + ': ' + error.status + '(' + error.statusText + ') ' + error.message);
              this.oPage.nRecords = null;
            }
          })
          if (this.oPage.number > this.oPage.totalPages - 1) {
            this.oPage.number = this.oPage.totalPages - 1;
            this.getPage();
          }
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error('ERROR: ' + this.strEntity + '-' + this.strOperation + ': ' + error.status + '(' + error.statusText + ') ' + error.message);
        }
      })
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

}