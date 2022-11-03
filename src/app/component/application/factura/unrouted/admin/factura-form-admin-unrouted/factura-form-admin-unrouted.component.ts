import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { IFactura, IFactura2Send } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Constants } from 'src/app/model/constants';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-factura-form-admin-unrouted',
  templateUrl: './factura-form-admin-unrouted.component.html',
  styleUrls: ['./factura-form-admin-unrouted.component.css']
})

export class FacturaFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  strEntity: string = Constants.ENTITIES.invoice;
  oFactura2Send: IFactura2Send = null;
  oFactura2Show: IFactura = null;
  oForm: UntypedFormGroup = null;
  status: HttpErrorResponse = null;

  es: any = {
    firstDayOfWeek: 1,
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    today: 'Hoy',
    clear: 'Borrar',
    dateFormat: 'mm/dd/yyyy',
  };

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService,
    private oUsuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {

    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar',
      dateFormat: 'mm/dd/yyyy',
    }


    if (this.strOperation == "edit") {
      this.get();
    } else {
      this.oForm = this.oFormBuilder.group({
        id: [''],
        fecha: ['', Validators.required],
        iva: ['', Validators.required],
        pagado: [''],
        id_usuario: ['', Validators.required]
      });
    }

  }

  get = (): void => {
    this.oFacturaService
      .getOne(this.id)
      .subscribe((oData: IFactura) => {
        this.oFactura2Show = oData;
        //this.oFactura2Show.fecha = new Date(oData.fecha);
        this.oForm = this.oFormBuilder.group({
          id: [this.oFactura2Show.id],
          fecha: [this.oFactura2Show.fecha, Validators.required],
          iva: [this.oFactura2Show.iva, Validators.required],
          pagado: [this.oFactura2Show.pagado],
          id_usuario: [this.oFactura2Show.usuario.id, Validators.required]
        });
      }, (error: HttpErrorResponse) => {
        this.status = error;
        this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
      })
  };

  save(): void {
    if (this.strOperation == "new") {
      this.oFacturaService
        .newOne(this.oFactura2Send)
        .subscribe((id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }, (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        });
    } else {
      this.oFacturaService
        .updateOne(this.oFactura2Send)
        .subscribe((id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }, (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        });
    }
  };

  onSubmit(): void {
    if (this.oForm) {
      if (this.oForm.valid) {
        this.oFactura2Send = {
          id: this.oForm.value.id,
          fecha: this.oForm.value.fecha,
          iva: this.oForm.value.iva,
          pagado: this.oForm.value.pagado,
          usuario: {
            id: this.oForm.value.id_usuario
          }
        };
        this.save();
      }
    }
  }

  //ajenas

  onFindSelection($event: any) {
    this.oForm.controls['id_usuario'].setValue($event);
    this.oForm.controls['id_usuario'].markAsDirty();
    this.oUsuarioService
      .getOne(this.oForm.controls['id_usuario'].value)
      .subscribe((oUsuario: IUsuario) => {
        if (this.strOperation == "edit") {
          this.oFactura2Show.usuario = oUsuario; //pte!!
        } else {
          this.oFactura2Show = {} as IFactura;
          this.oFactura2Show.usuario = {} as IUsuario;
          this.oFactura2Show.usuario = oUsuario;
        }
      }, err => {
        this.oFactura2Show.usuario.nombre = "ERROR";
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': true });
      });

    return false;
  }

}
