import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
      //console.log("addCarrito:" + result);
      this.addCarritoEE.emit(id_producto);
      this.getOne();
    })
  }

  removeCarrito(id_producto: number) {
    this.oCarritoService.reduce(id_producto, 1).subscribe((result: number) => {
      //console.log("addCarrito:" + result);
      this.addCarritoEE.emit(id_producto);
      this.getOne();
    })
  }



}
