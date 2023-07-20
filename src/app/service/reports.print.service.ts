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

  loadImage(url: string) {
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

  cabecera(doc: any, reportName: string, logo: any, pageNumber: number): any {
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