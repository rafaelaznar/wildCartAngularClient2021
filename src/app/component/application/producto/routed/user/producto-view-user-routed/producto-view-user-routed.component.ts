import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';


@Component({
  selector: 'app-producto-view-user-routed',
  templateUrl: './producto-view-user-routed.component.html',
  styleUrls: ['./producto-view-user-routed.component.css']
})

export class ProductoViewUserRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.view
  id: number = null;
  carritoHomeEventsSubject: Subject<{ action: string, data: number }> = new Subject<{ action: string, data: number }>();

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    protected oMetadataService: MetadataService,
    protected oLocation: Location
  ) {
    super(Constants.PROFILES.user, oRouter, oActivatedRoute);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit() { }

  onAddCarrito(id_producto: number) {
    this.carritoHomeEventsSubject.next({ action: 'add', data: id_producto });
  }

}