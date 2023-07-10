import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducto } from 'src/app/model/producto-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-detail-guest-unrouted',
  templateUrl: './producto-detail-guest-unrouted.component.html',
  styleUrls: ['./producto-detail-guest-unrouted.component.css']
})

export class ProductoDetailGuestUnroutedComponent implements OnInit {

  @Input() id: number = null;
  @Input() id_tipousuario_session: number = null;
  @Output() addCarritoEE = new EventEmitter<number>();

  oProducto: IProducto;

  constructor(
    private oProductoService: ProductoService,
    public oMetadataService: MetadataService,
    private oCarritoService: CarritoService,
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oProductoService.getOne(this.id).subscribe({
      next: (oData: IProducto) => {
        this.oProducto = oData;
      }
    })
  };

  addCarrito(id_producto: number) {
    this.oCarritoService.add(id_producto, 1).subscribe({
      next: (result: number) => {
        this.addCarritoEE.emit(id_producto);
        this.getOne();
      }
    })
  }

  removeCarrito(id_producto: number) {
    this.oCarritoService.reduce(id_producto, 1).subscribe({
      next: (result: number) => {
        this.addCarritoEE.emit(id_producto);
        this.getOne();
      }
    })
  }

}
