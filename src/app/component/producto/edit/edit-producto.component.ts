import { IProducto, IProducto2Send } from './../../../model/producto-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

declare let $: any;

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {


  strEntity: string = "producto"
  strOperation: string = "edit"
  strTitleSingular: string = "Producto";
  strTitlePlural: string = "Productos";
  oProducto2Send: IProducto2Send = null;
  oProducto2Show: IProducto = null;
  oForm: FormGroup = null;
  id: number = null;
  strResult: string = null;
  oUserSession: IUsuario;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oProductoService: ProductoService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    private oRoute: ActivatedRoute,
    public oIconService: IconService  
  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.getOne();

  }

  ngOnInit(): void { }

  getOne = (): void => {
    this.oProductoService
      .get(this.id)
      .subscribe((oData: IProducto) => {
        this.oProducto2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oProducto2Show.id],
          codigo:[
            this.oProducto2Show.codigo,
            [Validators.required],
          ],
          nombre: [
            this.oProducto2Show.nombre,
            [Validators.required, Validators.minLength(5)],
          ],
          existencias: this.oProducto2Show.existencias,
          precio: this.oProducto2Show.precio,
          imagen: this.oProducto2Show.imagen,
          descuento: this.oProducto2Show.descuento,
          tipoproducto:[
            this.oProducto2Show.tipoproducto.id,
            [Validators.required],
          ],
        });
      });
  };

  onSubmit(): void {
    if (this.oForm) {
      this.oProducto2Send = {
        id: this.id,
        codigo: this.oForm.value.codigo,
        nombre: this.oForm.value.nombre,
        existencias: this.oForm.value.existencias,
        precio: this.oForm.value.precio,
        imagen: this.oForm.value.imagen,
        descuento: this.oForm.value.descuento,
        tipoproducto: { id: this.oForm.value.tipoproducto },
      }
      console.log(this.oProducto2Send)
      this.update();
    }
  }

  update = (): void => {
    this.oProductoService
      .update(this.oProducto2Send)
      .subscribe((oProducto: IProducto) => {
        if (oProducto.id) {
          this.strResult = this.strTitleSingular + ' modificado correctamente';
        } else {
          this.strResult = this.strTitleSingular + ': error en la modificación del registro';
        }
        this.openModal();
      });
  };


  goBack(): void {
    this.oLocation.back();
  }

  //modal

  eventsSubject: Subject<void> = new Subject<void>();

  openModal(): void {
    this.eventsSubject.next();
  }

  closeModal(): void {
    this.oRouter.navigate(["/producto/view/" + this.id]);
  }

}
