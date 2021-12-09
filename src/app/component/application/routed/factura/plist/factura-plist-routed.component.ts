import { IPageFactura } from '../../../../../model/factura-interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactura } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Subject } from 'rxjs';
import { IconService } from 'src/app/service/icon.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-plist-factura-routed.',
  templateUrl: './factura-plist-routed.component.html',
  styleUrls: ['./factura-plist-routed.component.css']
})
export class PlistFacturaRoutedComponent implements OnInit {
  strEntity: string = "factura"
  strOperation: string = "plist"
  strTitleSingular: string = "Factura";
  strTitlePlural: string = "Facturas";

  strUsuarioSession: string;

  id_usuario: number = null;

  fila: IUsuario;

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
    this.id_usuario = this.oActivatedRoute.snapshot.params.id_usuario;
    
  }

  ngOnInit(): void { }

}