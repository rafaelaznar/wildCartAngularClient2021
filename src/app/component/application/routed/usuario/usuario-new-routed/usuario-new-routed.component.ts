import { TipousuarioService } from '../../../../../service/tipousuario.service';
import { IUsuario, IUsuario2Send } from '../../../../../model/usuario-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

import { UsuarioService } from 'src/app/service/usuario.service';
import { IconService } from 'src/app/service/icon.service';
import { ITipousuario } from 'src/app/model/tipousuario-interfaces';

@Component({
  selector: 'app-usuario-new-routed',
  templateUrl: './usuario-new-routed.component.html',
  styleUrls: ['./usuario-new-routed.component.css'],
})
export class UsuarioNewRoutedComponent implements OnInit {

  strEntity: string = "usuario"
  strOperation: string = "new"
  strTitleSingular: string = "Usuario";
  strATitleSingular: string = "El usuario";
  strTitlePlural: string = "Usuarios";
  id: number = null;
  strResult: string = null;
  strUsuarioSession: string;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    public oIconService: IconService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.strOperation = this.oActivatedRoute.snapshot.url[1].path;

  }

  ngOnInit(): void {
  }

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