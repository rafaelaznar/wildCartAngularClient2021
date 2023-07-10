import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IUsuario, IUsuario2Send } from 'src/app/model/usuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { ITipousuario } from 'src/app/model/tipousuario-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { IResult } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-usuario-form-admin-unrouted',
  templateUrl: './usuario-form-admin-unrouted.component.html',
  styleUrls: ['./usuario-form-admin-unrouted.component.css']
})

export class UsuarioFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<IResult>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.user;
  //
  oData2Show: IUsuario = null;
  oData2Send: IUsuario2Send = null;
  oForm: FormGroup = null;
  status: HttpErrorResponse = null;

  get f() {
    return this.oForm;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oUsuarioService: UsuarioService,
    private oTipousuarioService: TipousuarioService,
    public oMetadataService: MetadataService,
  ) { }

  ngOnInit(): void {
    if (this.strOperation == "edit") {
      this.get();
    } else {
      this.oForm = this.oFormBuilder.group({
        id: [''],
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        dni: ['', [Validators.required, Validators.minLength(5)]],
        apellido1: ['', [Validators.required, Validators.minLength(5)]],
        apellido2: ['', [Validators.required, Validators.minLength(5)]],
        login: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.minLength(5)]],
        id_tipousuario: ['', [Validators.required, Validators.maxLength(1)]],
      });
    }
  }

  get = (): void => {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (oData: IUsuario) => {
        this.oData2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oData2Show.id],
          nombre: [
            this.oData2Show.nombre,
            [Validators.required, Validators.minLength(5)]
          ],
          login: [this.oData2Show.login, [Validators.required, Validators.minLength(5)]],
          apellido1: [this.oData2Show.apellido1, [Validators.required, Validators.minLength(5)]],
          apellido2: [this.oData2Show.apellido2, [Validators.required, Validators.minLength(5)]],
          email: [this.oData2Show.email, [Validators.required, Validators.minLength(5)]],
          dni: [this.oData2Show.dni, [Validators.required, Validators.minLength(5)]],
          id_tipousuario: [this.oData2Show.tipousuario.id, [Validators.required, Validators.minLength(1)]]
        });
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
        this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
      }
    })
  };

  onSubmit(): void {
    if (this.oForm) {
      if (this.oForm.valid) {
        this.oData2Send = {
          id: this.oForm.value.id,
          nombre: this.oForm.value.nombre,
          dni: this.oForm.value.dni,
          apellido1: this.oForm.value.apellido1,
          apellido2: this.oForm.value.apellido2,
          login: this.oForm.value.login,
          email: this.oForm.value.email,
          descuento: 0,
          validado: false,
          activo: false,
          tipousuario: {
            id: this.oForm.value.id_tipousuario
          }
        };
        this.save();
      }
    }
  }

  save(): void {
    if (this.strOperation == "new") {
      this.oUsuarioService.newOne(this.oData2Send).subscribe({
        next: (id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        },
        error: (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }
      });
    } else {
      this.oUsuarioService.updateOne(this.oData2Send).subscribe({
        next: (id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        },
        error: (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }
      });
    }
  };

  //ajenas

  onFindSelection($event: number) {
    this.oForm.controls['id_tipousuario'].setValue($event);
    this.oForm.controls['id_tipousuario'].markAsDirty();
    this.oTipousuarioService.getOne(this.oForm.controls['id_tipousuario'].value).subscribe({
      next: (oData: ITipousuario) => {
        if (this.strOperation == "edit") {
          this.oData2Show.tipousuario = oData; //pte!!
        } else {
          this.oData2Show = {} as IUsuario;
          this.oData2Show.tipousuario = {} as ITipousuario;;
          this.oData2Show.tipousuario = oData;
        }
      }, error: (err) => {
        this.oData2Show.tipousuario.nombre = "ERROR";
        this.oForm.controls['id_tipousuario'].setErrors({ 'incorrect': true });
      }
    });
    return false;
  }

}
