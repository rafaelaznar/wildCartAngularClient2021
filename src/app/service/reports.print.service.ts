import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { IProducto } from '../model/producto-interfaces';
import { ProductoService } from './producto.service';
import { UsuarioService } from './usuario.service';
import { IUsuario } from '../model/usuario-interfaces';

declare let jsPDF: any;

@Injectable({
  providedIn: 'root'
})
export class ReportPrintService {

  constructor(
    private oProductoService: ProductoService,
    private oUsuarioService: UsuarioService,
  ) { }

  private loadImage(url: string) {
    return new Promise((resolve) => {
      let img = new Image();
      img.onload = () => resolve(img);
      img.src = url;
    })
  }

  sp2DEC = (n: number): string => n.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  sp0DEC = (n: number): string => n.toLocaleString('es', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  minX = 10;
  maxX = 200;
  maxPage = 270;

  capzFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  printReport_i01 = (quantity: number): void => {
    let pageNumber = 1;
    this.oProductoService.nByDescuentoDesc(quantity).subscribe({
      next: (oProductos: IProducto[]) => {
        const reportName = 'Productos con mayor descuento';
        var doc = new jsPDF()
        doc.setFont('Courier');
        // logo load
        var imgData: string = '/assets/img/wildCart600.png'
        this.loadImage(imgData).then((logo) => {
          // header
          doc = this.cabecera(doc, reportName, logo, pageNumber);
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
            if (linea > this.maxPage && i + 1 < oProductos.length) {
              doc.line(this.minX, linea, this.maxX, linea);
              // Si la linea es mayor que 230, 
              // y quedan más líneas por imprimir,
              // añadimos una nueva página 
              doc.addPage();
              pageNumber++;
              doc = this.cabecera(doc, reportName, logo, pageNumber);
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
        this.loadImage(imgData).then((logo) => {
          // header
          doc = this.cabecera(doc, reportName, logo, pageNumber);
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
            if (linea > this.maxPage && i + 1 < oProductos.length) {
              doc.line(this.minX, linea, this.maxX, linea);
              // Si la linea es mayor que 230, 
              // y quedan más líneas por imprimir,
              // añadimos una nueva página 
              doc.addPage();
              pageNumber++;
              doc = this.cabecera(doc, reportName, logo, pageNumber);
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
    doc.text('Producto', this.minX, linea);
    doc.text('Descuento ', 140, linea, 'right');
    doc.text('Precio', 160, linea, 'right');
    doc.text('Existencias', 194, linea, 'right');
    doc.line(this.minX, linea + 2, this.maxX, linea + 2);
    return doc;
  }

  private linea_i012(doc: any, oProducto: IProducto, linea: number): void {
    doc.setFontSize(8)
    doc.text(oProducto.codigo + ' - ' + oProducto.nombre, 10, linea)
    doc.setFontSize(12);
    doc.text(oProducto.descuento + '% ', 140, linea, 'right');
    doc.text(this.sp2DEC(oProducto.precio), 160, linea, 'right');
    doc.text(this.sp0DEC(oProducto.existencias), 194, linea, 'right');
  }

  endReport_i012(doc: any, linea: number, count: number, descuentoAVG: number, precioAVG: number): void {
    doc.setFontSize(12)
    doc.line(this.minX, linea, this.maxX, linea);
    let xtit = 150;
    let xnum = 190;
    doc.text('Número de productos:', xtit, linea + 7, 'right');
    doc.text(this.sp0DEC(count), xnum, linea + 7, 'right')
    doc.text('Media de descuento:', xtit, linea + 14, 'right')
    doc.text(this.sp2DEC(descuentoAVG) + '%', xnum, linea + 14, 'right')
    doc.text('Media de precios:', xtit, linea + 21, 'right')
    doc.text(this.sp2DEC(precioAVG) + '€', xnum, linea + 21, 'right');
  }



  printReport_i03 = (quantity: number): void => {
    let pageNumber = 1;
    this.oUsuarioService.nByDescuentoDesc(quantity).subscribe({
      next: (oUsuarios: IUsuario[]) => {
        const reportName = 'Clientes con mayor descuento';
        var doc = new jsPDF()
        doc.setFont('Courier');
        // logo load
        var imgData: string = '/assets/img/wildCart600.png'
        this.loadImage(imgData).then((logo) => {
          // header
          doc = this.cabecera(doc, reportName, logo, pageNumber);
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
            if (linea > this.maxPage && i + 1 < oUsuarios.length) {
              doc.line(this.minX, linea, this.maxX, linea);
              // Si la linea es mayor que 230, 
              // y quedan más líneas por imprimir,
              // añadimos una nueva página 
              doc.addPage();
              pageNumber++;
              doc = this.cabecera(doc, reportName, logo, pageNumber);
              doc = this.cabeceraTabla_i034(doc, 80);
              linea = 90;
              doc.setFontSize(12)
            }
            count++;
            descuentoAVG = descuentoAVG + oUsuarios[i].descuento;
          }
          this.endReport_i034(doc, linea, count, descuentoAVG / count);
          doc.save('Informe_' + reportName + formatDate(new Date(), 'yyyMMddHHmm', 'en') + '.pdf');
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
        this.loadImage(imgData).then((logo) => {
          // header
          doc = this.cabecera(doc, reportName, logo, pageNumber);
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
            if (linea > this.maxPage && i + 1 < oUsuarios.length) {
              doc.line(this.minX, linea, this.maxX, linea);
              // Si la linea es mayor que 230, 
              // y quedan más líneas por imprimir,
              // añadimos una nueva página 
              doc.addPage();
              pageNumber++;
              doc = this.cabecera(doc, reportName, logo, pageNumber);
              doc = this.cabeceraTabla_i034(doc, 80);
              linea = 90;
              doc.setFontSize(12)
            }
            count++;
            descuentoAVG = descuentoAVG + oUsuarios[i].descuento;
          }
          this.endReport_i034(doc, linea, count, descuentoAVG / count);
          doc.save('Informe_' + reportName + formatDate(new Date(), 'yyyMMddHHmm', 'en') + '.pdf');
        });
      }
    })
  }

  private cabeceraTabla_i034(doc: any, linea: number): any {
    doc.setFontSize(10)
    doc.setFontType('bold');
    doc.text('Cliente', this.minX, linea);
    doc.text('Descuento ', 140, linea, 'right');
    doc.line(this.minX, linea + 2, this.maxX, linea + 2);
    return doc;
  }

  private linea_i034(doc: any, oUsuario: IUsuario, linea: number): void {
    doc.setFontSize(8)
    doc.text(oUsuario.dni + '   ' + this.capzFirst(oUsuario.nombre) + ' ' + this.capzFirst(oUsuario.apellido1) + ' ' + this.capzFirst(oUsuario.apellido2), 10, linea)
    doc.setFontSize(12);
    doc.text(oUsuario.descuento + '% ', 140, linea, 'right');
  }

  endReport_i034(doc: any, linea: number, count: number, descuentoAVG: number): void {
    doc.setFontSize(12)
    doc.line(this.minX, linea, this.maxX, linea);
    let xtit = 150;
    let xnum = 190;
    doc.text('Número de productos:', xtit, linea + 7, 'right');
    doc.text(this.sp0DEC(count), xnum, linea + 7, 'right')
    doc.text('Media de descuento:', xtit, linea + 14, 'right')
    doc.text(this.sp2DEC(descuentoAVG) + '%', xnum, linea + 14, 'right')
  }

  private cabecera(doc: any, reportName: string, logo: any, pageNumber: number): any {
    const baseX = 10;
    const baseY = 10;
    //
    const baseX2 = 120;
    //
    doc.setFontType('bold');
    doc.setFontSize(20);
    doc.setFontType('normal');
    //
    doc.setFillColor(240, 240, 240);
    doc.rect(baseX, baseY, 190, 20, 'F');
    doc.setFontSize(16);
    doc.setFontType('bold');
    doc.text(baseX + 10, baseY + 12, `${reportName}`);
    //    
    doc.setFillColor(240, 240, 240);
    //separacion de cajas: h=15 v=5
    doc.rect(baseX, baseY + 25, 105, 35, 'F');
    doc.addImage(logo, 'PNG', 20, 40, 80, 25);
    //
    doc.setFillColor(240, 240, 240);
    doc.rect(baseX2, 35, 80, 15, 'F');
    doc.setFontSize(12);
    doc.text(142, 44, `Página: ${pageNumber.toString()}`);
    //
    doc.setFillColor(240, 240, 240);
    doc.rect(baseX2, 55, 80, 15, 'F');
    doc.setFontSize(12);
    doc.text(130, 64, 'Fecha: ' + formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en'));
    //
    return doc;
  }

}