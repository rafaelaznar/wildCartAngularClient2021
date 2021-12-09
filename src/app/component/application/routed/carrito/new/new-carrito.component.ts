import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  oCarritoToSend: ICarritoToSend = null;
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
    public oIconService: IconService
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
      this.oCarritoToSend = {
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
      .newOne(this.oCarritoToSend)
      .subscribe((oTipoProducto: ICarritoPlist) => {
        if (oTipoProducto.id) {
          this.id = oTipoProducto.id;
          this.strResult =
            this.strTitleSingular +
            ' creado correctamente con id=' +
            oTipoProducto.id;
        } else {
          this.strResult =
            this.strTitleSingular + ': error en la creación del registro';
        }
        this.openPopup();
      });
  };

  goBack(): void {
    this.oLocation.back();
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
