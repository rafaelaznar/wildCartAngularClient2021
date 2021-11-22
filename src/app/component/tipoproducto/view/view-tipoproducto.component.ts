import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipoProducto } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-tipoproducto',
  templateUrl: './view-tipoproducto.component.html',
  styleUrls: ['./view-tipoproducto.component.css'],
})
export class ViewTipoproductoComponent implements OnInit {
  id: number = 0;
  oTipoProducto: ITipoProducto;
  strUsuarioSession: string;

  constructor(
    private oTipoproductoService: TipoproductoService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.getOne();
  }

  ngOnInit(): void {}

  getOne = () => {
    this.oTipoproductoService
      .getOne(this.id)
      .subscribe((oData: ITipoProducto) => {
        this.oTipoProducto = oData;
      });
  };

  goBack() {
    this.oLocation.back();
  }
}
