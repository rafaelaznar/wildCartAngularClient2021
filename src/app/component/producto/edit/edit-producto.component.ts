import { Iproduct } from './../../../model/producto-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

declare let $: any;

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  oProduct2Send: Iproduct = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oProductoService: ProductoService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
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

  ngOnInit(): void {

  }

  getOne = (): void => {
    this.oProductoService.get(this.id).subscribe((oData: Iproduct) => {

      this.oForm = this.oFormBuilder.group({
        codigo: [oData.codigo, [Validators.required]],
        nombre: [oData.nombre, Validators.required],
        existencias: [oData.existencias, Validators.required],
        precio: [oData.precio, Validators.required],
        imagen: [oData.imagen],
        descuento: [oData.descuento],
        tipoproducto: [oData.tipoproducto.id, Validators.required]
      });
    })
  }

  onSubmit(): void {
    if (this.oForm) {
      this.oProduct2Send = {
        id: this.id,
        codigo: this.oForm.value.codigo,
        nombre: this.oForm.value.nombre,
        existencias: this.oForm.value.existencias,
        precio: this.oForm.value.precio,
        imagen: this.oForm.value.imagen,
        descuento: this.oForm.value.descuento,
        tipoproducto: { id: this.oForm.value.tipoproducto, nombre: null , productos: this.oForm.value.productos },
      }

      this.update();
    }
  }

  update = (): void => {
    console.log(this.oProduct2Send)
    this.oProductoService.update(this.oProduct2Send).subscribe((result: Iproduct) => {
      if (result) {
        this.strResult = "El post se ha modificado correctamente";
      } else {
        this.strResult = "Error en la modificación del post";
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
    this.oRouter.navigate(["/producto/view/" + this.id]);
  }

}
