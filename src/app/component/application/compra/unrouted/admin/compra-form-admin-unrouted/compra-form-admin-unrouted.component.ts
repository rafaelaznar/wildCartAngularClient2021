import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MetadataService } from 'src/app/service/metadata.service';
import { ICompra, ICompra2Send } from 'src/app/model/compra-interfaces';
import { CompraService } from 'src/app/service/compra.service';
import { ProductoService } from 'src/app/service/producto.service';
import { FacturaService } from 'src/app/service/factura.service';
import { IProducto } from 'src/app/model/producto-interfaces';
import { IFactura } from 'src/app/model/factura-interfaces';
import { Constants } from 'src/app/constant/constants';
import { HttpErrorResponse } from '@angular/common/http';
import { IResult } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-compra-form-admin-unrouted',
  templateUrl: './compra-form-admin-unrouted.component.html',
  styleUrls: ['./compra-form-admin-unrouted.component.css']
})

export class CompraFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<IResult>();

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.purchase;
  //
  oData2Show: ICompra = null;
  oData2Send: ICompra2Send = null;
  oForm: FormGroup = null;
  status: HttpErrorResponse = null;
  //
  es: any = null;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oCompraService: CompraService,
    public oMetadataService: MetadataService,
    private oFacturaService: FacturaService,
    private oProductoService: ProductoService,
  ) { }

  ngOnInit(): void {

    this.es = Constants.CALENDAR_ES;

    if (this.strOperation == "edit") {
      this.get();
    } else {
      this.oForm = this.oFormBuilder.group({
        id: [''],
        cantidad: ['', Validators.required],
        precio: ['', Validators.required],
        fecha: ['', Validators.required],
        descuento_usuario: ['', Validators.required],
        descuento_producto: ['', Validators.required],
        id_producto: ['', Validators.required],
        id_factura: ['', Validators.required]
      });
    }
  }

  get = (): void => {
    this.oCompraService.getOne(this.id).subscribe({
      next: (oData: ICompra) => {
        this.oData2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oData2Show.id],
          cantidad: [this.oData2Show.cantidad, Validators.required],
          precio: [this.oData2Show.precio, Validators.required],
          fecha: [this.oData2Show.fecha, Validators.required],
          descuento_usuario: [this.oData2Show.descuento_usuario, Validators.required],
          descuento_producto: [this.oData2Show.descuento_producto, Validators.required],
          id_producto: [this.oData2Show.producto.id, Validators.required],
          id_factura: [this.oData2Show.factura.id, Validators.required]
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
          fecha: this.oForm.value.fecha,
          descuento_usuario: this.oForm.value.descuento_usuario,
          descuento_producto: this.oForm.value.descuento_producto,
          producto: {
            id: this.oForm.value.id_producto
          },
          factura: {
            id: this.oForm.value.id_factura
          },
        };
        this.save();
      }
    }
  }

  save(): void {
    if (this.strOperation == "new") {
      this.oCompraService.newOne(this.oData2Send).subscribe({
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
      this.oCompraService.updateOne(this.oData2Send).subscribe({
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
            this.oData2Show = {} as ICompra;
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

  onFindSelectionFactura($event: number) {
    this.oForm.controls['id_factura'].setValue($event);
    this.oForm.controls['id_factura'].markAsDirty();
    this.oFacturaService.getOne(this.oForm.controls['id_factura'].value).subscribe({
      next: (oFactura: IFactura) => {
        if (this.strOperation == "edit") {
          this.oData2Show.factura = oFactura;
        } else {
          if (!this.oData2Show) {
            this.oData2Show = {} as ICompra;
          }
          this.oData2Show.factura = {} as IFactura;
          this.oData2Show.factura = oFactura;
        }
      },
      error: (err) => {
        this.oData2Show.factura.usuario.nombre = "ERROR";
        this.oForm.controls['id_factura'].setErrors({ 'incorrect': true });
      }
    });
    return false;
  }

}
