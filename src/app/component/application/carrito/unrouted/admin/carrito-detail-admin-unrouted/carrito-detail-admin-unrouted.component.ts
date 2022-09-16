import { Component, Input, OnInit } from '@angular/core';
import { ICarrito } from 'src/app/model/carrito-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-carrito-detail-admin-unrouted',
  templateUrl: './carrito-detail-admin-unrouted.component.html',
  styleUrls: ['./carrito-detail-admin-unrouted.component.css']
})
export class CarritoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;  

  oCarrito: ICarrito;

  constructor(
    private oCarritoService: CarritoService,
    public oIconService: IconService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oCarritoService
      .getOne(this.id)
      .subscribe((oData: ICarrito) => {
        this.oCarrito = oData;
      });
  };
}
