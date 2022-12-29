import { IFactura } from 'src/app/model/factura-interfaces';
import { Injectable } from '@angular/core';
import { FacturaService } from './factura.service';
import { CompraService } from './compra.service';
import { ICompra, ICompraPage } from '../model/compra-interfaces';

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

  private cabecera(doc: any, oFactura: IFactura): any {



  }

  sp = (n: number): string => n.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  private lineaFactura(doc: any, oCompra: ICompra, linea: number): void {
    doc.setFontSize(8)
    doc.text(oCompra.producto.nombre, 20, linea)
    doc.setFontSize(12);
    doc.text(oCompra.cantidad + "", 130, linea, "right");
    doc.text(this.sp(oCompra.producto.precio), 160, linea, "right");
    //let total: number = this.aCompras[i].cantidad * this.aCompras[i].producto.precio;
    //let total_round:string = (Math.round(total * 100) / 100).toFixed(2);
    //let total_miles = total.toLocaleString('es', { minimumFractionDigits: 2 });
    doc.text(this.sp(oCompra.cantidad * oCompra.producto.precio), 194, linea, "right");

  }

  printFactura = (id_factura: number): void => {
    this.oFacturaService.getOne(id_factura).subscribe((oFactura2Print: IFactura) => {
      this.oCompraService.getPage(0, oFactura2Print.compras, "fecha", "desc", null, id_factura, null).subscribe((oPage: ICompraPage) => {
        let aCompras: ICompra[] = oPage.content;
        var doc = new jsPDF()
        //doc.addFont('Arial', 'Arial', 'normal');
        //doc.setFont('Arial');
        //Cabecera
        doc.setFontSize(40);
        doc.text('Factura', 20, 30);

        this.cabecera(doc, oFactura2Print);

        var imgData: string = '/assets/img/wildCart600.png'
        this.loadImage(imgData).then((logo) => {
          doc.addImage(logo, 'PNG', 100, 15, 80, 25);
          //--
          doc.setFontSize(20)
          doc.text('Cliente:', 20, 60)
          doc.setFontSize(16)
          doc.text(oFactura2Print?.usuario?.nombre + " " + oFactura2Print?.usuario?.apellido1 + " " + oFactura2Print?.usuario?.apellido2, 20, 70)
          doc.setFontSize(14)          
          doc.text(oFactura2Print?.usuario?.dni, 20, 90)
          doc.text(oFactura2Print?.usuario?.email, 20, 80)
          //--
          doc.setFontSize(20)
          doc.text('Empresa:', 140, 60)
          doc.setFontSize(16)
          doc.text('Wildcart', 140, 70)
          doc.setFontSize(14)
          doc.text('wildcart@gmail.com', 140, 80)
          doc.text('c/ Carrito trolleyes s/n', 140, 90)
          doc.line(15, 110, 195, 110)

          doc.text('Numero', 20, 120)
          doc.text('Fecha', 20, 129)
          doc.text(oFactura2Print.id + "", 42, 120)
          doc.text(oFactura2Print.fecha + "", 42, 129)

          doc.text('Producto', 20, 140)
          doc.text('Cantidad', 110, 140)
          doc.text('Precio (€)', 140, 140)
          doc.text('Importe (€)', 170, 140)
          doc.line(15, 145, 195, 145)




          //Fin de cabecera
          doc.setFontSize(12)
          var linea = 155;
          let totalFactura = 0;
          doc.setFont('Courier');
          for (let i = 0; i < oFactura2Print.compras; i++) {
            this.lineaFactura(doc, aCompras[i], linea);
            linea = linea + 7;
            if (linea > 230) { //Si la linea es mayor que 230, añadimos una nueva página
              doc.addPage();
              doc = this.cabecera(doc, oFactura2Print);
              linea = 155;
              doc.setFontSize(12)
            }
            totalFactura = totalFactura + (aCompras[i].cantidad * aCompras[i].producto.precio);
          }
          doc.setFontSize(12)
          doc.line(15, linea, 195, linea);
          let xtit = 150;
          let xnum = 190;
          doc.text('Total:', xtit, linea + 7, "right");
          doc.text(this.sp(totalFactura) + " €", xnum, linea + 7, "right")
          doc.text('IVA:', xtit, linea + 14, "right")
          doc.text(oFactura2Print.iva + "%", xnum, linea + 14, "right")
          doc.text('Total + IVA:', xtit, linea + 21, "right")
          doc.text(this.sp(totalFactura + (totalFactura * oFactura2Print.iva) / 100) + " €", xnum, linea + 21, "right");
          doc.save("Factura.pdf");
        });
      })
    })
  }


}