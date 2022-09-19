import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from 'src/app/model/producto-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-detail-admin-unrouted',
  templateUrl: './producto-detail-admin-unrouted.component.html',
  styleUrls: ['./producto-detail-admin-unrouted.component.css']
})

export class ProductoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;  

  oProducto: IProducto;
  constructor(
    private oProductoService: ProductoService,
    public oMetadataService: MetadataService
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
