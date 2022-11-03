import { Component, OnInit } from '@angular/core';
import { formatDate, Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { IReport } from 'src/app/model/model-interfaces';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IProducto } from 'src/app/model/producto-interfaces';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/model/constants';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  strEntity: string = Constants.ENTITIES.report;
  strOperation: string = Constants.OPERATIONS.print;
  oClient: IUsuario;
  oProduct: IProducto;
  oForm: UntypedFormGroup = null;
  currentDate = new Date();
  strUsuarioSession: string;
  dateRangeOK: boolean = false;
  errorDateRange: boolean = false;

  get f() {
    return this.oForm.controls;
  }

  aReports: IReport[] = [
    { nombre: "N Productos con más descuento", codigo: "i01", fechas: false, usuario: false, producto: false },
    { nombre: "N Productos con menos descuento", codigo: "i02", fechas: false, usuario: false, producto: false },

    { nombre: "N Clientes con más descuento", codigo: "i03", fechas: false, usuario: false, producto: false },
    { nombre: "N Clientes con menos descuento", codigo: "i04", fechas: false, usuario: false, producto: false },

    { nombre: "N Productos con más existencias", codigo: "i05", fechas: false, usuario: false, producto: false },
    { nombre: "N Productos con menos existencias", codigo: "i06", fechas: false, usuario: false, producto: false },

    { nombre: "N Productos más vendidos entre dos fechas", codigo: "i07", fechas: true, usuario: false, producto: false },
    { nombre: "N Productos menos vendidos entre dos fechas", codigo: "i08", fechas: true, usuario: false, producto: false },

    { nombre: "N Tipos de producto más vendidos entre dos fechas", codigo: "i09", fechas: true, usuario: false, producto: false },
    { nombre: "N Tipos de producto menos vendidos entre dos fechas", codigo: "i10", fechas: true, usuario: false, producto: false },

    { nombre: "N Clientes que más compran entre dos fechas", codigo: "i11", fechas: true, usuario: false, producto: false },
    { nombre: "N Clientes que menos compran entre dos fechas", codigo: "i12", fechas: true, usuario: false, producto: false },

    { nombre: "N Facturas de más importe entre dos fechas", codigo: "i13", fechas: true, usuario: false, producto: false },
    { nombre: "N Facturas de menos importe entre dos fechas", codigo: "i14", fechas: true, usuario: false, producto: false },

    { nombre: "N Facturas de un cliente entre dos fechas", codigo: "i15", fechas: true, usuario: true, producto: false },

    { nombre: "N Facturas de un producto entre dos fechas", codigo: "i16", fechas: true, usuario: false, producto: true },

    { nombre: "N Productos que más compra un cliente entre dos fechas", codigo: "i17", fechas: true, usuario: true, producto: false },

    { nombre: "N Clientes que más compran un producto entre dos fechas", codigo: "i18", fechas: true, usuario: false, producto: true },

    { nombre: "N Productos que más compra un cliente entre dos fechas", codigo: "i19", fechas: true, usuario: true, producto: false },

    { nombre: "N Clientes que más compran un producto entre dos fechas", codigo: "i20", fechas: true, usuario: false, producto: true },

  ];

  constructor(
    private oLocation: Location,
    public oMetadataService: MetadataService,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: UntypedFormBuilder,
    private oProductoService: ProductoService,
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
  }

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

  ngOnInit() {
    console.log(formatDate(this.currentDate, 'dd-MM-yyyy', 'es'));
    this.oForm = this.oFormBuilder.group({
      cantidad: ['', [Validators.required]],
      id_usuario: ['', [Validators.required, Validators.maxLength(1)]],
      id_producto: ['', [Validators.required, Validators.maxLength(1)]],
      fecha_inicio: ['', Validators.required],
      fecha_fin: [this.currentDate, Validators.required],
    });
    this.onChanges();
  }

  goBack() {
    this.oLocation.back();
  }

  print(codigo: string) {    
    this.openPopup('Imprimiendo el informe ' + codigo);
  }


  //ajenas

  onProductFindSelection($event: number) {
    this.oForm.controls['id_producto'].setValue($event);
    this.oForm.controls['id_producto'].markAsDirty();
    //this.oForm.controls['id_producto'].markAsTouched();
    this.oProductoService
      .getOne(this.oForm.controls['id_producto'].value)
      .subscribe((oData: IProducto) => {
        this.oProduct = oData;
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': false });
      }, err => {
        this.oProduct = null;
        this.oForm.controls['id_producto'].setErrors({ 'incorrect': true });
      });

    return false;
  }

  onClientFindSelection($event: number) {
    this.oForm.controls['id_usuario'].setValue($event);
    this.oForm.controls['id_usuario'].markAsDirty();
    //this.oForm.controls['id_usuario'].markAsTouched();
    this.oUsuarioService
      .getOne(this.oForm.controls['id_usuario'].value)
      .subscribe((oData: IUsuario) => {
        this.oClient = oData;
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': false });
      }, err => {
        console.log("reports", err);
        this.oClient = null;
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': true });
      });
    return false;
  }



  onChanges(): void {
    //console.log("onChanges", this.oForm);
    this.oForm.valueChanges.subscribe(val => {

      if (Object.prototype.toString.call(this.oForm.value.fecha_inicio) === "[object Date]" && !isNaN(this.oForm.value.fecha_inicio)) {
        if (Object.prototype.toString.call(this.oForm.value.fecha_fin) === "[object Date]" && !isNaN(this.oForm.value.fecha_inicio)) {
          const ini = new Date(this.oForm.value.fecha_inicio);
          const fin = new Date(this.oForm.value.fecha_fin);
          if (ini <= fin) {
            this.dateRangeOK = true;
            this.errorDateRange = false;
          } else {
            this.dateRangeOK = false;
            this.errorDateRange = true;
          }
        } else {
          this.dateRangeOK = false;
        }
      } else {
        this.dateRangeOK = false;
      }
      //console.log("onChanges fechas " + this.dateRangeOK);

    });
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();
  strResult = "";

  openPopup(str:string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {    
  }


}
