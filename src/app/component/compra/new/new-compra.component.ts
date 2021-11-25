import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateTimeService } from 'src/app/service/datetime.service';
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
  id: any;
  oForm: FormGroup = null;
  strResult: string = "";

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oCompraService: CompraService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,  
    private oLocation: Location,
    private oDateTimeService: DateTimeService
  ) { 

    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string = this.oActivatedRoute.snapshot.data.message.login;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.mesaage));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      fecha: ['', Validators.required],
      descuento_usuario: ['', Validators.required],
      descuento_producto: ['', Validators.required],
      producto: ['', Validators.required],
      factura: ['']
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

      if(this.oForm.get("factura")?.value==""){

        this.oCompra = {
          id: null,
          cantidad: this.oForm.value.cantidad,
          precio: this.oForm.value.precio,        
          fecha: this.oForm.value.fecha,
          descuento_usuario: this.oForm.value.descuento_usuario,
          descuento_producto: this.oForm.value.descuento_producto,
          producto: {
            id: this.oForm.value.producto
          },
          factura: null
        }
        console.log(this.oCompra);
        this.new();

      } else {
      this.oCompra = {
        id: null,
        cantidad: this.oForm.value.cantidad,
        precio: this.oForm.value.precio,        
        fecha: this.oForm.value.fecha,
        descuento_usuario: this.oForm.value.descuento_usuario,
        descuento_producto: this.oForm.value.descuento_producto,
        producto: {
          id: this.oForm.value.producto
        },
        factura: {
          id: this.oForm.get("factura")?.value
        }
      }
      console.log(this.oCompra);
      this.new();
    }
    }
  }

  new = ():void => {
    this.oCompraService.new(this.oCompra).subscribe((id: any) => {
      if (id) {
        this.id = id;
        console.log(this.id);

        this.strResult = "La compra se ha creado correctamente";
      } else {
        this.strResult = "Error en la creación de la compra";
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
    this.oRouter.navigate(["/compra/view/" + this.id.id]);
  }

}
