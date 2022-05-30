import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { ICarrito, ICarrito2Send } from 'src/app/model/carrito-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { ProductoService } from 'src/app/service/producto.service';
import { IProducto } from 'src/app/model/producto-interfaces';

declare let $: any;

@Component({
  selector: 'app-new-carrito',
  templateUrl: './new-carrito.component.html',
  styleUrls: ['./new-carrito.component.css'],
})

export class NewCarritoComponent implements OnInit {
  strEntity: string = 'carrito';
  strOperation: string = 'new';
  strTitleSingular: string = 'Carrito';
  strTitlePlural: string = 'Carritos';
  oCarrito2Send: ICarrito2Send = null;
  oCarrito: ICarrito = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;
  oUserSession: IUsuario;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oCarritoService: CarritoService,
    private oLocation: Location,
    public oIconService: IconService,
    private oProductoService: ProductoService,

  ) {
    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem(
        'user',
        JSON.stringify(this.oRoute.snapshot.data.message)
      );
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      cantidad: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      producto: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.oForm) {
      this.oCarrito2Send = {
        id: this.oForm.value.id,
        cantidad: this.oForm.value.cantidad,
        precio: this.oForm.value.precio,
        producto: this.oForm.value.producto,
        usuario: this.oForm.value.usuario,
      };
      this.new();
    }
  }

  new = (): void => {
    this.oCarritoService
      .newOne(this.oCarrito2Send)
      .subscribe((oTipoProducto: ICarrito) => {
        if (oTipoProducto.id) {
          this.id = oTipoProducto.id;
          this.strResult = this.strTitleSingular + ' creado correctamente con id=' + oTipoProducto.id;
        } else {
          this.strResult = this.strTitleSingular + ': error en la creación del registro';
        }
        this.openPopup();
      });
  };

  goBack(): void {
    this.oLocation.back();
  }

  //modal
  showingModalProducto: boolean = false;

  eventsSubjectShowModalProducto: Subject<void> = new Subject<void>();
  eventsSubjectHideModalProducto: Subject<void> = new Subject<void>();

  openModalProducto(): void {
    this.eventsSubjectShowModalProducto.next();
    this.showingModalProducto = true;
  }

  closeModalProducto(): void {
    this.eventsSubjectHideModalProducto.next();
    this.showingModalProducto = false;
  }

  onSelectionProducto($event: any) {
    console.log("edit evento recibido: " + $event)
    this.oForm.controls['producto'].setValue($event);
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
        this.oCarrito.producto = oData;
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
