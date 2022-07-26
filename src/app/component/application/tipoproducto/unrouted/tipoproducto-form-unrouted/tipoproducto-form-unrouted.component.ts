import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { IconService } from 'src/app/service/icon.service';
import { ITipoproducto, ITipoproducto2Send } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';


@Component({
  selector: 'app-tipoproducto-form-unrouted',
  templateUrl: './tipoproducto-form-unrouted.component.html',
  styleUrls: ['./tipoproducto-form-unrouted.component.css']
})

export class TipoproductoFormUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  oData2Show: ITipoproducto = null;
  oData2Send: ITipoproducto2Send = null;

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
    private oTipoproductoService: TipoproductoService,
    public oIconService: IconService
  ) {
  }

  ngOnInit(): void {

    if (this.strOperation == "edit") {
      this.get();
    } else {
      this.oForm = this.oFormBuilder.group({
        nombre: ['', Validators.required],
      });
    }

  }

  get = (): void => {
    this.oTipoproductoService
      .getOne(this.id)
      .subscribe((oData: ITipoproducto) => {
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
    this.oTipoproductoService
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
