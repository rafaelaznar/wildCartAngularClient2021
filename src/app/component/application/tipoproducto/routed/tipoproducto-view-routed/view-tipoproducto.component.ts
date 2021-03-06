import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { Location } from '@angular/common';
import { IconService } from 'src/app/service/icon.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';

@Component({
  selector: 'app-tipoproducto-view-routed',
  templateUrl: './view-tipoproducto.component.html',
  styleUrls: ['./view-tipoproducto.component.css'],
})
export class TipoproductoViewRoutedComponent implements OnInit {

  strEntity: string = "tipoproducto"
  strOperation: string = "view"
  strTitleSingular: string = "Tipo de producto";
  strTitlePlural: string = "Tipos de producto";
  id: number = 0;
  oTipoProducto: ITipoproducto;
  oUserSession: IUsuario;

  constructor(
    private oTipoproductoService: TipoproductoService,
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

  ngOnInit(): void { }

  getOne = () => {
    this.oTipoproductoService
      .getOne(this.id)
      .subscribe((oData: ITipoproducto) => {
        this.oTipoProducto = oData;
      });
  };

  goBack() {
    this.oLocation.back();
  }
}
