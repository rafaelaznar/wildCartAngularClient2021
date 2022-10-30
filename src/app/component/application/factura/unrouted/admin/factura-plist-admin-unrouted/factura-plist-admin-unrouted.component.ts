import { Component, Input, OnInit } from '@angular/core';
import { IFactura, IFacturaPage } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { CompraService } from 'src/app/service/compra.service';
import { ICompra, ICompraPage } from 'src/app/model/compra-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';
import { Constants } from 'src/app/model/constants';

declare let jsPDF: any;

@Component({
  selector: 'app-factura-plist-admin-unrouted',
  templateUrl: './factura-plist-admin-unrouted.component.html',
  styleUrls: ['./factura-plist-admin-unrouted.component.css']
})

export class FacturaPlistAdminUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;

  strEntity: string = Constants.ENTITIES.invoice
  strOperation: string = Constants.OPERATIONS.plist
  oPage: IFacturaPage;

  constructor(
    private oFacturaService: FacturaService,
    public oMetadataService: MetadataService,
    private oCompraService: CompraService,
  ) {
    this.oPage = {} as IFacturaPage;
  }

  ngOnInit(): void {
    this.getPage(); //important! don't call in constructor; id_usuario must be initialized before calling getPage()
  }

  getPage = () => {
    this.oFacturaService.getPage(this.oPage.number, this.oPage.size, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, this.id_usuario)
      .subscribe((oPage: IFacturaPage) => {
        this.oPage = oPage;
        this.oPage.strFilteredMessage = this.oMetadataService.getFilterMsg(this.oPage.strFilter, 'usuario', this.id_usuario, null, null);
        if (this.oPage.number > this.oPage.totalPages - 1) {
          this.oPage.number = this.oPage.totalPages - 1;
          this.getPage();
        }
      })
  }

  onSetPage = (nPage: number) => {
    this.oPage.number = nPage - 1; //pagination component starts at 1, but spring data starts at 0
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    this.oPage.size = nRpp;
    this.getPage();
  }

  onSetFilter(strFilter: string) {
    this.oPage.strFilter = strFilter;
    this.getPage();
  }

  onSetOrder(order: IOrder) {
    this.oPage.strSortField = order.sortField;
    this.oPage.strSortDirection = order.sortDirection;
    this.getPage();
  }


  cabecera(doc: any, oFactura: IFactura): any {
    var imgData: string = '../../../../../../assets/img/wildCartLogo100.png'
    doc.setFontSize(20)
    doc.text('Factura', 25, 25)

    function loadImage(url: string) {
      return new Promise((resolve) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.src = url;
      })
    }

    loadImage(imgData).then((logo) => {
      doc.addImage(logo, 'PNG', 140, 15, 40, 35);
    });

    //doc.addImage(imgData, 'PNG', 140, 15, 40, 35)
    doc.setFontSize(18)
    doc.text('Cliente', 20, 80)
    doc.setFontSize(16)
    doc.text(oFactura?.usuario?.nombre + " " + oFactura?.usuario?.apellido1 + " " + oFactura?.usuario?.apellido2, 20, 89)
    doc.setFontSize(14)

    doc.text(oFactura?.usuario?.email, 20, 95)
    doc.text(oFactura?.usuario?.dni, 20, 101)

    doc.setFontSize(18)
    doc.text('Empresa', 140, 80)
    doc.setFontSize(16)
    doc.text('Wildcart', 140, 89)
    doc.setFontSize(14)

    doc.text('wildcart@gmail.com', 140, 95)
    doc.text(oFactura?.usuario?.dni, 140, 101)
    doc.line(15, 110, 195, 110)

    doc.text('Numero', 20, 120)
    doc.text('Fecha', 20, 129)
    doc.text(oFactura.id + "", 42, 120)
    doc.text(oFactura.fecha + "", 42, 129)

    doc.text('Producto', 20, 140)
    doc.text('Cantidad', 110, 140)
    doc.text('Precio (€)', 140, 140)
    doc.text('Importe (€)', 170, 140)
    doc.line(15, 145, 195, 145)

    return doc;
  }

  sp = (n: number): string => n.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  printFactura = (id_factura: number) => {
    this.oFacturaService.getOne(id_factura).subscribe((oFactura2Print: IFactura) => {
      this.oCompraService.getPage(1, oFactura2Print.compras, this.oPage.strSortField, this.oPage.strSortDirection, this.oPage.strFilter, id_factura, null).subscribe((oPage: ICompraPage) => {
        if (this.oPage.strFilter) {
          this.oPage.strFilteredMessage = "Listado filtrado: " + this.oPage.strFilter;
        } else {
          this.oPage.strFilteredMessage = "";
        }
        let aCompras: ICompra[] = oPage.content;
        this.oPage.totalElements = oPage.totalElements;
        this.oPage.totalPages = oPage.totalPages;

        // You'll need to make your image into a Data URL
        // Use http://dataurl.net/#dataurlmaker
        var doc = new jsPDF()
        //doc.addFont('Arial', 'Arial', 'normal');
        //doc.setFont('Arial');
        //Cabecera
        doc = this.cabecera(doc, oFactura2Print);
        //Fin de cabecera
        doc.setFontSize(12)
        var linea = 155;
        var totalFactura = 0;
        doc.setFont('Courier');
        for (let i = 0; i < oFactura2Print.compras; i++) {
          doc.setFontSize(8)
          doc.text(aCompras[i].producto.nombre, 20, linea)
          doc.setFontSize(12);
          doc.text(aCompras[i].cantidad + "", 130, linea, "right");
          doc.text(this.sp(aCompras[i].producto.precio), 160, linea, "right");
          //let total: number = this.aCompras[i].cantidad * this.aCompras[i].producto.precio;
          //let total_round:string = (Math.round(total * 100) / 100).toFixed(2);
          //let total_miles = total.toLocaleString('es', { minimumFractionDigits: 2 });
          doc.text(this.sp(aCompras[i].cantidad * aCompras[i].producto.precio), 194, linea, "right");
          totalFactura = totalFactura + (aCompras[i].cantidad * aCompras[i].producto.precio);
          linea = linea + 7;
          if (linea > 230) {
            doc.addPage();
            doc = this.cabecera(doc, oFactura2Print);
            linea = 155;
            doc.setFontSize(12)
          }

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
      })
    })
  }

}
