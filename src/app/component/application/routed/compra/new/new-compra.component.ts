import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateTimeService } from 'src/app/service/datetime.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { ICompra, ICompraToSend } from 'src/app/model/compra-interfaces';
import { CompraService } from 'src/app/service/compra.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { FacturaService } from 'src/app/service/factura.service';
import { IFactura } from 'src/app/model/factura-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { IProducto } from 'src/app/model/producto-interfaces';

declare let $: any;
@Component({
  selector: 'app-new-compra',
  templateUrl: './new-compra.component.html',
  styleUrls: ['./new-compra.component.css']
})
export class NewCompraComponent implements OnInit {

  strEntity: string = "compra"
  strOperation: string = "new"
  strTitleSingular: string = "Compra";
  strTitlePlural: string = "Compra";
  oCompra: ICompraToSend = null;
  id: ICompra = null;
  oForm: FormGroup = null;
  strResult: string = "";
  oUserSession: IUsuario;

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oCompraService: CompraService,
    private oActivatedRoute: ActivatedRoute,
    private oFacturaService: FacturaService,
    private oProductoService: ProductoService,
    private oRoute: ActivatedRoute,
    private oLocation: Location,
    private oDateTimeService: DateTimeService,
    public oIconService: IconService
  ) {

    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
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
      dateFormat: 'dd/mm/yy',
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

      if (this.oForm.get("factura")?.value == "") {

        this.oCompra = {
          id: null,
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
        console.log(this.oCompra);
        this.new();

      } else {
        console.log(this.oForm.value.fecha);
        this.oCompra = {
          id: null,
          cantidad: this.oForm.value.cantidad,
          precio: this.oForm.value.precio,
          fecha: this.oForm.value.fecha.replace("-", "/").replace("-", "/"),
          descuento_usuario: this.oForm.value.descuento_usuario,
          descuento_producto: this.oForm.value.descuento_producto,
          producto: {
            id: this.oForm.value.producto,
          },
          factura: {
            id: this.oForm.get("factura")?.value,
          }
        }
        console.log(this.oCompra);
        this.new();
      }
    }
  }

  new = (): void => {
    this.oCompraService.new(this.oCompra).subscribe((id: any) => {
      if (id) {
        this.id = JSON.parse(JSON.stringify(id));

        this.strResult = "La compra se ha creado correctamente";
      } else {
        this.strResult = "Error en la creación de la compra";
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

  onCloseModal(): void {
    //this.oRouter.navigate(['factura/view/' + this.id]);
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
      .get(this.oForm.controls['producto'].value)
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
