import { ITipoProducto } from 'src/app/model/tipoproducto-interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { IProducto, IProducto2Send } from 'src/app/model/producto-interfaces';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
declare let $: any;

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css'],
})
export class NewProductoComponent implements OnInit {
  strEntity: string = 'producto';
  strOperation: string = 'new';
  strTitleSingular: string = 'Producto';
  strTitlePlural: string = 'Productos';
  oProduct2Send: IProducto2Send = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;
  oTipoProd: ITipoProducto;
  oUserSession: IUsuario;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oProductoService: ProductoService,
    private oLocation: Location,
    public oIconService: IconService
  ) {
    if (this.oRoute.snapshot.data.message) {
     this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.oUserSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      codigo: ['', [Validators.required]],
      nombre: ['', Validators.required],
      existencias: [''],
      precio: [''],
      imagen: [''],
      descuento: [''],
      tipoproducto: ['', Validators.required],
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
          id: this.oForm.value.tipoproducto,
        },
      };
      this.new();
    }
  }

  new = (): void => {
    this.oProductoService
      .newOne(this.oProduct2Send)
      .subscribe((oProduct: IProducto) => {
        console.log('dentro de new');
        if (oProduct.id) {
          this.id = oProduct.id;
          console.log('El producto se ha creado correctamente');
          this.strResult = 'El producto se ha creado correctamente';
        } else {
          this.strResult = 'Error en la creación del registro';
        }
        this.openModal();
      });
  };

  goBack(): void {
    this.oLocation.back();
  }

  eventsSubject: Subject<void> = new Subject<void>();

  openModal(): void {
    this.eventsSubject.next();
  }

  closeModal() {
    this.oRouter.navigate(['/producto/plist']);
  }
}
