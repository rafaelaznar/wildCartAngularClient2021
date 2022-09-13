import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducto } from 'src/app/model/producto-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { IconService } from 'src/app/service/icon.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-cdetail-unrouted',
  templateUrl: './producto-cdetail-unrouted.component.html',
  styleUrls: ['./producto-cdetail-unrouted.component.css']
})
export class ProductoCDetailUnroutedComponent implements OnInit {

  @Input() id: number = null;
  @Input() id_tipousuario_session: number = null;
  @Output() addCarritoEE = new EventEmitter<number>();

  oProducto: IProducto;
  constructor(
    private oProductoService: ProductoService,
    public oIconService: IconService,
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
