import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';

@Component({
  selector: 'app-compra-view-admin-routed',
  templateUrl: './compra-view-admin-routed.component.html',
  styleUrls: ['./compra-view-admin-routed.component.css']
})

export class CompraViewAdminRoutedComponent implements OnInit {

  strEntity: string = "compra"
  strOperation: string = "view"
  strTitleSingular: string = "Compra";
  strTitlePlural: string = "Compras";
  id: number = null;
  strUsuarioSession: string;
  
 
  oUserSession: IUsuario;

  constructor(
  
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    public oMetadataService: MetadataService

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