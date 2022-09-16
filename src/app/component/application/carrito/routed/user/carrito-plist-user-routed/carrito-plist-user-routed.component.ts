import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-carrito-plist-user-routed',
  templateUrl: './carrito-plist-user-routed.component.html',
  styleUrls: ['./carrito-plist-user-routed.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CarritoPlistUserRoutedComponent implements OnInit {

  strEntity: string = 'carrito';
  strOperation: string = 'plist';
  strTitleSingular: string = 'Carrito';
  strTitlePlural: string = 'Carritos';
  strATitleSingular: string = 'El carrito';
  strATitlePlural: string = 'Los carritos';

  oUserSession: IUsuario;

  id_producto: number = null;
  id_usuario: number = null;

  fila: IUsuario;

  tipousuarioSession_id: number = null;

  carritoHomeEventsSubject: Subject<{ action: string, data: number }> = new Subject<{ action: string, data: number }>();

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    public oIconService: IconService,
    private oActivatedRoute: ActivatedRoute
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      this.tipousuarioSession_id = this.oUserSession.tipousuario.id;
      localStorage.setItem('user', JSON.stringify(this.oRoute.snapshot.data.message)
      );
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    this.id_producto = this.oActivatedRoute.snapshot.params.id_producto;
    this.id_usuario = this.oActivatedRoute.snapshot.params.id_usuario;
  }

  ngOnInit(): void { }

  onAddCarrito(id_producto: number) {
    this.carritoHomeEventsSubject.next({ action: 'add', data: id_producto });
  }

}
