import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { IProducto } from '../model/producto-interfaces';
import { ProductoService } from './producto.service';

declare let jsPDF: any;

@Injectable({
  providedIn: 'root'
})
export class ReportPrintService {

  constructor(
    private oProductoService: ProductoService
  ) { }

  private loadImage(url: string) {
    return new Promise((resolve) => {
      let img = new Image();
      img.onload = () => resolve(img);
      img.src = url;
    })
  }

  sp = (n: number): string => n.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  printReport_i01 = (quantity: number): void => {
    const reportName = "I01";
    let pageNumber = 1;
    this.oProductoService.nByDescuentoDesc(quantity).subscribe((oProductos: IProducto[]) => {
      const reportName = 'Productos con mayor descuento';
      var doc = new jsPDF()
      doc.setFont('Courier');
      // logo load
      var imgData: string = '/assets/img/wildCart600.png'
      this.loadImage(imgData).then((logo) => {
        // header
        doc = this.cabecera(doc, reportName, logo, pageNumber);
        // end of header
        doc.setFontSize(12)
        var linea = 80;
        let descuentoAVG = 0;
        let precioAVG = 0;
        let count = 0;
        doc.setFont('Courier');
        for (let i = 0; i < oProductos.length; i++) {
          this.linea(doc, oProductos[i], linea);
          linea = linea + 7;
          if (linea > 230 && i + 1 < oProductos.length) {
            // Si la linea es mayor que 230, 
            // y quedan más líneas por imprimir,
            // añadimos una nueva página 
            doc.addPage();
            pageNumber++;
            doc = this.cabecera(doc, reportName, logo, pageNumber);
            linea = 155;
            doc.setFontSize(12)
          }
          count++;
          descuentoAVG = descuentoAVG + oProductos[i].descuento;
          precioAVG = precioAVG + oProductos[i].precio;
        }
        this.endReport(doc, linea, count, descuentoAVG / count, precioAVG / count);
        doc.save("Informe_" + reportName + formatDate(new Date(), 'yyyMMddHHmm', 'en') + ".pdf");
      });
    })
  }

  private cabecera(doc: any, reportName: string, logo: any, pageNumber: number): any {
    const baseX = 10;
    const baseY = 10;
    //
    const baseX2 = 120;
    //
    doc.setFontType("bold");
    doc.setFontSize(20);
    doc.setFontType("normal");
    //
    doc.setFillColor(240, 240, 240);
    doc.rect(baseX, baseY, 190, 20, "F");
    doc.setFontSize(16);
    doc.setFontType("bold");
    doc.text(baseX + 10, baseY + 12, `${reportName}`);
    //    
    doc.setFillColor(240, 240, 240);
    //separacion de cajas: h=15 v=5
    doc.rect(baseX, baseY + 25, 105, 35, "F");
    doc.addImage(logo, 'PNG', 20, 40, 80, 25);
    //
    doc.setFillColor(240, 240, 240);
    doc.rect(baseX2, 35, 80, 15, "F");
    doc.setFontSize(12);
    doc.text(142, 44, `Página: ${pageNumber.toString()}`);
    //
    doc.setFillColor(240, 240, 240);
    doc.rect(baseX2, 55, 80, 15, "F");
    doc.setFontSize(12);
    doc.text(130, 64, "Fecha: " + formatDate(new Date(), 'dd/MM/yyyy HH:mm', 'en'));
    //
    return doc;
  }

  private linea(doc: any, oProducto: IProducto, linea: number): void {
    doc.setFontSize(8)
    doc.text(oProducto.codigo + " - " + oProducto.nombre, 10, linea)
    doc.setFontSize(12);
    doc.text(oProducto.descuento + "", 130, linea, "right");
    doc.text(this.sp(oProducto.precio), 160, linea, "right");
    doc.text(this.sp(oProducto.existencias), 194, linea, "right");
  }

  endReport(doc: any, linea: number, count: number, descuentoAVG: number, precioAVG: number): void {
    doc.setFontSize(12)
    doc.line(15, linea, 195, linea);
    let xtit = 150;
    let xnum = 190;
    doc.text('Número de productos:', xtit, linea + 7, "right");
    doc.text(count.toString(), xnum, linea + 7, "right")
    doc.text('Media de descuento:', xtit, linea + 14, "right")
    doc.text(descuentoAVG.toString() + "%", xnum, linea + 14, "right")
    doc.text('Media de precios:', xtit, linea + 21, "right")
    doc.text(precioAVG.toString() + " €", xnum, linea + 21, "right");
  }

}