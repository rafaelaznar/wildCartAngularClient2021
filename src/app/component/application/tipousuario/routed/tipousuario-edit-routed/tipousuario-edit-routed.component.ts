import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { ITiposuario2Send, ITipousuario } from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

declare let $: any;

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
  oTipousuario: ITipousuario = null;
  oTiposuario2Send: ITiposuario2Send = null;
  //
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;
  strUserSession: IUsuario = null;

  get f() {
    return this.oForm.controls;
  }

  constructor(  
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oTipoUsuarioService: TipousuarioService,    
    private oLocation: Location,
    private oFormBuilder: FormBuilder,
    public oIconService: IconService
  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUserSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.getOne();

  }

  ngOnInit(): void { }

  getOne = (): void => {
    this.oTipoUsuarioService.view(this.id).subscribe((oData: ITipousuario) => {
      this.oTipousuario = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.id],
        nombre: [this.oTipousuario.nombre, [Validators.required, Validators.minLength(4)]]
      });
    });
  };

  onSubmit(): void {
    if (this.oForm) {
      this.oTiposuario2Send = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre,
      };
      this.update();
    }
  }

  update = (): void => {
    this.oTipoUsuarioService
      .edit(JSON.stringify(this.oTiposuario2Send))
      .subscribe((oTipousuario: ITipousuario) => {
        if (oTipousuario.id) {
          this.strResult = this.strATitleSingular + ' con id=' + oTipousuario.id + ' se ha modificado correctamente';
        } else {
          this.strResult = 'Error en la modificación de ' + this.strATitleSingular.toLowerCase();
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
