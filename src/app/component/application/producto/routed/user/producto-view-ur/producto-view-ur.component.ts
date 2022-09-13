import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from 'src/app/service/icon.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-producto-view-user-routed',
  templateUrl: './producto-view-ur.component.html',
  styleUrls: ['./producto-view-ur.component.css']
})

export class ProductoViewUserRoutedComponent implements OnInit {

  strEntity: string = "producto"
  strOperation: string = "view"
  strTitleSingular: string = "Producto";
  strTitlePlural: string = "Productos";
  id: number = null;
  strUsuarioSession: string;
  strResult: string = null;

  oUserSession: IUsuario;

  tipousuarioSession_id: number = null;
  carritoHomeEventsSubject: Subject<{ action: string, data: number }> = new Subject<{ action: string, data: number }>();

  constructor(

    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    public oIconService: IconService,
    private oLocation: Location

  ) {

    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      this.tipousuarioSession_id = this.oUserSession.tipousuario.id;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id

  }

  ngOnInit() {
  }

  onAddCarrito(id_producto: number) {
    this.carritoHomeEventsSubject.next({ action: 'add', data: id_producto });
  }

  goBack(): void {
    this.oLocation.back();
  }
  
}