import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-tipousuario-edit-routed',
  templateUrl: './tipousuario-edit-routed.component.html',
  styleUrls: ['./tipousuario-edit-routed.component.css'],
})

export class TipousuarioEditRoutedComponent implements OnInit {

  strEntity: string = 'tipousuario';
  strOperation: string = 'edit'; //only edit; it can't be new
  strTitleSingular: string = 'Tipo de usuario';
  strATitleSingular: string = 'El tipo de usuario';
  strTitlePlural: string = 'Tipos de usuario';
  //
  id: number = null;
  strResult: string = null;
  strUsuarioSession: IUsuario = null;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oIconService: IconService,
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
    this.strResult = oResult.strMsg;
    this.id = oResult.id;
    this.openPopup();
  };

  goBack(): void {
    this.oLocation.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<void> = new Subject<void>();

  openPopup(): void {
    this.eventsSubjectShowPopup.next();
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
  }
}
