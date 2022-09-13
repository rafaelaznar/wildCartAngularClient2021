import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-factura-view-admin-routed',
  templateUrl: './factura-view-ar.component.html',
  styleUrls: ['./factura-view-ar.component.css']
})

export class FacturaViewAdminRoutedComponent implements OnInit {

  strEntity: string = "factura"
  strOperation: string = "view"
  strTitleSingular: string = "Factura";
  strTitlePlural: string = "Facturas";
  
  id: number = null;
  strUsuarioSession: string;
  strResult: string = null;

  oUserSession: IUsuario;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    public oRouter: Router,
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

  ngOnInit() {}

}