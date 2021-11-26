import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactura, IFactura2Send } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { DateTimeService } from 'src/app/service/datetime.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

declare let $: any;

@Component({
  selector: 'app-edit-factura',
  templateUrl: './edit-factura.component.html',
  styleUrls: ['./edit-factura.component.css']
})
export class EditFacturaComponent implements OnInit {

  oFactura: IFactura = null;
  oFactura2Send: IFactura2Send = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;
  strUsuarioSession: string;

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oFacturaService: FacturaService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    private oDateTimeService: DateTimeService
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
      this.oFactura = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oFactura.id],
        fecha: [this.oFactura.fecha, Validators.required],
        iva: [this.oFactura.iva, Validators.required],
        pagado: [this.oFactura.pagado],
        id_usuario: [this.oFactura.usuario.id, Validators.required]
      });
      $('#fecha').val(this.oFactura.fecha);

    })
  }

  onSubmit(): void {
    if (this.oForm) {
      this.oFactura2Send = {
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
    console.log(this.oFactura2Send);
    this.oFacturaService.Update(this.oFactura2Send).subscribe((result: number) => {
      if (result) {
        this.strResult = "La factura se ha modificado correctamente";
      } else {
        this.strResult = "Error en la modificación de la factura";
      }
      this.openModal();
    })
  }

  goBack(): void {
    this.oLocation.back();
  }

  //modal

  eventsSubject: Subject<void> = new Subject<void>();

  openModal(): void {
    this.eventsSubject.next();
  }

  closeModal(): void {
    this.oRouter.navigate(["/factura/view/" + this.id]);
  }

}