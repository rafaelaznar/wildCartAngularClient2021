import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IResult } from 'src/app/model/model-interfaces';
import { IProducto } from 'src/app/model/producto-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-detail-user-unrouted',
  templateUrl: './producto-detail-user-unrouted.component.html',
  styleUrls: ['./producto-detail-user-unrouted.component.css']
})

export class ProductoDetailUserUnroutedComponent implements OnInit {

  @Input() id: number = null;
  @Input() id_tipousuario_session: number = null;
  @Output() addCarritoEE = new EventEmitter<number>();

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

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    
  }

}
