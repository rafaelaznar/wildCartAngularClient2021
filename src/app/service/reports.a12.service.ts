import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { IProducto } from '../model/producto-interfaces';
import { ProductoService } from './producto.service';
import { UsuarioService } from './usuario.service';
import { ReportPrintService } from './reports.print.service';

declare let jsPDF: any;

@Injectable({
  providedIn: 'root'
})

export class ReportA12PrintService {

  constructor(
    private oProductoService: ProductoService,
    private oReportsService: ReportPrintService
  ) { }

 

  printReport_i01 = (quantity: number): void => {
    let pageNumber = 1;
    this.oProductoService.nByDescuentoDesc(quantity).subscribe({
      next: (oProductos: IProducto[]) => {
        const reportName = 'Productos con mayor descuento';
        var doc = new jsPDF()
        doc.setFont('Courier');
        // logo load
        var imgData: string = '/assets/img/wildCart600.png'
        this.oReportsService.loadImage(imgData).then((logo) => {
          // header
          doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
          doc = this.cabeceraTabla_i012(doc, 80);
          // end of header
          doc.setFontSize(12)
          var linea = 90;
          let descuentoAVG = 0;
          let precioAVG = 0;
          let count = 0;
          doc.setFont('Courier');
          for (let i = 0; i < oProductos.length; i++) {
            this.linea_i012(doc, oProductos[i], linea);
            linea = linea + 7;
            if (linea > this.oReportsService.maxPage && i + 1 < oProductos.length) {
              doc.line(this.oReportsService.minX, linea, this.oReportsService.maxX, linea);
              doc.addPage();
              pageNumber++;
              doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
              doc = this.cabeceraTabla_i012(doc, 80);
              linea = 90;
              doc.setFontSize(12)
            }
            count++;
            descuentoAVG = descuentoAVG + oProductos[i].descuento;
            precioAVG = precioAVG + oProductos[i].precio;
          }
          this.endReport_i012(doc, linea, count, descuentoAVG / count, precioAVG / count);
          doc.save('Informe_' + reportName + formatDate(new Date(), 'yyyMMddHHmm', 'en') + '.pdf');
        });
      }
    })
  }

  printReport_i02 = (quantity: number): void => {
    let pageNumber = 1;
    this.oProductoService.nByDescuentoAsc(quantity).subscribe({
      next: (oProductos: IProducto[]) => {
        const reportName = 'Productos con menor descuento';
        var doc = new jsPDF()
        doc.setFont('Courier');
        // logo load
        var imgData: string = '/assets/img/wildCart600.png'
        this.oReportsService.loadImage(imgData).then((logo) => {
          // header
          doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
          doc = this.cabeceraTabla_i012(doc, 80);
          // end of header
          doc.setFontSize(12)
          var linea = 90;
          let descuentoAVG = 0;
          let precioAVG = 0;
          let count = 0;
          doc.setFont('Courier');
          for (let i = 0; i < oProductos.length; i++) {
            this.linea_i012(doc, oProductos[i], linea);
            linea = linea + 7;
            if (linea > this.oReportsService.maxPage && i + 1 < oProductos.length) {
              doc.line(this.oReportsService.minX, linea, this.oReportsService.maxX, linea);
              doc.addPage();
              pageNumber++;
              doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
              doc = this.cabeceraTabla_i012(doc, 80);
              linea = 90;
              doc.setFontSize(12)
            }
            count++;
            descuentoAVG = descuentoAVG + oProductos[i].descuento;
            precioAVG = precioAVG + oProductos[i].precio;
          }
          this.endReport_i012(doc, linea, count, descuentoAVG / count, precioAVG / count);
          doc.save('Informe_' + reportName + formatDate(new Date(), 'yyyMMddHHmm', 'en') + '.pdf');
        });
      }
    })
  }

  private cabeceraTabla_i012(doc: any, linea: number): any {
    doc.setFontSize(10)
    doc.setFontType('bold');
    doc.text('Producto', this.oReportsService.minX, linea);
    doc.text('Descuento ', 140, linea, 'right');
    doc.text('Precio', 160, linea, 'right');
    doc.text('Existencias', 194, linea, 'right');
    doc.line(this.oReportsService.minX, linea + 2, this.oReportsService.maxX, linea + 2);
    return doc;
  }

  private linea_i012(doc: any, oProducto: IProducto, linea: number): void {
    doc.setFontSize(8)
    doc.text(oProducto.codigo + ' - ' + oProducto.nombre, 10, linea)
    doc.setFontSize(12);
    doc.text(oProducto.descuento + '% ', 140, linea, 'right');
    doc.text(this.oReportsService.sp2DEC(oProducto.precio), 160, linea, 'right');
    doc.text(this.oReportsService.sp0DEC(oProducto.existencias), 194, linea, 'right');
  }

  private endReport_i012(doc: any, linea: number, count: number, descuentoAVG: number, precioAVG: number): void {
    doc.setFontSize(12)
    doc.line(this.oReportsService.minX, linea, this.oReportsService.maxX, linea);
    let xtit = 150;
    let xnum = 190;
    doc.text('Número de productos:', xtit, linea + 7, 'right');
    doc.text(this.oReportsService.sp0DEC(count), xnum, linea + 7, 'right')
    doc.text('Media de descuento:', xtit, linea + 14, 'right')
    doc.text(this.oReportsService.sp2DEC(descuentoAVG) + '%', xnum, linea + 14, 'right')
    doc.text('Media de precios:', xtit, linea + 21, 'right')
    doc.text(this.oReportsService.sp2DEC(precioAVG) + '€', xnum, linea + 21, 'right');
  }


}