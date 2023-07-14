import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { Constants } from 'src/app/constant/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { CarritoService } from 'src/app/service/carrito.service';
import { SessionService } from 'src/app/service/session.service';
import { IResult } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-producto-view-user-routed',
  templateUrl: './producto-view-user-routed.component.html',
  styleUrls: ['./producto-view-user-routed.component.css']
})

export class ProductoViewUserRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.product
  strOperation: string = Constants.OPERATIONS.view
  //
  id: number = null;
  //
  reloadCommentsSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    protected oMetadataService: MetadataService,
    protected oLocation: Location,
    private oCarritoService: CarritoService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.user, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit() { }

  onAddCarrito(id_producto: number) {
    this.oCarritoService.notifyCarritoChange('add');
  }

  reportResult = (oResult: IResult): void => {
    let oNewCommentResult: IResult = null;
    oNewCommentResult = oResult;
    if (oNewCommentResult.error == null) {
      if (oNewCommentResult.id > 0) {
        // recargar el listado de comentarios
        this.reloadCommentsSubject.next(true);
      } else {
        this.openPopup(this.oMetadataService.getName('KO'));
      }
    } else {
      this.openPopup('ERROR: ' + oNewCommentResult.error.status + ': ' + oNewCommentResult.error.message);
    }
  };

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {

  }

}