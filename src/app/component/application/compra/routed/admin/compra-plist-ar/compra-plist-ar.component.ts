import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-compra-plist-admin-routed',
  templateUrl: './compra-plist-ar.component.html',
  styleUrls: ['./compra-plist-ar.component.css'],
})

export class CompraPlistAdminRoutedComponent implements OnInit {

  strEntity: string = 'compra';
  strOperation: string = 'plist';
  strTitleSingular: string = 'Compra';
  strTitlePlural: string = 'Compras';

  strUsuarioSession: string;

  id_producto: number = null;
  id_factura: number = null;

  fila: IUsuario;

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    public oIconService: IconService,
    private oActivatedRoute: ActivatedRoute
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem(
        'user',
        JSON.stringify(this.oRoute.snapshot.data.message)
      );
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    this.id_producto = this.oActivatedRoute.snapshot.params.id_producto;
    this.id_factura = this.oActivatedRoute.snapshot.params.id_factura;
  }

  ngOnInit(): void {}
}
