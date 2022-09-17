import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IFactura, IFacturaPage } from 'src/app/model/factura-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { IconService } from 'src/app/service/icon.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { CompraService } from 'src/app/service/compra.service';
import { ICompra, ICompraPage } from 'src/app/model/compra-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';

declare let jsPDF: any;

@Component({
  selector: 'app-factura-plist-admin-unrouted',
  templateUrl: './factura-plist-admin-unrouted.component.html',
  styleUrls: ['./factura-plist-admin-unrouted.component.css']
})

export class FacturaPlistAdminUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();
  //@ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  strEntity: string = "factura"
  strOperation: string = "plist"
  strTitleSingular: string = "Factura";
  strATitleSingular: string = "La factura";
  strTitlePlural: string = "Facturas";
  //
  aFacturas: IFactura[];
  //  
  nTotalElements: number;
  nTotalPages: number;
  nPage: number;
  aPaginationBar: string[];
  nPageSize: number = 10;
  //
  strSortField: string = "";
  strSortDirection: string = "";
  //
  strFilter: string = "";
  strFilteredMessage: string = "";
  subjectFilter = new Subject();
  //
  strResult: string = null;

  constructor(
    private oFacturaService: FacturaService,
    public oIconService: IconService,
    private oCompraService: CompraService,
    private oPaginationService: PaginationService
  ) {
  }

  ngOnInit(): void {
    this.nPage = 1;
    this.getPage(); //important! id_tipoproducto must be initialized before calling getPage()
  }

  getPage = () => {
    this.oFacturaService.getPage(this.nPage, this.nPageSize, this.strSortField, this.strSortDirection, this.strFilter, this.id_usuario).subscribe((oPage: IFacturaPage) => {
      if (this.id_usuario) {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por el usuario " + this.id_usuario + " y por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado filtrado por el usuario " + this.id_usuario;
        }
      } else {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado por " + this.strFilter;
        } else {
          this.strFilteredMessage = "Listado NO filtrado";
        }
      }
      this.aFacturas = oPage.content;
      this.nTotalElements = oPage.totalElements;
      this.nTotalPages = oPage.totalPages;
      if (this.nPage > this.nTotalPages) {
        this.nPage = this.nTotalPages;
        this.getPage();
      }
    })
  }

  onSetPage = (nPage: number) => {
    this.nPage = nPage;
    this.getPage();
    return false;
  }

  onSetRpp(nRpp: number) {
    this.nPageSize = nRpp;
    this.getPage();
  }

  onSetFilter(strFilter: string) {
    this.strFilter = strFilter;
    this.getPage();
  }

  onSetOrder(order: IOrder) {
    this.strSortField = order.sortField;
    this.strSortDirection = order.sortDirection;
    this.getPage();
  }

  onSelection(id: number) {
    this.selection.emit(id);
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

      //console.log(oFactura2Print);

      //console.log("buscando...", this.strFilter);
      this.oCompraService.getPage(1, oFactura2Print.compras, this.strSortField, this.strSortDirection, this.strFilter, id_factura, null).subscribe((oPage: ICompraPage) => {
        if (this.strFilter) {
          this.strFilteredMessage = "Listado filtrado: " + this.strFilter;
        } else {
          this.strFilteredMessage = "";
        }
        let aCompras: ICompra[] = oPage.content;
        this.nTotalElements = oPage.totalElements;
        this.nTotalPages = oPage.totalPages;
        this.aPaginationBar = this.oPaginationService.pagination(this.nTotalPages, this.nPage);
        //console.log(aCompras);

        // You'll need to make your image into a Data URL
        // Use http://dataurl.net/#dataurlmaker

        var doc = new jsPDF()

        //doc.addFont('Arial', 'Arial', 'normal');
        //doc.setFont('Arial');

        //Cabecera
        doc = this.cabecera(doc, oFactura2Print);
        //Fin de cabecera

        doc.setFontSize(12)

        //console.log(oFactura2Print.compras);
        //console.log(this.aCompras);

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

  onPrintFactura($event: any) {
    alert("print factura" + $event);
    this.printFactura($event);
  }

}
