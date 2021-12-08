import { IUsuario2Send } from '../../../../../model/usuario-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let $: any;

@Component({
  selector: 'app-usuario-edit-routed',
  templateUrl: './usuario-edit-routed.component.html',
  styleUrls: ['./usuario-edit-routed.component.css'],
})

export class UsuarioEditRoutedComponent implements OnInit {
  strEntity: string = 'usuario';
  strOperation: string = 'edit';
  strTitleSingular: string = 'Usuario';
  strTitlePlural: string = 'Usuarios';
  oUsuario2Show: IUsuario = null;
  oUsuario2Send: IUsuario2Send = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;
  oUserSession: IUsuario;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
    public oIconService: IconService,
    private oLocation: Location
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string =
        this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.getOne();
  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      dni: ['', [Validators.required, Validators.minLength(5)]],
      apellido1: ['', [Validators.required, Validators.minLength(5)]],
      apellido2: ['', [Validators.required, Validators.minLength(5)]],
      login: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      tusuario: ['', [Validators.required, Validators.maxLength(1)]],

    });
  }

  getOne = (): void => {
    this.oUsuarioService
      .getOne(this.id)
      .subscribe((oData: IUsuario) => {
        this.oUsuario2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oUsuario2Show.id],
          nombre: [
            this.oUsuario2Show.nombre,
            [Validators.required, Validators.minLength(5)]
          ],
          login: [this.oUsuario2Show.login, [Validators.required, Validators.minLength(5)]],
          apellido1: [this.oUsuario2Show.apellido1, [Validators.required, Validators.minLength(5)]],
          apellido2: [this.oUsuario2Show.apellido2, [Validators.required, Validators.minLength(5)]],
          email: [this.oUsuario2Show.email, [Validators.required, Validators.minLength(5)]],
          dni: [this.oUsuario2Show.dni, [Validators.required, Validators.minLength(5)]],
          tusuario: [this.oUsuario2Show.tipousuario.id, [Validators.required, Validators.minLength(1)]]
        });
      });
  };

  onSubmit(): void {
    if (this.oForm) {
      this.oUsuario2Send = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre,
        dni: this.oForm.value.dni,
        apellido1: this.oForm.value.apellido1,
        apellido2: this.oForm.value.apellido2,
        login: this.oForm.value.login,
        email: this.oForm.value.email,
        descuento: 0,
        validado: true,
        activo: true,
        tipousuario: {
          id: this.oForm.value.tusuario
        }
      };

      this.update();
    }
  }

  update = (): void => {
    console.log(this.oUsuario2Send);
    this.oUsuarioService
      .updateOne(this.oUsuario2Send)
      .subscribe((id: number) => {
        if (id) {
          this.strResult = 'El usuario se ha modificado correctamente';
        } else {
          this.strResult = 'Error en la modificación del usuario';
        }
        this.openPopup();
      });
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