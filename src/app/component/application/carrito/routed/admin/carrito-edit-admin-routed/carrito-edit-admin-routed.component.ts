import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/constant/constants';
import { IResult } from 'src/app/model/model-interfaces';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-carrito-edit-admin-routed',
  templateUrl: './carrito-edit-admin-routed.component.html',
  styleUrls: ['./carrito-edit-admin-routed.component.css'],
})
export class CarritoEditAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.edit;
  id: number = null;
  strUsuarioSession: string;
  oResult: IResult = null;

  constructor(
    oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id;
    //this.strOperation = this.oActivatedRoute.snapshot.url[1].path;
  }

  ngOnInit(): void {
  }

  reportResult = (oResult: IResult): void => {
    this.oResult = oResult;
    if (oResult.error == null) {
      if (oResult.id > 0) {
        this.id = oResult.id;
        this.openPopup(this.oMetadataService.getName('the' + oResult.strEntity) + ' se ha modificado correctamente con el id = ' + oResult.id);
      } else {
        this.openPopup('Error en la modificación de ' + this.oMetadataService.getName('the' + oResult.strEntity).toLowerCase());
      }
    } else {
      this.openPopup('ERROR: ' + oResult.error.status + ': ' + oResult.error.message);
    }
  };

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    if (this.oResult && this.oResult.error == null) {
      this.oRouter.navigate(['/',this.strProfile, this.strEntity, 'view', this.id]);
    }    
  }
}
