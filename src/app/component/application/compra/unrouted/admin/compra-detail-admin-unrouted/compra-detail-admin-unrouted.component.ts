import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { ICompra } from 'src/app/model/compra-interfaces';
import { CompraService } from 'src/app/service/compra.service';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-compra-detail-admin-unrouted',
  templateUrl: './compra-detail-admin-unrouted.component.html',
  styleUrls: ['./compra-detail-admin-unrouted.component.css']
})
export class CompraDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.purchase;
  strOperation: string = Constants.OPERATIONS.view;
  //
  oCompra: ICompra;
  status: HttpErrorResponse = null;

  constructor(
    private oCompraService: CompraService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oCompraService.getOne(this.id).subscribe({
      next: (oData: ICompra) => {
        this.oCompra = oData;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;
      }
    })
  }

}
