import { IUsuario2Send } from './../../../model/usuario-interfaces';
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
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css'],
})
export class EditUsuarioComponent implements OnInit {
  oUsuario: IUsuario2Send = null;
  oUsuarioShow: IUsuario = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;
  strOperation: string="edit";
  strEntity:string="usuario";
  strTitleSingular:string="usuario"

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
        this.oUsuarioShow = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oUsuarioShow.id],
          nombre: [
            this.oUsuarioShow.nombre,
            [Validators.required, Validators.minLength(5)]
          ],
          login:[this.oUsuarioShow.login,[Validators.required, Validators.minLength(5)]],
          apellido1:[this.oUsuarioShow.apellido1,[Validators.required, Validators.minLength(5)]],
          apellido2:[this.oUsuarioShow.apellido2,[Validators.required, Validators.minLength(5)]],
          email:[this.oUsuarioShow.email,[Validators.required, Validators.minLength(5)]],
          dni:[this.oUsuarioShow.dni,[Validators.required, Validators.minLength(5)]],
          tusuario:[this.oUsuarioShow.tipousuario.id,[Validators.required, Validators.minLength(1)]]
        });
      });
  };

  onSubmit(): void {
    if (this.oForm) {
      this.oUsuario = {
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
        tipousuario:{
          id:this.oForm.value.tusuario
        }
      };

      this.update();
    }
  }

  update = (): void => {
    console.log(this.oUsuario);
    this.oUsuarioService
      .updateOne(this.oUsuario)
      .subscribe((id: number) => {
        if (id) {
          this.strResult = 'El usuario se ha modificado correctamente';
        } else {
          this.strResult = 'Error en la modificación del usuario';
        }
        this.openModal();
      });
  };

  goBack(): void {
    this.oLocation.back();
  }

  //modal

  eventsSubject: Subject<void> = new Subject<void>();

  openModal(): void {
    this.eventsSubject.next();
  }

  closeModal(): void {
    this.oRouter.navigate(['usuario/view/' + this.id]);
  }
}