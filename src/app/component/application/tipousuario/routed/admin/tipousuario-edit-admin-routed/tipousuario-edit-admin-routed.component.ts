import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';
import { IResult } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-tipousuario-edit-admin-routed',
  templateUrl: './tipousuario-edit-admin-routed.component.html',
  styleUrls: ['./tipousuario-edit-admin-routed.component.css'],
})

export class TipousuarioEditAdminRoutedComponent implements OnInit {

  strEntity: string = Constants.ENTITIES.usertype;
  strOperation: string = Constants.OPERATIONS.edit; //only edit; it can't be new
  id: number = null;
  strUsuarioSession: IUsuario = null;
  oResult: IResult = null;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    this.id = this.oActivatedRoute.snapshot.params.id;
    //this.strOperation = this.oActivatedRoute.snapshot.url[1].path;
  }

  ngOnInit(): void { }

  reportResult = (oResult: any): void => {
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
      this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
    }
  }
}
