import { Component, Input, OnInit } from '@angular/core';
import { ICompra } from 'src/app/model/compra-interfaces';
import { CompraService } from 'src/app/service/compra.service';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-compra-detail-unrouted',
  templateUrl: './compra-detail-unrouted.component.html',
  styleUrls: ['./compra-detail-unrouted.component.css']
})
export class CompraDetailUnroutedComponent implements OnInit {

  @Input() id: number = null;  

  oCompra: ICompra;

  constructor(
    private oCompraService: CompraService,
    public oIconService: IconService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne = () => {
    this.oCompraService
      .getOne(this.id)
      .subscribe((oData: ICompra) => {
        this.oCompra = oData;
      });
  };
}
