import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { ICarrito } from 'src/app/model/carrito-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-carrito-detail-admin-unrouted',
  templateUrl: './carrito-detail-admin-unrouted.component.html',
  styleUrls: ['./carrito-detail-admin-unrouted.component.css']
})
export class CarritoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.view;
  //
  oCarrito: ICarrito;

  constructor(
    private oCarritoService: CarritoService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oCarritoService.getOne(this.id).subscribe({
      next: (oData: ICarrito) => {
        this.oCarrito = oData;
      }
    });
  };
}
