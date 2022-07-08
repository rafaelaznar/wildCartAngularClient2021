import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IFactura, IPageFactura } from 'src/app/model/factura-interfaces';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { FacturaService } from 'src/app/service/factura.service';
import { IconService } from 'src/app/service/icon.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { CompraService } from 'src/app/service/compra.service';
import { ICompra, ICompraPage } from 'src/app/model/compra-interfaces';
import { IOrder } from 'src/app/model/model-interfaces';

declare let jsPDF: any;
@Component({
  selector: 'app-factura-plist-unrouted',
  templateUrl: './factura-plist-unrouted.component.html',
  styleUrls: ['./factura-plist-unrouted.component.css']
})
export class FacturaPlistUnroutedComponent implements OnInit {

  @Input() id_usuario: number = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();
  //@ContentChild(TemplateRef) toolTemplate: TemplateRef<any>;

  aCompras: ICompra[];
  oFacturas: IFactura[];
  aFacturas: IFactura[];
  totalElements: number;
  totalPages: number;
  page: number;
  barraPaginacion: string[];
  pageSize: number = 10;
  id2ShowViewModal: number = 0;
  strUsuarioSession: string;
  strResult: string = null;
  currentSortField: string = "";
  currentSortDirection: string = "";
  filterActual: string = "";
  filtered: boolean = false;
  oActivatedRoute: any;

  strEntity: string = "factura"
  strOperation: string = "plist"
  strTitleSingular: string = "Factura";
  strTitlePlural: string = "Facturas";
  aPaginationBar: string[];
  nTotalElements: number;
  nTotalPages: number;
  nPage: number;
  nPageSize: number = 10;
  strFilter: string = "";
  strSortField: string = "";
  strSortDirection: string = "";
  strFilteredMessage: string = "";
  oUserSession: IUsuario;
  oFactura: IFactura;
  subjectFiltro$ = new Subject();



  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oPaginationService: PaginationService,
    private oFacturaService: FacturaService,
    public oIconService: IconService,
    public oCompraService: CompraService
  ) {

  }

  ngOnInit(): void {
    this.subjectFiltro$.pipe(
      debounceTime(1000)
    ).subscribe(() => this.getPage());
    this.page = 0;
    this.getPage();
  }

  getPage = () => {
    let id: number = this.oRoute.snapshot.params.id ? this.oRoute.snapshot.params.id : "";
    this.oFacturaService.getPage(this.page, this.pageSize, this.currentSortField, this.currentSortDirection, this.filterActual, id).subscribe((oPage: IPageFactura) => {
      if (this.filterActual) {
        this.filtered = true;
      } else {
        this.filtered = false;
      }
      this.aFacturas = oPage.content;
      this.totalElements = oPage.totalElements;
      this.totalPages = oPage.totalPages;
      this.barraPaginacion = this.oPaginationService.pagination(this.totalPages, this.page);
    })
  }

  jumpToPage = () => {
    this.getPage();
    return false;
  }

  doResetOrder() {
    this.currentSortField = "";
    this.currentSortDirection = "";
    this.getPage();
  }

  doSetOrder(order: string) {
    this.currentSortField = order;
    if (this.currentSortDirection == 'asc') {
      this.currentSortDirection = 'desc';
    } else if (this.currentSortDirection == 'desc') {
      this.currentSortDirection = '';
    } else {
      this.currentSortDirection = 'asc';
    }
    this.getPage();
  }

  onSelection(id: number) {
    console.log("selection plist emite " + id);
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

  getProductos = (tamanyo: number, factura: number) => {
    console.log("buscando...", this.strFilter);
    this.oCompraService.getPage(1, tamanyo, this.strSortField, this.strSortDirection, this.strFilter, factura, null).subscribe((oPage: ICompraPage) => {
      if (this.strFilter) {
        this.strFilteredMessage = "Listado filtrado: " + this.strFilter;
      } else {
        this.strFilteredMessage = "";
      }
      this.aCompras = oPage.content;
      this.nTotalElements = oPage.totalElements;
      this.nTotalPages = oPage.totalPages;
      this.aPaginationBar = this.oPaginationService.pagination(this.nTotalPages, this.nPage);
      console.log(this.aCompras);

      // You'll need to make your image into a Data URL
      // Use http://dataurl.net/#dataurlmaker

      var doc = new jsPDF()


      //doc.addFont('Arial', 'Arial', 'normal');
      //doc.setFont('Arial');

      //Cabecera
      doc = this.cabecera(doc, this.oFactura);
      //Fin de cabecera

      doc.setFontSize(12)

      console.log(this.oFactura.compras);
      console.log(this.aCompras);

      var linea = 155;
      var totalFactura = 0;

      doc.setFont('Courier');
      for (let i = 0; i < this.oFactura.compras; i++) {
        doc.setFontSize(8)
        doc.text(this.aCompras[i].producto.nombre, 20, linea)
        doc.setFontSize(12);
        doc.text(this.aCompras[i].cantidad + "", 130, linea, "right");
        doc.text(this.sp(this.aCompras[i].producto.precio), 160, linea, "right");
        //let total: number = this.aCompras[i].cantidad * this.aCompras[i].producto.precio;
        //let total_round:string = (Math.round(total * 100) / 100).toFixed(2);



        //let total_miles = total.toLocaleString('es', { minimumFractionDigits: 2 });
        doc.text(this.sp(this.aCompras[i].cantidad * this.aCompras[i].producto.precio), 194, linea, "right");

        totalFactura = totalFactura + (this.aCompras[i].cantidad * this.aCompras[i].producto.precio);
        linea = linea + 7;

        if (linea > 230) {
          doc.addPage();
          doc = this.cabecera(doc, this.oFactura);
          linea = 155;
          doc.setFontSize(12)
        }

      }
      doc.setFontSize(12)
      doc.line(15, linea, 195, linea);
      let xtit=150;
      let xnum=190;
      doc.text('Total:', xtit, linea + 7,"right");
      doc.text(this.sp(totalFactura) + " €", xnum, linea + 7,"right")
      doc.text('IVA:', xtit, linea + 14,"right")
      doc.text(this.oFactura.iva + "%", xnum, linea + 14,"right")
      doc.text('Total + IVA:', xtit, linea + 21,"right")
      doc.text(this.sp(totalFactura + (totalFactura * this.oFactura.iva) / 100) + " €", xnum, linea + 21,"right");


      doc.save("Factura.pdf");
    })

  }

  factura(id: number) {

    this.oFacturaService.getOne(id).subscribe((oData: IFactura) => {
      this.oFactura = oData;
      this.getProductos(this.oFactura.compras, this.oFactura.id);
      console.log(this.oFactura);
    })

  }

  onSetOrder(order: IOrder) {
    this.strSortField = order.sortField;
    this.strSortDirection = order.sortDirection;
    this.getPage();
  }

  onSetRpp(nRpp: number) {
    this.nPageSize = nRpp;
    this.getPage();
  }

  print(id: number) {
    var doc = new jsPDF()
    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
  }


  onPrintFactura($event: any) {
    alert("print factura" + $event);
    this.factura($event);
  }
}
