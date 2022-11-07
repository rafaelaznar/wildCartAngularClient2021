import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { Constants } from 'src/app/model/constants';


@Component({
  selector: 'app-producto-view-user-routed',
  templateUrl: './producto-view-user-routed.component.html',
  styleUrls: ['./producto-view-user-routed.component.css']
})

export class ProductoViewUserRoutedComponent implements OnInit {

  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.view
  id: number = null;
  oUserSession: IUsuario;
  tipousuarioSession_id: number = null;
  carritoHomeEventsSubject: Subject<{ action: string, data: number }> = new Subject<{ action: string, data: number }>();

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    protected oMetadataService: MetadataService,
    protected oLocation: Location
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      this.tipousuarioSession_id = this.oUserSession.tipousuario.id;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      this.oRouter.navigate(['/home']);
    }
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit() { }

  onAddCarrito(id_producto: number) {
    this.carritoHomeEventsSubject.next({ action: 'add', data: id_producto });
  }

}