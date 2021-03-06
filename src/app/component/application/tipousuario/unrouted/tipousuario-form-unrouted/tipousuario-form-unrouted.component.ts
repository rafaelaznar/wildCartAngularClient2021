import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IconService } from 'src/app/service/icon.service';
import { ITipousuario, ITipousuario2Send } from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';


@Component({
  selector: 'app-tipousuario-form-unrouted',
  templateUrl: './tipousuario-form-unrouted.component.html',
  styleUrls: ['./tipousuario-form-unrouted.component.css']
})

export class TipousuarioFormUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  oData2Show: ITipousuario = null;
  oData2Send: ITipousuario2Send = null;

  strEntity: string = 'tipousuario';
  strTitleSingular: string = 'Tipo de usuario';
  strATitleSingular: string = 'El tipo de usuario';

  oForm: FormGroup = null;
  strResult: string = null;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oTipousuarioService: TipousuarioService,
    public oIconService: IconService
  ) {
  }

  ngOnInit(): void {
    if (this.strOperation == "edit") {
      this.get();
    }
  }

  get = (): void => {
    this.oTipousuarioService
      .getOne(this.id)
      .subscribe((oData: ITipousuario) => {
        this.oData2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.id],
          nombre: [this.oData2Show.nombre, [Validators.required, Validators.minLength(4)]]
        });
      });
  };

  onSubmit(): void {
    if (this.oForm) {
      if (this.oForm.valid) {
        this.oData2Send = {
          id: this.oForm.value.id,
          nombre: this.oForm.value.nombre,
        };
        this.save();
      }
    }
  }

  save(): void {
    this.oTipousuarioService
      .updateOne(this.oData2Send)
      .subscribe((oData: ITipousuario) => {
        if (oData.id) {
          this.id = oData.id;
          this.strResult = this.strATitleSingular + ' con id=' + oData.id + ' se ha modificado correctamente';
        } else {
          this.strResult = 'Error en la modificaci??n de ' + this.strATitleSingular.toLowerCase();
        }
        this.msg.emit({ strMsg: this.strResult, id: this.id });
      });

  };


}
