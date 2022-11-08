import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { ITipousuario, ITipousuario2Send } from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { Constants } from 'src/app/model/constants';
import { HttpErrorResponse } from '@angular/common/http';

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
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.usertype;
  oForm: UntypedFormGroup = null;
  status: HttpErrorResponse = null;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oTipousuarioService: TipousuarioService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit(): void {
    if (this.strOperation == "edit") {
      this.get();
    } else {
      console.error("tipousuario-form-admin: can't create a new usertype");
      this.msg.emit({ error: new HttpErrorResponse({ statusText: "can't create a new usertype" }), id: null, strEntity: this.strEntity, strOperation: this.strOperation });
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
      }, (error: HttpErrorResponse) => {
        this.status = error;
        this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
      })
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
    if (this.strOperation == "new") {
      console.error("tipousuario-form-admin: can't create a new usertype");
      this.msg.emit({ error: new HttpErrorResponse({ statusText: "can't create a new usertype" }), id: null, strEntity: this.strEntity, strOperation: this.strOperation });
    } else {
      this.oTipousuarioService
        .updateOne(this.oData2Send)
        .subscribe((id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }, (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        });
    }
  };


}
