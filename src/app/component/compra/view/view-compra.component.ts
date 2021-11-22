import { ICompra } from 'src/app/model/compra-interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CompraService } from 'src/app/service/compra.service';

@Component({
  selector: 'app-view-compra',
  templateUrl: './view-compra.component.html',
  styleUrls: ['./view-compra.component.css']
})
export class ViewCompraComponent implements OnInit {


  id: number = 0;
  oCompra: ICompra;
  strUsuarioSession: string;



  constructor(
    private oPostService: CompraService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location
  ) {

    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", this.oActivatedRoute.snapshot.data.message.login);
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.getOne();
  }

  ngOnInit() {
  }

  getOne = () => {
    this.oPostService.get(this.id).subscribe((oData: ICompra) => {
      this.oCompra = oData;
    })
  }

  goBack() {
    this.oLocation.back();
  }

}
