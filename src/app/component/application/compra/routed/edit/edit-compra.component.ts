import { IProducto } from 'src/app/model/producto-interfaces';
import { FacturaService } from '../../../../../service/factura.service';
import { IFactura } from '../../../../../model/factura-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICompra, ICompra2Send } from 'src/app/model/compra-interfaces';
import { CompraService } from 'src/app/service/compra.service';
import { DateTimeService } from 'src/app/service/datetime.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IconService } from 'src/app/service/icon.service';
import { ProductoService } from 'src/app/service/producto.service';

declare let $: any;

@Component({
  selector: 'app-edit-compra',
  templateUrl: './edit-compra.component.html',
  styleUrls: ['./edit-compra.component.css']
})
export class EditCompraComponent implements OnInit {
  strEntity: string = "compra"
  strOperation: string = "edit"
  strTitleSingular: string = "Compra";
  strTitlePlural: string = "Compras";

  oCompra: ICompra = null;
  oCompra2Send: ICompra2Send = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;

  get f() { return this.oForm?.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oCompraService: CompraService,
    private oFacturaService: FacturaService,
    private oProductoService: ProductoService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oLocation: Location,
    private oDateTimeService: DateTimeService,
    public oIconService: IconService

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
    this.oCompraService.getOne(this.id).subscribe((oData: ICompra) => {

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

        this.oCompra2Send = {
          id: this.oForm.value.id,
          cantidad: this.oForm.value.cantidad,
          precio: this.oForm.value.precio,
          fecha: this.oForm.value.fecha.replace("-", "/").replace("-", "/"),
          descuento_usuario: this.oForm.value.descuento_usuario,
          descuento_producto: this.oForm.value.descuento_producto,
          producto: {
            id: this.oForm.value.producto
          },
          factura: null
        }
        console.log(this.oCompra2Send);
        this.update();
      } else {
        this.oCompra2Send = {
          id: this.oForm.value.id,
          cantidad: this.oForm.value.cantidad,
          precio: this.oForm.value.precio,
          fecha: this.oForm.value.fecha.replace("-", "/").replace("-", "/"),
          descuento_usuario: this.oForm.value.descuento_usuario,
          descuento_producto: this.oForm.value.descuento_producto,
          producto: {
            id: this.oForm.value.producto
          },
          factura: {
            id: this.oForm.get("factura")!.value
          }
        }

        console.log(this.oCompra2Send);
        this.update();
      }
    }
  }

  update = (): void => {
    this.oCompraService.updateOne(this.oCompra2Send).subscribe((result: ICompra) => {
      if (result) {
        this.strResult = "La compra se ha modificado correctamente";
      } else {
        this.strResult = "Error en la modificación de la compra";
      }
      this.openPopup();
    })
  }

  goBack(): void {
    this.oLocation.back();
  }

  //modal

  fila: IFactura;
  id_usuario: number = null;
  showingModalFactura: boolean = false;
  showingModalProducto: boolean = false;


  eventsSubjectShowModalFactura: Subject<void> = new Subject<void>();
  eventsSubjectHideModalFactura: Subject<void> = new Subject<void>();

  eventsSubjectShowModalProducto: Subject<void> = new Subject<void>();
  eventsSubjectHideModalProducto: Subject<void> = new Subject<void>();


  openModalFactura(): void {
    this.eventsSubjectShowModalFactura.next();
    this.showingModalFactura = true;
  }

  openModalProducto(): void {
    this.eventsSubjectShowModalProducto.next();
    this.showingModalProducto = true;
  }

  closeModalFactura(): void {
    this.eventsSubjectHideModalFactura.next();
    this.showingModalFactura = false;
  }

  closeModalProducto(): void {
    this.eventsSubjectHideModalProducto.next();
    this.showingModalProducto = false;
  }

  onSelectionFactura($event: any) {
    console.log("edit evento recibido: " + $event)
    this.oForm.controls['factura'].setValue($event);
  }

  onSelectionProducto($event: any) {
    console.log("edit evento recibido: " + $event)
    this.oForm.controls['producto'].setValue($event);
  }

  onChangeFactura($event: any) {

    console.log("--->" + this.oForm.controls['factura'].value);
    this.oForm.controls['factura'].markAsDirty();

    //aqui cerrar la ventana emergente 
    if (this.showingModalFactura) {
      this.closeModalFactura();
    }

    //actualizar el usuario
    this.oFacturaService
      .getOne(this.oForm.controls['factura'].value)
      .subscribe((oData: IFactura) => {
        this.oCompra.factura = oData;
        //this.oUsuario = oData;
      });

    return false;
  }

  onChangeProducto($event: any) {

    console.log("--->" + this.oForm.controls['producto'].value);
    this.oForm.controls['producto'].markAsDirty();

    //aqui cerrar la ventana emergente 
    if (this.showingModalProducto) {
      this.closeModalProducto();
    }

    //actualizar el usuario
    this.oProductoService
      .getOne(this.oForm.controls['producto'].value)
      .subscribe((oData: IProducto) => {
        this.oCompra.producto = oData;
        //this.oUsuario = oData;
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
