import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateTimeService } from 'src/app/service/datetime.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IFactura, IFactura2Send } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';

declare let $: any;
@Component({
  selector: 'app-new-factura',
  templateUrl: './new-factura.component.html',
  styleUrls: ['./new-factura.component.css']
})
export class NewFacturaComponent implements OnInit {

  oFactura2Send: IFactura2Send = null;
  id: number = 0;
  oForm: FormGroup = null;
  strResult: string = "";

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oFacturaService: FacturaService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    private oDateTimeService: DateTimeService
  ) { if (this.oActivatedRoute.snapshot.data.message) {
    const strUsuarioSession: string = this.oActivatedRoute.snapshot.data.message;
    localStorage.setItem("user", strUsuarioSession);
  } else {
    localStorage.clear();
    oRouter.navigate(['/home']);
  }

  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      fecha: ['', Validators.required],
      iva: ['', Validators.required],
      pagado: [''],
      id_usuario: ['', Validators.required],
    });
    $('#fecha').datetimepicker({
      defaultDate: "+1w",
      numberOfMonths: 1,
      dateFormat: 'dd-mm-yy',
      timeFormat: 'hh:mm',
      showAnim: "fold",
      onClose: (dateText: string, inst: any) => {
        this.oForm.controls['fecha'].setValue(dateText);
        this.oForm.controls['fecha'].markAsDirty();
      }
    });
  }

  onSubmit(): void {
    if (this.oForm) {
      this.oFactura2Send = {
        id: null,
        fecha: this.oDateTimeService.getStrFecha2Send(this.oForm.value.fecha),
        iva: this.oForm.value.iva,
        pagado: this.oForm.value.pagado,
        id_usuario: this.oForm.value.id_usuario,
      }
      this.new();
    }
  }

  new = (): void => {
    this.oFacturaService.Create(this.oFactura2Send).subscribe((id: number) => {
      if (id) {
        this.id = id;
        this.strResult = "La factura se ha creado correctamente";
      } else {
        this.strResult = "Error en la creación de la factura";
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
    this.oRouter.navigate(["/view/" + this.id]);
  }

}