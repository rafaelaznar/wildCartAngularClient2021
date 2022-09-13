import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICarrito } from 'src/app/model/carrito-interfaces';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-carrito-plistrow-admin-unrouted]',
  templateUrl: './carrito-plistrow-au.component.html',
  styleUrls: ['./carrito-plistrow-au.component.css']
})
export class CarritoPlistrowAdminUnroutedComponent implements OnInit {

  @Input() oCarrito: ICarrito = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();
  
  oUsuarioSession: IUsuario;

  constructor(
    public oIconService: IconService
  ) {
    console.log("user=" +localStorage.getItem("user"));
    this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
  }
  onSelection(id: number) {
    this.selection.emit(id);
  }

}
