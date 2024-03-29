import { IFactura } from 'src/app/model/factura-interfaces';
import { Injectable } from '@angular/core';
import { FacturaService } from './factura.service';
import { CompraService } from './compra.service';
import { ICompra } from '../model/compra-interfaces';

import { formatDate } from '@angular/common';

declare let jsPDF: any;

@Injectable({
  providedIn: 'root'
})

export class FacturaPrintService {

  constructor(
    private oFacturaService: FacturaService,
    private oCompraService: CompraService
  ) { }

  private loadImage(url: string) {
    return new Promise((resolve) => {
      let img = new Image();
      img.onload = () => resolve(img);
      img.src = url;
    })
  }

  sp = (n: number): string => n.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  printFactura = (id_factura: number): void => {
    this.oFacturaService.getOne(id_factura).subscribe({
      next: (oFactura2Print: IFactura) => {
        this.oCompraService.allByFactura(id_factura).subscribe({
          next: (aCompras: ICompra[]) => {
            //let aCompras: ICompra[] = oPage.content;
            //
            var doc = new jsPDF()
            doc.setFont('Courier');
            // logo load
            var imgData: string = '/assets/img/wildCart600.png'
            this.loadImage(imgData).then((logo) => {
              // header
              doc = this.cabecera(doc, oFactura2Print, logo);
              // end of header
              doc.setFontSize(12)
              var linea = 155;
              let totalFactura = 0;
              doc.setFont('Courier');
              for (let i = 0; i < oFactura2Print.compras; i++) {
                this.lineaFactura(doc, aCompras[i], linea);
                linea = linea + 7;
                if (linea > 230 && i + 1 < oFactura2Print.compras) {
                  // Si la linea es mayor que 230, 
                  // y quedan más líneas por imprimir,
                  // añadimos una nueva página 
                  doc.addPage();
                  doc = this.cabecera(doc, oFactura2Print, logo);
                  linea = 155;
                  doc.setFontSize(12)
                }
                totalFactura = totalFactura + (aCompras[i].cantidad * aCompras[i].producto.precio);
              }
              this.endFactura(doc, linea, totalFactura, oFactura2Print);
              doc.save('Factura.pdf');
            });
          }
        })
      }
    })
  }

  private cabecera(doc: any, oFactura2Print: IFactura, logo: any): any {
    const baseX = 10;
    doc.setFontType('bold');
    doc.setFontSize(20);
    doc.text('F a c t u r a', 80, 30);
    doc.setFontType('normal');
    //    
    doc.setFillColor(240, 240, 240);
    //separacion de cajas: h=15 v=5
    doc.rect(baseX, 35, 105, 35, 'F');
    doc.addImage(logo, 'PNG', 20, 40, 80, 25);
    //
    doc.setFillColor(240, 240, 240);
    doc.rect(120, 35, 80, 15, 'F');
    doc.setFontSize(12);
    doc.text(142, 44, `Nº de Factura: ${oFactura2Print.id}`);
    //
    doc.setFillColor(240, 240, 240);
    doc.rect(120, 55, 80, 15, 'F');
    doc.setFontSize(12);
    doc.text(140, 64, 'Fecha: ' + formatDate(oFactura2Print.fecha, 'dd/MM/yyyy', 'es-ES'));
    //
    doc.setFillColor(240, 240, 240);
    doc.rect(baseX, 75, 190, 50, 'F');
    //--
    const clienteX = 25;
    const clienteY = 85;
    doc.setFontSize(14)
    doc.setFontType('italic');
    doc.text('Cliente:', clienteX - 10, clienteY)
    doc.setFontType('normal');
    doc.setFontType('bold');
    doc.setFontSize(15)
    const cliente = oFactura2Print?.usuario?.nombre + ' ' + oFactura2Print?.usuario?.apellido1 + ' ' + oFactura2Print?.usuario?.apellido2;
    doc.text(cliente, clienteX, clienteY + 10)
    doc.setFontType('normal');
    doc.setFontSize(14)
    doc.text(oFactura2Print?.usuario?.dni, clienteX, clienteY + 20)
    doc.text(oFactura2Print?.usuario?.email, clienteX, clienteY + 30)
    //--
    const emisorX = 140;
    const emisorY = 85;
    doc.setFontSize(14)
    doc.setFontType('italic');
    doc.text('Emitida por:', emisorX - 10, emisorY)
    doc.setFontType('normal');
    doc.setFontType('bold');
    doc.setFontSize(18);
    doc.text('WilCart Inc.', emisorX, emisorY + 10)
    doc.setFontType('normal');
    doc.setFontSize(12)
    doc.text('wildcart@gmail.com', emisorX, emisorY + 20)
    doc.setFontSize(10)
    doc.text('c/ Carrito trolleyes s/n', emisorX, emisorY + 30)
    //
    doc.line(15, 130, 195, 130)
    //
    doc.text('Producto', 20, 140)
    doc.text('Cantidad', 110, 140)
    doc.text('Precio (€)', 140, 140)
    doc.text('Importe (€)', 170, 140)
    doc.line(15, 145, 195, 145)
    //
    return doc;
  }

  private lineaFactura(doc: any, oCompra: ICompra, linea: number): void {
    doc.setFontSize(8)
    doc.text(oCompra.producto.nombre, 20, linea)
    doc.setFontSize(12);
    doc.text(oCompra.cantidad + '', 130, linea, 'right');
    doc.text(this.sp(oCompra.producto.precio), 160, linea, 'right');
    doc.text(this.sp(oCompra.cantidad * oCompra.producto.precio), 194, linea, 'right');
  }

  endFactura(doc: any, linea: number, totalFactura: number, oFactura2Print: IFactura): void {
    doc.setFontSize(12)
    doc.line(15, linea, 195, linea);
    let xtit = 150;
    let xnum = 190;
    doc.text('Total:', xtit, linea + 7, 'right');
    doc.text(this.sp(totalFactura) + ' €', xnum, linea + 7, 'right')
    doc.text('IVA:', xtit, linea + 14, 'right')
    doc.text(oFactura2Print.iva + '%', xnum, linea + 14, 'right')
    doc.text('Total + IVA:', xtit, linea + 21, 'right')
    doc.text(this.sp(totalFactura + (totalFactura * oFactura2Print.iva) / 100) + ' €', xnum, linea + 21, 'right');
  }

}