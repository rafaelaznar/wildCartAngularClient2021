import { IUsuario2Send } from './../../../model/usuario-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let $: any;

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.css'],
})
export class NewUsuarioComponent implements OnInit {
  usuario: IUsuario2Send = null;
  id: number = 0;
  oForm: FormGroup = null;
  strResult: string = '';
  idnuevo: number;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
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

  onSubmit(): void {
    if (this.oForm) {
      this.usuario = {
        id: null,
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
      this.new();
    }
  }

  new = (): void => {
    this.oUsuarioService
      .newOne(this.usuario)
      .subscribe((id: number) => {
        if (id) {
          this.id = id;
          this.strResult = 'El usuario se ha creado correctamente';
        } else {
          this.strResult = 'Error en la creación del registro';
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
    this.oRouter.navigate(['usuario/plist/']);
  }
}