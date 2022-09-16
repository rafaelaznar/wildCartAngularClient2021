import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from 'src/app/service/icon.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
@Component({
  selector: 'app-producto-view-admin-routed',
  templateUrl: './producto-view-admin-routed.component.html',
  styleUrls: ['./producto-view-admin-routed.component.css']
})

export class ProductoViewAdminRoutedComponent implements OnInit {
  
  strEntity: string = "producto"
  strOperation: string = "view"
  strTitleSingular: string = "Producto";
  strTitlePlural: string = "Productos";
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