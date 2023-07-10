import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { ICarrito, ICarrito2Send } from 'src/app/model/carrito-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { ProductoService } from 'src/app/service/producto.service';
import { IProducto } from 'src/app/model/producto-interfaces';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { IResult } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-carrito-form-admin-unrouted',
  templateUrl: './carrito-form-admin-unrouted.component.html',
  styleUrls: ['./carrito-form-admin-unrouted.component.css']
})

export class CarritoFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<IResult>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.cart;
  //
  oData2Show: ICarrito = null;
  oData2Send: ICarrito2Send = null;
  oForm: FormGroup = null;
  status: HttpErrorResponse = null;

  es: any = null;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oCarritoService: CarritoService,
    public oMetadataService: MetadataService,
    private oUsuarioService: UsuarioService,
    private oProductoService: ProductoService,
  ) { }

  ngOnInit(): void {
    if (this.strOperation == "edit") {
      this.get();
    } else {
      this.oForm = this.oFormBuilder.group({
        id: [''],
        cantidad: ['', Validators.required],
        precio: ['', Validators.required],
        id_producto: ['', Validators.required],
        id_usuario: ['', Validators.required]
      });
    }
  }

  get = (): void => {
    this.oCarritoService.getOne(this.id).subscribe({
      next: (oData: ICarrito) => {
        this.oData2Show = oData;
        this.status = null;
        this.oForm = this.oFormBuilder.group({
          id: [this.oData2Show.id],
          cantidad: [this.oData2Show.cantidad, Validators.required],
          precio: [this.oData2Show.precio, Validators.required],
          id_producto: [this.oData2Show.producto.id, Validators.required],
          id_usuario: [this.oData2Show.usuario.id, Validators.required]
        });
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
        this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
      }
    })
  };

  onSubmit(): void {
    if (this.oForm) {
      if (this.oForm.valid) {
        this.oData2Send = {
          id: this.oForm.value.id,
          cantidad: this.oForm.value.cantidad,
          precio: this.oForm.value.precio,
          producto: { id: this.oForm.value.id_producto },
          usuario: { id: this.oForm.value.id_usuario },
        };
        this.save();
      }
    }
  }

  save(): void {
    if (this.strOperation == "new") {
      this.oCarritoService.newOne(this.oData2Send).subscribe({
        next: (id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        },
        error: (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }
      });
    } else {
      this.oCarritoService.updateOne(this.oData2Send).subscribe({
        next: (id: number) => {
          this.status = null;
          this.msg.emit({ id: id, error: null, strEntity: this.strEntity, strOperation: this.strOperation });
        },
        error: (error: HttpErrorResponse) => {
          this.status = error;
          this.msg.emit({ error: error, id: null, strEntity: this.strEntity, strOperation: this.strOperation });
        }
      });
    }
  };

  //ajenas

  onFindSelectionProducto($event: number) {
    this.oForm.controls['id_producto'].setValue($event);
    this.oForm.controls['id_producto'].markAsDirty();
    this.oProductoService.getOne(this.oForm.controls['id_producto'].value).subscribe({
      next: (oProducto: IProducto) => {
        if (this.strOperation == "edit") {
          this.oData2Show.producto = oProducto;
        } else {
          if (!this.oData2Show) {
            this.oData2Show = {} as ICarrito;
          }
          this.oData2Show.producto = {} as IProducto;
          this.oData2Show.producto = oProducto;
        }
      },
      error: (err) => {
        this.oData2Show.producto.nombre = "ERROR";
        this.oForm.controls['id_producto'].setErrors({ 'incorrect': true });
      }
    });

    return false;
  }

  onFindSelectionUsuario($event: number) {
    this.oForm.controls['id_usuario'].setValue($event);
    this.oForm.controls['id_usuario'].markAsDirty();
    this.oUsuarioService.getOne(this.oForm.controls['id_usuario'].value).subscribe({
      next: (oUsuario: IUsuario) => {
        if (this.strOperation == "edit") {
          this.oData2Show.usuario = oUsuario;
        } else {
          if (!this.oData2Show) {
            this.oData2Show = {} as ICarrito;
          }
          this.oData2Show.usuario = {} as IUsuario;
          this.oData2Show.usuario = oUsuario;
        }
      },
      error: (err) => {
        this.oData2Show.usuario.nombre = "ERROR";
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': true });
      }
    });

    return false;
  }

}
