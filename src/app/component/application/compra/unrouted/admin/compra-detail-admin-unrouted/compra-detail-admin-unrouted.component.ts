import { Component, Input, OnInit } from '@angular/core';
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

  oCompra: ICompra;

  constructor(
    private oCompraService: CompraService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oCompraService
      .getOne(this.id)
      .subscribe({
        next: (oData: ICompra) => {
          this.oCompra = oData;
        }
      })
  }

}
