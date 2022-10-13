import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-tipousuario-edit-admin-routed',
  templateUrl: './tipousuario-edit-admin-routed.component.html',
  styleUrls: ['./tipousuario-edit-admin-routed.component.css'],
})

export class TipousuarioEditAdminRoutedComponent implements OnInit {

  strEntity: string = 'tipousuario';
  strOperation: string = 'edit'; //only edit; it can't be new
  strTitleSingular: string = 'Tipo de usuario';
  strATitleSingular: string = 'El tipo de usuario';
  strTitlePlural: string = 'Tipos de usuario';
  //
  id: number = null;

  strUsuarioSession: IUsuario = null;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService,
    private oLocation: Location
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.strOperation = this.oActivatedRoute.snapshot.url[1].path;
  }

  ngOnInit(): void { }

  reportResult = (oResult: any): void => {
    this.id = oResult.id;
    this.openPopup(oResult.strMsg);
  };

  goBack(): void {
    this.oLocation.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
  }
}
