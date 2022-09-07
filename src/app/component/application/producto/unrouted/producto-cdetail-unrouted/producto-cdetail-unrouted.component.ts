import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from 'src/app/model/producto-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-cdetail-unrouted',
  templateUrl: './producto-cdetail-unrouted.component.html',
  styleUrls: ['./producto-cdetail-unrouted.component.css']
})
export class ProductoCDetailUnroutedComponent implements OnInit {

  @Input() id: number = null;  

  oProducto: IProducto;
  constructor(
    private oProductoService: ProductoService,
    public oIconService: IconService
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
}
