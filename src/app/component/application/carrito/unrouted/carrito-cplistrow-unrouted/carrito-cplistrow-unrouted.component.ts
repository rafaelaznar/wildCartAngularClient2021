import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ICarrito } from 'src/app/model/carrito-interfaces';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { IconService } from 'src/app/service/icon.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: '[app-carrito-cplistrow-unrouted]',
  templateUrl: './carrito-cplistrow-unrouted.component.html',
  styleUrls: ['./carrito-cplistrow-unrouted.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarritoCPlistRowUnroutedComponent implements OnInit {

  @Input() oCarrito: ICarrito = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Input() id_tipousuario_session: number = null;
  @Output() selection = new EventEmitter<number>();
  @Output() addCarritoEE = new EventEmitter<number>();

  strEntity: string = "carrito";
  strOperation: string = "plist";
  oUsuarioSession: IUsuario;

  strAPI_URL: string = API_URL;

  constructor(
    public oIconService: IconService,
    private oCarritoService: CarritoService
  ) {
    console.log("user=" +localStorage.getItem("user"));
    this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
  }
  onSelection(id: number) {
    this.selection.emit(id);
  }

  addCarrito(id_producto: number) {
    this.oCarritoService.add(id_producto, 1).subscribe((result: number) => {
      //console.log("addCarrito:" + result);
      this.addCarritoEE.emit(id_producto);
    })
  }

  removeCarrito(id_producto: number) {
    this.oCarritoService.reduce(id_producto, 1).subscribe((result: number) => {
      //console.log("addCarrito:" + result);
      this.addCarritoEE.emit(id_producto);
    })
  }
  

}
