import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICompra, ICompraToSend } from 'src/app/model/compra-interfaces';
import { CompraService } from 'src/app/service/compra.service';
import { DateTimeService } from 'src/app/service/datetime.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

declare let $: any;

@Component({
  selector: 'app-edit-compra',
  templateUrl: './edit-compra.component.html',
  styleUrls: ['./edit-compra.component.css']
})
export class EditCompraComponent implements OnInit {

  oCompra: ICompra = null;
  oCompraToSend: ICompraToSend = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;

  get f() { return this.oForm?.controls; }

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
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
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
    this.oCompraService.get(this.id).subscribe((oData: ICompra) => {

      this.oCompra = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oCompra.id],
        cantidad: [this.oCompra.cantidad, Validators.required],
        precio: [this.oCompra.precio, Validators.required],
        fecha: [this.oCompra.fecha, Validators.required],
        descuento_usuario: [this.oCompra.descuento_usuario, Validators.required],
        descuento_producto: [this.oCompra.descuento_producto, Validators.required],
        producto: [this.oCompra.producto.id, Validators.required],
        factura: [this.oCompra.factura?.id]
      });
    })
  }

  onSubmit(): void {
    if (this.oForm) {
      if (this.oForm.get("factura")?.value == null) {

        this.oCompraToSend = {
          id: this.oForm.value.id,
          cantidad: this.oForm.value.cantidad,
          precio: this.oForm.value.precio,
          fecha: this.oForm.value.fecha.replace("-", "/").replace("-", "/"),
          descuento_usuario: this.oForm.value.descuento_usuario,
          descuento_producto: this.oForm.value.descuento_producto,
          producto: {
            id: this.oForm.value.producto,
            codigo: null,
            nombre: null,
            existencias: null,
            precio: null,
            imagen: null,
            descuento: null,
            tipoproducto: null
          },
          factura: null
        }
        console.log(this.oCompraToSend);
        this.update();
      } else {
        this.oCompraToSend = {
          id: this.oForm.value.id,
          cantidad: this.oForm.value.cantidad,
          precio: this.oForm.value.precio,
          fecha: this.oForm.value.fecha.replace("-", "/").replace("-", "/"),
          descuento_usuario: this.oForm.value.descuento_usuario,
          descuento_producto: this.oForm.value.descuento_producto,
          producto: {
            id: this.oForm.value.producto,
            codigo: null,
            nombre: null,
            existencias: null,
            precio: null,
            imagen: null,
            descuento: null,
            tipoproducto: null
          },

          factura: {
            totalElements: null,
            id: this.oForm.get("factura")!.value,
            iva: null,
            usuario: null,
            fecha: null,
            pagado: null
          }
        }

        console.log(this.oCompraToSend);
        this.update();
      }
    }
  }

  update = (): void => {
    this.oCompraService.update(this.oCompraToSend).subscribe((result: number) => {
      if (result) {
        this.strResult = "La compra se ha modificado correctamente";
      } else {
        this.strResult = "Error en la modificación de la compra";
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
    this.oRouter.navigate(["/compra/view/" + this.id]);
  }

}
