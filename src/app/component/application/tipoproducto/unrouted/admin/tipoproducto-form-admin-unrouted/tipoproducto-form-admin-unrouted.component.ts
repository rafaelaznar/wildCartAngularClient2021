import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { ITipoproducto, ITipoproducto2Send } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { Subject } from 'rxjs/internal/Subject';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/service/errorHandler.service';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-tipoproducto-form-admin-unrouted',
  templateUrl: './tipoproducto-form-admin-unrouted.component.html',
  styleUrls: ['./tipoproducto-form-admin-unrouted.component.css']
})

export class TipoproductoFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  oData2Show: ITipoproducto = null;
  oData2Send: ITipoproducto2Send = null;

  strEntity: string = Constants.ENTITIES.producttype;

  oForm: UntypedFormGroup = null;
  
  strStatus: string = null;  

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oTipoproductoService: TipoproductoService,
    public oMetadataService: MetadataService,
    private oRouter: Router,
    private oErrorHandlerService: ErrorHandlerService
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
    let strResult: string = '';
    if (this.strOperation == "new") {
      this.oTipoproductoService.newOne(this.oData2Send)
        .subscribe(
          (id: number) => {
            if (id>0) {
              this.id = id;
              strResult = this.oMetadataService.getName('the' + this.strEntity).toLowerCase() + ' se ha creado correctamente con el id: ' + id;
            } else {
              strResult = 'Error en la creación de ' + this.oMetadataService.getName('the' + this.strEntity).toLowerCase();
            }
            this.msg.emit({ strMsg: strResult, id: this.id });
          },
          (error) => {
            strResult = "Error al guardar " +
            this.oMetadataService.getName('the' + this.strEntity).toLowerCase() + ': status: ' + error.status + " (" + error.error.status + ') ' + error.error.message;
            this.openPopup(strResult);
          });
    } else {
      this.oTipoproductoService
        .updateOne(this.oData2Send)
        .subscribe((id: number) => {
          if (id>0) {
            this.id = id;
            strResult = this.oMetadataService.getName('the' + this.strEntity).toLowerCase() + ' con id=' + id + ' se ha modificado correctamente';
          } else {
            strResult = 'Error en la modificación de ' + this.oMetadataService.getName('the' + this.strEntity).toLowerCase();
          }
          this.msg.emit({ strMsg: strResult, id: this.id });
        },
          (error) => {
            this.strStatus = error.status;
            strResult = this.oErrorHandlerService.componentHandleError(error);
            this.openPopup(strResult);
          });
    }
  };
  
  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str:string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    if (this.strStatus == "401") {
      this.oRouter.navigate(['/login']);
    }
  }


}
