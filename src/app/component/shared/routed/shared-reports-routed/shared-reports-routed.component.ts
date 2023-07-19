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
import { Router } from '@angular/router';
import { ReportPrintService } from 'src/app/service/reports.print.service';
import { Constants } from 'src/app/constant/constants';
import { SessionService } from 'src/app/service/session.service';
import { CheckSession } from 'src/app/class/check.session.class';

@Component({
  selector: 'app-shared-reports-routed',
  templateUrl: './shared-reports-routed.component.html',
  styleUrls: ['./shared-reports-routed.component.css']
})

export class SharedReportsRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.report;
  strOperation: string = Constants.OPERATIONS.print;
  oClient: IUsuario;
  oProduct: IProducto;
  oForm: UntypedFormGroup = null;
  currentDate = new Date();
  strUsuarioSession: string;
  dateRangeOK: boolean = false;
  errorDateRange: boolean = false;

  constructor(
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: UntypedFormBuilder,
    private oProductoService: ProductoService,
    public oRouter: Router,
    private oReportPrintService: ReportPrintService,
    public oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
  }

  get f() {
    return this.oForm.controls;
  }

  aReports: IReport[] = [
    { nombre: this.oMetadataService.getName('N most discounted products'), codigo: 'i01', fechas: false, usuario: false, producto: false },
    { nombre: this.oMetadataService.getName('N least discounted products'), codigo: 'i02', fechas: false, usuario: false, producto: false },

    { nombre: this.oMetadataService.getName('N most discounted clients'), codigo: 'i03', fechas: false, usuario: false, producto: false },
    { nombre: this.oMetadataService.getName('N least discounted clients'), codigo: 'i04', fechas: false, usuario: false, producto: false },

    { nombre: this.oMetadataService.getName('N products with most existences left'), codigo: 'i05', fechas: false, usuario: false, producto: false },
    { nombre: this.oMetadataService.getName('N products with least existences left'), codigo: 'i06', fechas: false, usuario: false, producto: false },

    { nombre: this.oMetadataService.getName('N most selled products between two dates'), codigo: 'i07', fechas: true, usuario: false, producto: false },
    { nombre: this.oMetadataService.getName('N least selled products between two dates'), codigo: 'i08', fechas: true, usuario: false, producto: false },

    { nombre: this.oMetadataService.getName('N most selled types of products between two dates'), codigo: 'i09', fechas: true, usuario: false, producto: false },
    { nombre: this.oMetadataService.getName('N least selled types of products between two dates'), codigo: 'i10', fechas: true, usuario: false, producto: false },

    { nombre: this.oMetadataService.getName('N clients most buyers between two dates'), codigo: 'i11', fechas: true, usuario: false, producto: false },
    { nombre: this.oMetadataService.getName('N clients least buyers between two dates'), codigo: 'i12', fechas: true, usuario: false, producto: false },

    { nombre: this.oMetadataService.getName('N invoices with highest amounts between two dates'), codigo: 'i13', fechas: true, usuario: false, producto: false },
    { nombre: this.oMetadataService.getName('N invoices with lowest amounts between two dates'), codigo: 'i14', fechas: true, usuario: false, producto: false },

    { nombre: this.oMetadataService.getName('N client invoices between two dates'), codigo: 'i15', fechas: true, usuario: true, producto: false },

    { nombre: this.oMetadataService.getName('N product invoices between two dates'), codigo: 'i16', fechas: true, usuario: false, producto: true },

    { nombre: this.oMetadataService.getName('N most purchased products by a client between two dates'), codigo: 'i17', fechas: true, usuario: true, producto: false },

    { nombre: this.oMetadataService.getName('N clients most buyers of a product between two dates'), codigo: 'i18', fechas: true, usuario: false, producto: true },

    { nombre: this.oMetadataService.getName('N most buyed products for a client between two dates'), codigo: 'i19', fechas: true, usuario: true, producto: false },

    { nombre: this.oMetadataService.getName('N most buyer clients for a product between two dates'), codigo: 'i20', fechas: true, usuario: false, producto: true },

  ];

  es: any = {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Borrar',
    dateFormat: 'mm/dd/yyyy',
  };

  ngOnInit() {
    console.log(formatDate(this.currentDate, 'dd-MM-yyyy', 'es'));
    this.oForm = this.oFormBuilder.group({
      cantidad: [10, [Validators.required]],
      id_usuario: ['', [Validators.required, Validators.maxLength(1)]],
      id_producto: ['', [Validators.required, Validators.maxLength(1)]],
      fecha_inicio: ['', Validators.required],
      fecha_fin: [this.currentDate, Validators.required],
    });
    this.onChanges();
  }

  print(codigo: string) {    
    switch (true) {
      case codigo == 'i01': this.oReportPrintService.printReport_i01(this.oForm.controls.cantidad.value); break;
      case codigo == 'i02': this.oReportPrintService.printReport_i02(this.oForm.controls.cantidad.value); break;
      case codigo == 'i03': this.oReportPrintService.printReport_i03(this.oForm.controls.cantidad.value); break;
      case codigo == 'i04': this.oReportPrintService.printReport_i04(this.oForm.controls.cantidad.value); break;
      default: alert(this.oMetadataService.getName('The report') + ' ' + codigo + ' ' + this.oMetadataService.getName('not found')); break;
    }
  }

  //ajenas

  onProductFindSelection($event: number) {
    this.oForm.controls['id_producto'].setValue($event);
    this.oForm.controls['id_producto'].markAsDirty();
    //this.oForm.controls['id_producto'].markAsTouched();
    this.oProductoService.getOne(this.oForm.controls['id_producto'].value).subscribe({
      next: (oData: IProducto) => {
        this.oProduct = oData;
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': false });
      }, error: (err) => {
        this.oProduct = null;
        this.oForm.controls['id_producto'].setErrors({ 'incorrect': true });
      }
    });

    return false;
  }

  onClientFindSelection($event: number) {
    this.oForm.controls['id_usuario'].setValue($event);
    this.oForm.controls['id_usuario'].markAsDirty();
    //this.oForm.controls['id_usuario'].markAsTouched();
    this.oUsuarioService.getOne(this.oForm.controls['id_usuario'].value).subscribe({
      next: (oData: IUsuario) => {
        this.oClient = oData;
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': false });
      },
      error: (err) => {
        console.log('reports', err);
        this.oClient = null;
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': true });
      }
    });
    return false;
  }

  onChanges(): void {
    //console.log('onChanges', this.oForm);
    this.oForm.valueChanges.subscribe({
      next: (val) => {
        if (Object.prototype.toString.call(this.oForm.value.fecha_inicio) === '[object Date]' && !isNaN(this.oForm.value.fecha_inicio)) {
          if (Object.prototype.toString.call(this.oForm.value.fecha_fin) === '[object Date]' && !isNaN(this.oForm.value.fecha_inicio)) {
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
        //console.log('onChanges fechas ' + this.dateRangeOK);
      }
    });
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();
  strResult = '';

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
  }

}
