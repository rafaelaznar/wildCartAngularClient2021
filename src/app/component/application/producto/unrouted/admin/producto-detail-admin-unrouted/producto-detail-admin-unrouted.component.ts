import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { IProducto } from 'src/app/model/producto-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { ProductoService } from 'src/app/service/producto.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: 'app-producto-detail-admin-unrouted',
  templateUrl: './producto-detail-admin-unrouted.component.html',
  styleUrls: ['./producto-detail-admin-unrouted.component.css']
})

export class ProductoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.product;
  strOperation: string = Constants.OPERATIONS.view;
  //
  oProducto: IProducto;
  status: HttpErrorResponse = null;
  //
  strAPI_URL: string = API_URL;

  constructor(
    private oProductoService: ProductoService,
    public oMetadataService: MetadataService
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
    });
  };

}
