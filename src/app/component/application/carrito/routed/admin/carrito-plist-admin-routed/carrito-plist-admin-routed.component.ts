import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-carrito-plist-admin-routed',
  templateUrl: './carrito-plist-admin-routed.component.html',
  styleUrls: ['./carrito-plist-admin-routed.component.css'],
})

export class CarritoPlistAdminRoutedComponent implements OnInit {

  strEntity: string = 'carrito';
  strOperation: string = 'plist';
  strTitleSingular: string = 'Carrito';
  strTitlePlural: string = 'Carritos';
  strATitleSingular: string = 'El carrito';
  strATitlePlural: string = 'Los carritos';

  strUsuarioSession: string;

  id_producto: number = null;
  id_usuario: number = null;

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
    this.id_usuario = this.oActivatedRoute.snapshot.params.id_usuario;
  }

  ngOnInit(): void {}
}
