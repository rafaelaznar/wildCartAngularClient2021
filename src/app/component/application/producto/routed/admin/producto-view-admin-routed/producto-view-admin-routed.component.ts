import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Constants } from 'src/app/model/constants';
@Component({
  selector: 'app-producto-view-admin-routed',
  templateUrl: './producto-view-admin-routed.component.html',
  styleUrls: ['./producto-view-admin-routed.component.css']
})

export class ProductoViewAdminRoutedComponent implements OnInit {
  
  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.view
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