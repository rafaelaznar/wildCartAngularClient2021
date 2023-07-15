import { Component, Input, OnInit } from '@angular/core';
import { IFacturaPage } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { FacturaPrintService } from 'src/app/service/factura.print.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';

@Component({
  selector: 'app-factura-plist-admin-unrouted',
  templateUrl: './factura-plist-admin-unrouted.component.html',
  styleUrls: ['./factura-plist-admin-unrouted.component.css']
})

export class FacturaPlistAdminUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.invoice
  strOperation: string = Constants.OPERATIONS.plist
  //
  oPage: IFacturaPage;

  constructor(
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService,
    private oFacturaPrintService: FacturaPrintService,
    private oUsuarioService: UsuarioService
  ) {
    this.oPage = {} as IFacturaPage;
  }

  ngOnInit(): void {
    if (this.id_usuario != null) {
      this.oUsuarioService.getOne(this.id_usuario).subscribe({
        next: (oUsuario: IUsuario) => {
          this.oPage.strFilteredTitle = oUsuario.nombre + " " + oUsuario.apellido1 + " " + oUsuario.apellido2 + " (" + oUsuario.dni + ")";
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
        }
      })
    }
    this.getPage(); //important! don't call in constructor; id_usuario must be initialized before calling getPage()
  }

  getPage = () => {
    this.oFacturaService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_usuario)
      .subscribe({
        next: (oPage: IFacturaPage) => {
          Object.assign(this.oPage, oPage);
          this.oPage.error = null;
          this.oPage.strFilteredMessage = this.oPage.strFilter
          this.oFacturaService.getCount().subscribe({
            next: (nRecords: number) => {
              this.oPage.nRecords = nRecords;              
            },
            error: (error: HttpErrorResponse) => {
              this.oPage.error = error;
              console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
              this.oPage.nRecords = null;
            }
          })            
          if (this.oPage.totalPages > 0) {
            if (this.oPage.number > this.oPage.totalPages - 1) {
              this.oPage.number = this.oPage.totalPages - 1;
              this.getPage();
            }
          }
        },
        error: (error: HttpErrorResponse) => {
          this.oPage.error = error;
          console.error("ERROR: " + this.strEntity + '-' + this.strOperation + ': ' + error.status + "(" + error.statusText + ") " + error.message);
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

  onPrintFactura = (id_factura: number) => {
    this.oFacturaPrintService.printFactura(id_factura);
  }

}
