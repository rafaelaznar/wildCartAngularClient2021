import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from 'src/app/service/icon.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
@Component({
  selector: 'app-carrito-view-AR',
  templateUrl: './carrito-view-AR.component.html',
  styleUrls: ['./carrito-view-AR.component.css']
})

export class CarritoViewARComponent implements OnInit {
  strEntity: string = "carrito"
  strOperation: string = "view"
  strTitleSingular: string = "Carrito";
  strTitlePlural: string = "Carritos";
  id: number = null;
  strUsuarioSession: string;
  strResult: string = null;
 
  oUserSession: IUsuario;

  constructor(
  
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    public oIconService: IconService

  ) {

    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id

  }

  ngOnInit() {
  }

}