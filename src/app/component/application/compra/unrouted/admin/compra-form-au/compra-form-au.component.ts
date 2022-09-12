import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { IconService } from 'src/app/service/icon.service';
import { ICompra, ICompra2Send } from 'src/app/model/compra-interfaces';
import { CompraService } from 'src/app/service/compra.service';
import { Subject } from 'rxjs/internal/Subject';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/service/errorHandler.service';
import { ProductoService } from 'src/app/service/producto.service';
import { FacturaService } from 'src/app/service/factura.service';
import { IProducto } from 'src/app/model/producto-interfaces';
import { IFactura } from 'src/app/model/factura-interfaces';

@Component({
  selector: 'app-compra-form-admin-unrouted',
  templateUrl: './compra-form-au.component.html',
  styleUrls: ['./compra-form-au.component.css']
})

export class CompraFormAdminUnroutedComponent implements OnInit {

  @Input() strOperation: string = null;
  @Input() id: number = null;
  @Output() msg = new EventEmitter<any>();

  oData2Show: ICompra = null;
  oData2Send: ICompra2Send = null;

  strEntity: string = 'compra';
  strTitleSingular: string = 'Compra';
  strATitleSingular: string = 'La compra';

  oForm: UntypedFormGroup = null;
  strResult: string = null;
  strStatus: string = null;

  es: any = {
    firstDayOfWeek: 1,
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    today: 'Hoy',
    clear: 'Borrar',
    dateFormat: 'mm/dd/yyyy',
  };

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: UntypedFormBuilder,
    private oCompraService: CompraService,
    public oIconService: IconService,
    private oRouter: Router,
    private oErrorHandlerService: ErrorHandlerService,
    private oFacturaService: FacturaService,
    private oProductoService: ProductoService,
  ) {
  }

  ngOnInit(): void {

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
    this.oCompraService
      .getOne(this.id)
      .subscribe((oData: ICompra) => {
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
      });
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
      this.oCompraService.newOne(this.oData2Send)
        .subscribe(
          (id: number) => {
            if (id > 0) {
              this.id = id;
              this.strResult = this.strATitleSingular + ' se ha creado correctamente con el id: ' + id;
            } else {
              this.strResult = 'Error en la creación de ' + this.strATitleSingular.toLowerCase();
            }
            this.msg.emit({ strMsg: this.strResult, id: this.id });
          },
          (error) => {
            this.strResult = "Error al guardar " +
              this.strATitleSingular.toLowerCase() + ': status: ' + error.status + " (" + error.error.status + ') ' + error.error.message;
            this.openPopup();
          });
    } else {
      this.oCompraService
        .updateOne(this.oData2Send)
        .subscribe((id: number) => {
          if (id > 0) {
            this.id = id;
            this.strResult = this.strATitleSingular + ' con id=' + id + ' se ha modificado correctamente';
          } else {
            this.strResult = 'Error en la modificación de ' + this.strATitleSingular.toLowerCase();
          }
          this.msg.emit({ strMsg: this.strResult, id: this.id });
        },
          (error) => {
            this.strStatus = error.status;
            this.strResult = this.oErrorHandlerService.componentHandleError(error);
            this.openPopup();
          });
    }
  };

  //ajenas

  //ajenas

  onFindSelectionProducto($event: any) {
    this.oForm.controls['id_producto'].setValue($event);
    this.oForm.controls['id_producto'].markAsDirty();
    this.oProductoService
      .getOne(this.oForm.controls['id_producto'].value)
      .subscribe((oProducto: IProducto) => {
        if (this.strOperation == "edit") {
          this.oData2Show.producto = oProducto;
        } else {
          if (!this.oData2Show) {
            this.oData2Show = {} as ICompra;
          }
          this.oData2Show.producto = {} as IProducto;
          this.oData2Show.producto = oProducto;
        }
      }, err => {
        this.oData2Show.producto.nombre = "ERROR";
        this.oForm.controls['id_producto'].setErrors({ 'incorrect': true });
      });

    return false;
  }

  onFindSelectionFactura($event: any) {
    this.oForm.controls['id_factura'].setValue($event);
    this.oForm.controls['id_factura'].markAsDirty();
    this.oFacturaService
      .getOne(this.oForm.controls['id_factura'].value)
      .subscribe((oFactura: IFactura) => {
        if (this.strOperation == "edit") {
          this.oData2Show.factura = oFactura;
        } else {
          if (!this.oData2Show) {
            this.oData2Show = {} as ICompra;
          }
          this.oData2Show.factura = {} as IFactura;
          this.oData2Show.factura = oFactura;
        }
      }, err => {
        this.oData2Show.factura.usuario.nombre = "ERROR";
        this.oForm.controls['id_factura'].setErrors({ 'incorrect': true });
      });

    return false;
  }


  //popup

  eventsSubjectShowPopup: Subject<void> = new Subject<void>();

  openPopup(): void {
    this.eventsSubjectShowPopup.next();
  }

  onClosePopup(): void {
    if (this.strStatus == "401") {
      this.oRouter.navigate(['/login']);
    }
  }


}
