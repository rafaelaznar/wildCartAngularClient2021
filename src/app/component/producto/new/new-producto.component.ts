import { ITipoProducto } from 'src/app/model/tipoproducto-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateTimeService } from 'src/app/service/datetime.service';
import { ProductoService } from 'src/app/service/producto.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { Iproduct } from 'src/app/model/producto-interfaces';

declare let $: any;


@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {

  oProduct2Send: Iproduct = null;
  id: number = 0;
  oForm: FormGroup = null;
  strResult: string = "";
  oTipoProd: ITipoProducto

  get f() { return this.oForm.controls; }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oProductoService: ProductoService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    private oDateTimeService: DateTimeService
  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      codigo: ['', [Validators.required]],
      nombre: ['', Validators.required],
      existencias: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: [''],
      descuento: [''],
      id_tipoproducto: ['', Validators.required]
    });

  }

  onSubmit(): void {
    if (this.oForm) {
      this.oProduct2Send = {
        id: null,
        codigo: this.oForm.value.codigo,
        nombre: this.oForm.value.nombre,
        existencias: this.oForm.value.existencias,
        precio: this.oForm.value.precio,
        imagen: this.oForm.value.imagen,
        descuento: this.oForm.value.descuento,
        tipoproducto: {
          nombre: null,
          id: this.oForm.value.id_tipoproducto
        }
      }
      this.new();
    }
  }

  new = (): void => {
    this.oProductoService.newOne(this.oProduct2Send).subscribe((oProduct: Iproduct) => {
      console.log("dentro de new");
      if (oProduct.id) {
        this.id = oProduct.id;
        console.log("El post se ha creado correctamente");
        this.strResult = "El post se ha creado correctamente";
      } else {
        this.strResult = "Error en la creación del registro";
      }
      this.openModal();
    })
  }

  goBack(): void {
    this.oLocation.back();
  }

  eventsSubject: Subject<void> = new Subject<void>();


  openModal(): void {
    this.eventsSubject.next();
  }

  closeModal() {
    this.oRouter.navigate(["/producto/plist"]);
  }

}