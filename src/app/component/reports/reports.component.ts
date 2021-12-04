import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IconService } from 'src/app/service/icon.service';
import { IReport } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  strEntity: string = "informe"
  strOperation: string = "imprimir"
  aReports: IReport[] = [
    { nombre: "N Productos con más descuento", codigo: "i01" },
    { nombre: "N Productos con menos descuento", codigo: "i02" },
    
    { nombre: "N Clientes con más descuento", codigo: "i03" },
    { nombre: "N Clientes con menos descuento", codigo: "i04" },

    { nombre: "N Productos con más existencias", codigo: "i05" },
    { nombre: "N Productos con menos existencias", codigo: "i06" },

    { nombre: "N Productos más vendidos entre dos fechas", codigo: "i07" },
    { nombre: "N Productos menos vendidos entre dos fechas", codigo: "i08" },

    { nombre: "N Tipos de producto más vendidos entre dos fechas", codigo: "i09" },
    { nombre: "N Tipos de producto menos vendidos entre dos fechas", codigo: "i10" },

    { nombre: "N Clientes que más compran entre dos fechas", codigo: "i11" },
    { nombre: "N Clientes que menos compran entre dos fechas", codigo: "i12" },

    { nombre: "N Facturas de más importe entre dos fechas", codigo: "i13" },
    { nombre: "N Facturas de menos importe entre dos fechas", codigo: "i14" },

    { nombre: "N Facturas de un cliente entre dos fechas", codigo: "i15" },

    { nombre: "N Facturas de un producto entre dos fechas", codigo: "i16" },

    { nombre: "N Productos que más compra un cliente entre dos fechas", codigo: "i17" },

    { nombre: "N Clientes que más compran un producto entre dos fechas", codigo: "i18" },

    { nombre: "N Productos que más compra un cliente entre dos fechas", codigo: "i19" },

    { nombre: "N Clientes que más compran un producto entre dos fechas", codigo: "i20" }
    
  ];

  constructor(
    private oLocation: Location,
    public oIconService: IconService
  ) { }

  ngOnInit() { }

  goBack() {
    this.oLocation.back();
  }

}
