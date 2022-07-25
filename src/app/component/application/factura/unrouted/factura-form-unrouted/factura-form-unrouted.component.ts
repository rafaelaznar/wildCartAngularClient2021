import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { IconService } from 'src/app/service/icon.service';
import { IFactura, IFactura2Send } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { Subject } from 'rxjs/internal/Subject';
import { ErrorHandlerService } from 'src/app/service/errorHandler.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-factura-form-unrouted',
  templateUrl: './factura-form-unrouted.component.html',
  styleUrls: ['./factura-form-unrouted.component.css']
})
export class FacturaFormUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  strEntity: string = "factura"
  //strOperation: string = "newedit" //new or edit depends on the url
  strTitleSingular: string = "Factura";
  strATitleSingular: string = "La factura";
  strTitlePlural: string = "Facturas";

  oFactura2Send: IFactura2Send = null;
  oFactura2Show: IFactura = null;

  oForm: UntypedFormGroup = null;

  strStatus: string = null;
  strResult: string = null;

  es: any;


  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oFacturaService: FacturaService,
    public oIconService: IconService,
    private oRouter: Router,
    private oErrorHandlerService: ErrorHandlerService,
    private oUsuarioService: UsuarioService,
  ) {
  }

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
    
        this.oFactura2Show.fecha = new Date(oData.fecha);

        this.oForm = this.oFormBuilder.group({
          id: [this.oFactura2Show.id],
          fecha: [this.oFactura2Show.fecha, Validators.required],
          iva: [this.oFactura2Show.iva, Validators.required],
          pagado: [this.oFactura2Show.pagado],
          id_usuario: [this.oFactura2Show.usuario.id, Validators.required]
        });
      }, error => console.log('error', error.error));
  };

  save(): void {
    if (this.strOperation == "new") {
      this.oFacturaService
        .newOne(this.oFactura2Send)
        .subscribe(
          (id: number) => {
            if (id) {
              this.id = id;
              this.strResult = this.strATitleSingular + ' se ha creado correctamente con el id: ' + id;
            } else {
              this.strResult = 'Error en la creación de ' + this.strATitleSingular.toLowerCase();
            }
            this.msg.emit({ strMsg: this.strResult, id: this.id });
          },
          (error) => {
            this.strResult = "Error al guardar " +
              this.strATitleSingular.toLowerCase() + ': status: ' + error.status + " (" + error.error.status + ') ' + error.error.message;
            this.openPopup();
          });
    } else {
      this.oFacturaService
        .updateOne(this.oFactura2Send)
        .subscribe((id: number) => {
          if (id) {
            this.id = id;
            this.strResult = this.strATitleSingular + ' con id=' + id + ' se ha modificado correctamente';
          } else {
            this.strResult = 'Error en la modificación de ' + this.strATitleSingular.toLowerCase();
          }
          this.msg.emit({ strMsg: this.strResult, id: this.id });
        },
          (error) => {
            this.strStatus = error.status;
            this.strResult = this.oErrorHandlerService.componentHandleError(error);
            this.openPopup();
          });
    }
  };

  onSubmit(): void {
    if (this.oForm) {
      if (this.oForm.valid) {

        //console.log(this.oForm.value.fecha);

        //let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(this.oForm.value.fecha);
        //let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(this.oForm.value.fecha);
        //let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.oForm.value.fecha);



        this.oFactura2Send = {
          id: this.oForm.value.id,
          //fecha: da + "/" + mo + "/" + ye + " " + "00:00",
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
        this.oForm.controls['id_tipousuario'].setErrors({ 'incorrect': true });
      });

    return false;
  }

  //popup

  eventsSubjectShowPopup: Subject<void> = new Subject<void>();

  openPopup(): void {
    this.eventsSubjectShowPopup.next();
  }

  onClosePopup(): void {
    if (this.strStatus == "401") {
      this.oRouter.navigate(['/login']);
    }
  }

}
