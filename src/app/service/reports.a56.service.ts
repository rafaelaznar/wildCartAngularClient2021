import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { IProducto } from '../model/producto-interfaces';
import { ProductoService } from './producto.service';
import { ReportPrintService } from './reports.print.service';

declare let jsPDF: any;

@Injectable({
  providedIn: 'root'
})

export class ReportA56PrintService {

  constructor(
    private oProductoService: ProductoService,
    private oReportsService: ReportPrintService
  ) { }

  printReport_i05 = (quantity: number): void => {
    let pageNumber = 1;
    this.oProductoService.nByExistenciasDesc(quantity).subscribe({
      next: (oProductos: IProducto[]) => {
        const reportName = 'Productos con más existencias';
        var doc = new jsPDF()
        doc.setFont('Courier');
        // logo load
        var imgData: string = '/assets/img/wildCart600.png'
        this.oReportsService.loadImage(imgData).then((logo) => {
          // header
          doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
          doc = this.cabeceraTabla_i056(doc, 80);
          // end of header
          doc.setFontSize(12)
          var linea = 90;
          let descuentoAVG = 0;
          let precioAVG = 0;
          let existenciasAVG = 0;
          let count = 0;
          doc.setFont('Courier');
          for (let i = 0; i < oProductos.length; i++) {
            this.linea_i056(doc, oProductos[i], linea);
            linea = linea + 7;
            if (linea > this.oReportsService.maxPage && i + 1 < oProductos.length) {
              doc.line(this.oReportsService.minX, linea, this.oReportsService.maxX, linea);
              doc.addPage();
              pageNumber++;
              doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
              doc = this.cabeceraTabla_i056(doc, 80);
              linea = 90;
              doc.setFontSize(12)
            }
            count++;
            descuentoAVG = descuentoAVG + oProductos[i].descuento;
            precioAVG = precioAVG + oProductos[i].precio;
            existenciasAVG = existenciasAVG + oProductos[i].existencias;
          }
          this.endReport_i056(doc, linea, count, descuentoAVG / count, precioAVG / count, existenciasAVG / count);
          doc.save('Informe_' + reportName + '_' + formatDate(new Date(), 'yyyMMddHHmm', 'en') + '.pdf');
        });
      }
    })
  }

  printReport_i06 = (quantity: number): void => {
    let pageNumber = 1;
    this.oProductoService.nByExistenciasAsc(quantity).subscribe({
      next: (oProductos: IProducto[]) => {
        const reportName = 'Productos con menos existencias';
        var doc = new jsPDF()
        doc.setFont('Courier');
        // logo load
        var imgData: string = '/assets/img/wildCart600.png'
        this.oReportsService.loadImage(imgData).then((logo) => {
          // header
          doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
          doc = this.cabeceraTabla_i056(doc, 80);
          // end of header
          doc.setFontSize(12)
          var linea = 90;
          let descuentoAVG = 0;
          let precioAVG = 0;
          let existenciasAVG = 0;
          let count = 0;
          doc.setFont('Courier');
          for (let i = 0; i < oProductos.length; i++) {
            this.linea_i056(doc, oProductos[i], linea);
            linea = linea + 7;
            if (linea > this.oReportsService.maxPage && i + 1 < oProductos.length) {
              doc.line(this.oReportsService.minX, linea, this.oReportsService.maxX, linea);
              doc.addPage();
              pageNumber++;
              doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
              doc = this.cabeceraTabla_i056(doc, 80);
              linea = 90;
              doc.setFontSize(12)
            }
            count++;
            descuentoAVG = descuentoAVG + oProductos[i].descuento;
            precioAVG = precioAVG + oProductos[i].precio;
            existenciasAVG = precioAVG + oProductos[i].existencias;
          }
          this.endReport_i056(doc, linea, count, descuentoAVG / count, precioAVG / count, existenciasAVG / count);
          doc.save('Informe_' + reportName + '_' + formatDate(new Date(), 'yyyMMddHHmm', 'en') + '.pdf');
        });
      }
    })
  }

  private cabeceraTabla_i056(doc: any, linea: number): any {
    doc.setFontSize(10)
    doc.setFontType('bold');
    doc.text('Producto', this.oReportsService.minX, linea);
    doc.text('Descuento ', 140, linea, 'right');
    doc.text('Precio', 160, linea, 'right');
    doc.text('Existencias', 194, linea, 'right');
    doc.line(this.oReportsService.minX, linea + 2, this.oReportsService.maxX, linea + 2);
    return doc;
  }

  private linea_i056(doc: any, oProducto: IProducto, linea: number): void {
    doc.setFontSize(8)
    doc.text(oProducto.codigo + ' - ' + oProducto.nombre, 10, linea)
    doc.setFontSize(12);
    doc.text(oProducto.descuento + '% ', 140, linea, 'right');
    doc.text(this.oReportsService.sp2DEC(oProducto.precio), 160, linea, 'right');
    doc.text(this.oReportsService.sp0DEC(oProducto.existencias), 194, linea, 'right');
  }

  private endReport_i056(doc: any, linea: number, count: number, descuentoAVG: number, precioAVG: number, existenciasAVG: number): void {
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
    doc.text('Media de existencias:', xtit, linea + 28, 'right')
    doc.text(this.oReportsService.sp2DEC(existenciasAVG), xnum, linea + 28, 'right');
  }

}