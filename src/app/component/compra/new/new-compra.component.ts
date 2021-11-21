import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateTimeService } from 'src/app/service/datetime.service';
import { PostService } from 'src/app/service/post.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { ICompra, ICompraToSend } from 'src/app/model/compra-interfaces';
import { CompraService } from 'src/app/service/compra.service';

declare let $: any;
@Component({
  selector: 'app-new-compra',
  templateUrl: './new-compra.component.html',
  styleUrls: ['./new-compra.component.css']
})
export class NewCompraComponent implements OnInit {

  oCompra: ICompraToSend = null;  
  id: number = 0;
  oForm: FormGroup = null;
  strResult: string = "";

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oCompraService: CompraService,
    private oActivatedRoute: ActivatedRoute,  
    private oLocation: Location,
    private oDateTimeService: DateTimeService
  ) { 

  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      fecha: ['', Validators.required],
      descuento_usuario: ['', Validators.required],
      descuento_producto: ['', Validators.required],
      id_producto: ['', Validators.required],
      id_factura: ['', Validators.required]
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
      this.oCompra = {
        id: null,
        cantidad: this.oForm.value.cantidad,
        precio: this.oForm.value.precio,        
        fecha: this.oDateTimeService.getStrFecha2Send(this.oForm.value.fecha),
        descuento_usuario: this.oForm.value.descuento_usuario,
        descuento_producto: this.oForm.value.descuento_producto,
        id_producto: this.oForm.value.id_producto,
        id_factura: this.oForm.value.id_factura
      }
      this.new();
    }
  }

  new = ():void => {
    this.oCompraService.new(this.oCompra).subscribe((id: number) => {
      if (id) {
        this.id = id;
        this.strResult = "El post se ha creado correctamente";
      } else {
        this.strResult = "Error en la creación del registro";
      }
      this.openModal();
    })
  }

  goBack():void {
    this.oLocation.back();
  }

  //modal

  eventsSubject: Subject<void> = new Subject<void>();

  openModal():void {
    this.eventsSubject.next();
  }

  closeModal():void {
    this.oRouter.navigate(["/view/" + this.id]);
  }

}
