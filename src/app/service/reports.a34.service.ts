import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { IUsuario } from '../model/usuario-interfaces';
import { ReportPrintService } from './reports.print.service';

declare let jsPDF: any;

@Injectable({
  providedIn: 'root'
})
export class ReportA34PrintService {

  constructor(
    private oUsuarioService: UsuarioService,
    private oReportsService: ReportPrintService
  ) { }

  printReport_i03 = (quantity: number): void => {
    let pageNumber = 1;
    this.oUsuarioService.nByDescuentoDesc(quantity).subscribe({
      next: (oUsuarios: IUsuario[]) => {
        const reportName = 'Clientes con mayor descuento';
        var doc = new jsPDF()
        doc.setFont('Courier');
        // logo load
        var imgData: string = '/assets/img/wildCart600.png'
        this.oReportsService.loadImage(imgData).then((logo) => {
          // header
          doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
          doc = this.cabeceraTabla_i034(doc, 80);
          // end of header
          doc.setFontSize(12)
          var linea = 90;
          let descuentoAVG = 0;
          let count = 0;
          doc.setFont('Courier');
          for (let i = 0; i < oUsuarios.length; i++) {
            this.linea_i034(doc, oUsuarios[i], linea);
            linea = linea + 7;
            if (linea > this.oReportsService.maxPage && i + 1 < oUsuarios.length) {
              doc.line(this.oReportsService.minX, linea, this.oReportsService.maxX, linea);
              doc.addPage();
              pageNumber++;
              doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
              doc = this.cabeceraTabla_i034(doc, 80);
              linea = 90;
              doc.setFontSize(12)
            }
            count++;
            descuentoAVG = descuentoAVG + oUsuarios[i].descuento;
          }
          this.endReport_i034(doc, linea, count, descuentoAVG / count);
          doc.save('Informe_' + reportName + '_' + formatDate(new Date(), 'yyyMMddHHmm', 'en') + '.pdf');
        });
      }
    })
  }

  printReport_i04 = (quantity: number): void => {
    let pageNumber = 1;
    this.oUsuarioService.nByDescuentoAsc(quantity).subscribe({
      next: (oUsuarios: IUsuario[]) => {
        const reportName = 'Clientes con menor descuento';
        var doc = new jsPDF()
        doc.setFont('Courier');
        // logo load
        var imgData: string = '/assets/img/wildCart600.png'
        this.oReportsService.loadImage(imgData).then((logo) => {
          // header
          doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
          doc = this.cabeceraTabla_i034(doc, 80);
          // end of header
          doc.setFontSize(12)
          var linea = 90;
          let descuentoAVG = 0;
          let count = 0;
          doc.setFont('Courier');
          for (let i = 0; i < oUsuarios.length; i++) {
            this.linea_i034(doc, oUsuarios[i], linea);
            linea = linea + 7;
            if (linea > this.oReportsService.maxPage && i + 1 < oUsuarios.length) {
              doc.line(this.oReportsService.minX, linea, this.oReportsService.maxX, linea);
              doc.addPage();
              pageNumber++;
              doc = this.oReportsService.cabecera(doc, reportName, logo, pageNumber);
              doc = this.cabeceraTabla_i034(doc, 80);
              linea = 90;
              doc.setFontSize(12)
            }
            count++;
            descuentoAVG = descuentoAVG + oUsuarios[i].descuento;
          }
          this.endReport_i034(doc, linea, count, descuentoAVG / count);
          doc.save('Informe_' + reportName + '_' + formatDate(new Date(), 'yyyMMddHHmm', 'en') + '.pdf');
        });
      }
    })
  }

  private cabeceraTabla_i034(doc: any, linea: number): any {
    doc.setFontSize(10)
    doc.setFontType('bold');
    doc.text('Cliente', this.oReportsService.minX, linea);
    doc.text('Descuento ', 140, linea, 'right');
    doc.line(this.oReportsService.minX, linea + 2, this.oReportsService.maxX, linea + 2);
    return doc;
  }

  private linea_i034(doc: any, oUsuario: IUsuario, linea: number): void {
    doc.setFontSize(8)
    doc.text(oUsuario.dni + '   ' + this.oReportsService.capzFirst(oUsuario.nombre) + ' ' + this.oReportsService.capzFirst(oUsuario.apellido1) + ' ' + this.oReportsService.capzFirst(oUsuario.apellido2), 10, linea)
    doc.setFontSize(12);
    doc.text(oUsuario.descuento + '% ', 140, linea, 'right');
  }

  endReport_i034(doc: any, linea: number, count: number, descuentoAVG: number): void {
    doc.setFontSize(12)
    doc.line(this.oReportsService.minX, linea, this.oReportsService.maxX, linea);
    let xtit = 150;
    let xnum = 190;
    doc.text('Número de productos:', xtit, linea + 7, 'right');
    doc.text(this.oReportsService.sp0DEC(count), xnum, linea + 7, 'right')
    doc.text('Media de descuento:', xtit, linea + 14, 'right')
    doc.text(this.oReportsService.sp2DEC(descuentoAVG) + '%', xnum, linea + 14, 'right')
  }

 

}