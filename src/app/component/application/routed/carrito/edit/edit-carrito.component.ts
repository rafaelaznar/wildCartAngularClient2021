import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import {
  ICarritoPlist,
  ICarritoToSend,
} from 'src/app/model/carrito-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { ProductoService } from 'src/app/service/producto.service';
import { ICompra } from 'src/app/model/compra-interfaces';
import { IProducto } from 'src/app/model/producto-interfaces';

declare let $: any;

@Component({
  selector: 'app-edit-carrito',
  templateUrl: './edit-carrito.component.html',
  styleUrls: ['./edit-carrito.component.css'],
})
export class EditCarritoComponent implements OnInit {
  strEntity: string = 'carrito';
  strOperation: string = 'edit';
  strTitleSingular: string = 'Carrito';
  strTitlePlural: string = 'Carritos';
  oCarrito2Send: ICarritoToSend = null;
  oCarritoPlist: ICarritoPlist = null;
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
    private oActivatedRoute: ActivatedRoute,
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

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.getOne();
  }

  ngOnInit(): void { }

  getOne = (): void => {
    this.oCarritoService.getOne(this.id).subscribe((oData: ICarritoPlist) => {
      this.oCarritoPlist = oData;
      this.oForm = this.oFormBuilder.group({
        id: [this.oCarritoPlist.id],
        cantidad: [this.oCarritoPlist.cantidad, [Validators.required]],
        precio: [this.oCarritoPlist.precio, [Validators.required]],
        producto: [this.oCarritoPlist.producto.id, [Validators.required]],
        usuario: [this.oCarritoPlist.usuario.id, [Validators.required]],
      });
    });
  };

  onSubmit(): void {
    if (this.oForm) {
      this.oCarrito2Send = {
        id: this.oForm.value.id,
        cantidad: this.oForm.value.cantidad,
        precio: this.oForm.value.precio,
        producto: this.oForm.value.producto,
        usuario: this.oForm.value.usuario,
      };
      this.update();
    }
  }

  update = (): void => {
    this.oCarritoService
      .updateOne(this.oCarrito2Send)
      .subscribe((oCarritoPlist: ICarritoPlist) => {
        if (oCarritoPlist.id) {
          this.strResult = this.strTitleSingular + ' modificado correctamente';
        } else {
          this.strResult =
            this.strTitleSingular + ': error en la modificación del registro';
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
      .get(this.oForm.controls['producto'].value)
      .subscribe((oData: IProducto) => {
        this.oCarritoPlist.producto = oData;
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
