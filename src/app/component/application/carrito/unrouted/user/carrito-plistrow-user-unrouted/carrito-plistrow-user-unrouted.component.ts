import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ICarrito } from 'src/app/model/carrito-interfaces';
import { Constants } from 'src/app/model/constants';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: '[app-carrito-plistrow-user-unrouted]',
  templateUrl: './carrito-plistrow-user-unrouted.component.html',
  styleUrls: ['./carrito-plistrow-user-unrouted.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CarritoPlistrowUserUnroutedComponent implements OnInit {

  @Input() oCarrito: ICarrito = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Input() id_tipousuario_session: number = null;
  @Output() selection = new EventEmitter<number>();
  @Output() addCarritoEE = new EventEmitter<number>();

  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;
  oUsuarioSession: IUsuario;
  strAPI_URL: string = API_URL;

  constructor(
    public oMetadataService: MetadataService,
    private oCarritoService: CarritoService
  ) {
    this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
  }
  onSelection(id: number) {
    this.selection.emit(id);
  }

  addCarrito(id_producto: number) {
    this.oCarritoService.add(id_producto, 1).subscribe((result: number) => {
      this.addCarritoEE.emit(id_producto);
    })
  }

  removeCarrito(id_producto: number) {
    this.oCarritoService.reduce(id_producto, 1).subscribe((result: number) => {
      this.addCarritoEE.emit(id_producto);
    })
  }

  getPrecioConDescuento(oCarrito: ICarrito) {
    let descuentoPorProducto = oCarrito.producto.precio * oCarrito.producto.descuento / 100;
    let descuentoPorUsuario = oCarrito.producto.precio * oCarrito.usuario.descuento / 100;
    return oCarrito.producto.precio - descuentoPorProducto - descuentoPorUsuario;
  }

  getPrecioConDescuentoConIVA(oCarrito: ICarrito) {
    let descuentoPorProducto = oCarrito.producto.precio * oCarrito.producto.descuento / 100;
    let descuentoPorUsuario = oCarrito.producto.precio * oCarrito.usuario.descuento / 100;
    let iva = 21 / 100;
    let total = oCarrito.producto.precio - descuentoPorProducto - descuentoPorUsuario;
    return total + total * iva;
  }

}
