import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IResult } from 'src/app/model/model-interfaces';
import { IProducto } from 'src/app/model/producto-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { ProductoService } from 'src/app/service/producto.service';
import { API_URL } from 'src/environments/environment';

declare let jsPDF: any;
@Component({
  selector: 'app-producto-detail-user-unrouted',
  templateUrl: './producto-detail-user-unrouted.component.html',
  styleUrls: ['./producto-detail-user-unrouted.component.css']
})

export class ProductoDetailUserUnroutedComponent implements OnInit {

  @Input() id: number = null;
  @Input() id_tipousuario_session: number = null;
  @Output() addCarritoEE = new EventEmitter<number>();

  API_URL: string = API_URL;
  oProducto: IProducto;
  oNewCommentResult: IResult = null;

  reloadCommentsSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private oProductoService: ProductoService,
    public oMetadataService: MetadataService,
    private oCarritoService: CarritoService,
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oProductoService
      .getOne(this.id)
      .subscribe((oData: IProducto) => {
        this.oProducto = oData;
      });
  };

  addCarrito(id_producto: number) {
    this.oCarritoService.add(id_producto, 1).subscribe((result: number) => {
      this.addCarritoEE.emit(id_producto);
      this.getOne();
    })
  }

  removeCarrito(id_producto: number) {
    this.oCarritoService.reduce(id_producto, 1).subscribe((result: number) => {
      this.addCarritoEE.emit(id_producto);
      this.getOne();
    })
  }

  reportResult = (oResult: IResult): void => {
    this.oNewCommentResult = oResult;
    if (this.oNewCommentResult.error == null) {
      if (this.oNewCommentResult.id > 0) {
        // recargar el listado de comentarios
        this.reloadCommentsSubject.next(true);

      } else {
        this.openPopup('Error en la creación de ' + this.oMetadataService.getName('the' + this.oNewCommentResult.strEntity).toLowerCase());
      }
    } else {
      this.openPopup('ERROR: ' + this.oNewCommentResult.error.status + ': ' + this.oNewCommentResult.error.message);
    }
  };

  print(id: number) {

    var doc = new jsPDF()

    var imgData = API_URL + '/file/' + this.oProducto?.imagen;
    console.log(id, this.oProducto?.imagen, imgData);

    //doc.addImage(imgData, 'JPG', 150, 20, 50, 50) //pendiente

    doc.setFontSize(50)
    doc.text('WildCart', 10, 25)

    doc.setFontSize(20)
    doc.text('Ficha Técnica de producto', 10, 35)

    let font1: number = 14;
    let font2: number = 12;
    let alignx1: number = 10;
    let alignx2: number = 60;

    doc.setFontSize(font1)
    doc.text('Descripción:', alignx1, 80)
    doc.setFontSize(font2)
    doc.text(this.oProducto.nombre, alignx2, 80)

    doc.setFontSize(font1)
    doc.text('Código:', alignx1, 90)
    doc.setFontSize(font2)
    doc.text(this.oProducto.codigo, alignx2, 90)

    doc.setFontSize(font1)
    doc.text('Precio:', alignx1, 100)
    doc.setFontSize(font2)
    doc.text(this.oProducto.precio.toString(), alignx2, 100)

    doc.setFontSize(font1)
    doc.text('Tipo de producto:', alignx1, 110)
    doc.setFontSize(font2)
    doc.text(this.oProducto.tipoproducto.nombre, alignx2, 110)


    doc.save(this.oProducto.codigo + "- Ficha Tecnica.pdf");

  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {

  }

}
