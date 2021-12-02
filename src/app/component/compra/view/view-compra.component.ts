import { ICompra } from 'src/app/model/compra-interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CompraService } from 'src/app/service/compra.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-view-compra',
  templateUrl: './view-compra.component.html',
  styleUrls: ['./view-compra.component.css']
})
export class ViewCompraComponent implements OnInit {
  strEntity: string = "compra"
  strOperation: string = "view"
  strTitleSingular: string = "Compra";
  strTitlePlural: string = "Compras";

  id: number = 0;
  oCompra: ICompra;
  oUserSession: IUsuario;

  constructor(
    private oComprasService: CompraService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location,
    public oIconService: IconService
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.getOne();
  }

  ngOnInit() {
  }

  getOne = () => {
    this.oComprasService.get(this.id).subscribe((oData: ICompra) => {
      this.oCompra = oData;
    })
  }
  
  goBack() {
    this.oLocation.back();
  }
}
