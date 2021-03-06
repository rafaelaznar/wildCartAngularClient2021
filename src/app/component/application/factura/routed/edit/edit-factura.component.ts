import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactura, IFactura2Send } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { DateTimeService } from 'src/app/service/datetime.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IconService } from 'src/app/service/icon.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let $: any;

@Component({
  selector: 'app-edit-factura',
  templateUrl: './edit-factura.component.html',
  styleUrls: ['./edit-factura.component.css']
})
export class EditFacturaComponent implements OnInit {

  oData2Show: IFactura = null;
  oData2Send: IFactura2Send = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;
  strUsuarioSession: string;
  strEntity: string = "factura"
  strOperation: string = "edit"
  strTitleSingular: string = "Factura";
  strTitlePlural: string = "Facturas";
  strATitleSingular: string = 'La factura';
  strATitlePlural: string = 'Las facturas';

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oFacturaService: FacturaService,
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    private oDateTimeService: DateTimeService,
    public oIconService: IconService

  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.get();

  }

  ngOnInit(): void {

    $('#fecha').datetimepicker({
      defaultDate: "+1w",
      numberOfMonths: 1,
      dateFormat: 'dd/mm/yy',
      timeFormat: 'hh:mm',
      showAnim: "fold",
      onClose: (dateText: string, inst: any) => {
        this.oForm.controls['fecha'].setValue(dateText);
        this.oForm.controls['fecha'].markAsDirty();
      }
    });

  }

  get = (): void => {
    this.oFacturaService.getOne(this.id).subscribe((oData: IFactura) => {
      // console.log(oData);
      this.oData2Show = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oData2Show.id],
        fecha: [this.oData2Show.fecha, Validators.required],
        iva: [this.oData2Show.iva, Validators.required],
        pagado: [this.oData2Show.pagado],
        id_usuario: [this.oData2Show.usuario.id, Validators.required]
      });
      $('#fecha').val(this.oData2Show.fecha);

    })
  }

  onSubmit(): void {
    if (this.oForm) {
      this.oData2Send = {
        id: this.oForm.value.id,
        fecha: this.oForm.value.fecha,
        iva: this.oForm.value.iva,
        pagado: this.oForm.value.pagado,
        usuario: {
          id: this.oForm.value.id_usuario
        }
      }
      this.update();
    }
  }

  update = (): void => {
    console.log(this.oData2Send);
    this.oFacturaService.updateOne(this.oData2Send).subscribe((oData: IFactura) => {
      if (oData) {
        this.strResult = this.strATitleSingular + ' con id=' + oData.id + ' se ha modificado correctamente';
      } else {
        this.strResult = 'Error en la modificaci??n de ' + this.strATitleSingular.toLowerCase();
      }
      this.openPopup();
    })
  }

  goBack(): void {
    this.oLocation.back();
  }

  //ajenas 
  onFindSelection($event: any) {
    this.oForm.controls['id_usuario'].setValue($event);
    this.oForm.controls['id_usuario'].markAsDirty();
    this.oUsuarioService
      .getOne(this.oForm.controls['id_usuario'].value)
      .subscribe((oData: IUsuario) => {
        if (this.strOperation == "edit") {
        this.oData2Show.usuario = oData;    
      } else {
        this.oData2Show={} as IFactura;
        this.oData2Show.usuario = {} as IUsuario;; 
        this.oData2Show.usuario = oData;   
      }
      }, err => {
        this.oData2Show.usuario.nombre = "ERROR";
        this.oData2Show.usuario.apellido1 = "";
        this.oData2Show.usuario.apellido2 = "";
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': true });
      });

    return false;
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