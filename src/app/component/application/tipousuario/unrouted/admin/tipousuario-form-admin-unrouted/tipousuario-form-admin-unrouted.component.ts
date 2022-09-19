import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { ITipousuario, ITipousuario2Send } from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-form-admin-unrouted',
  templateUrl: './tipousuario-form-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-form-admin-unrouted.component.css']
})

export class TipousuarioFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  oData2Show: ITipousuario = null;
  oData2Send: ITipousuario2Send = null;

  strEntity: string = 'tipousuario';
  strTitleSingular: string = 'Tipo de usuario';
  strATitleSingular: string = 'El tipo de usuario';

  oForm: UntypedFormGroup = null;
  strResult: string = null;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oTipousuarioService: TipousuarioService,
    public oMetadataService: MetadataService
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
      .subscribe((id: number) => {
        if (id) {
          this.id = id;
          this.strResult = this.strATitleSingular + ' con id=' + id + ' se ha modificado correctamente';
        } else {
          this.strResult = 'Error en la modificación de ' + this.strATitleSingular.toLowerCase();
        }
        this.msg.emit({ strMsg: this.strResult, id: this.id });
      });

  };


}
