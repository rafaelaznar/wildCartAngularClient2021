import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducto } from 'src/app/model/producto-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { ProductoService } from 'src/app/service/producto.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: 'app-producto-detail-guest-unrouted',
  templateUrl: './producto-detail-guest-unrouted.component.html',
  styleUrls: ['./producto-detail-guest-unrouted.component.css']
})

export class ProductoDetailGuestUnroutedComponent implements OnInit {

  @Input() id: number = null;
  @Output() cartChangeEE = new EventEmitter<number>();
  //
  oProducto: IProducto;
  status: HttpErrorResponse = null;
  //
  strAPI_URL: string = API_URL;

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
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    })
  };

  addCarrito(id_producto: number) {
    this.oCarritoService.add(id_producto, 1).subscribe({
      next: (result: number) => {
        this.cartChangeEE.emit(id_producto);
        this.getOne();
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    })
  }

  removeCarrito(id_producto: number) {
    this.oCarritoService.reduce(id_producto, 1).subscribe({
      next: (result: number) => {
        this.cartChangeEE.emit(id_producto);
        this.getOne();
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    })
  }

}
