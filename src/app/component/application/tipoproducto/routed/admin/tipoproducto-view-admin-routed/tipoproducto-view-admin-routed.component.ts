import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-tipoproducto-view-admin-routed',
  templateUrl: './tipoproducto-view-admin-routed.component.html',
  styleUrls: ['./tipoproducto-view-admin-routed.component.css'],
})

export class TipoproductoViewAdminRoutedComponent implements OnInit {

  strEntity: string = Constants.ENTITIES.producttype
  strOperation: string = Constants.OPERATIONS.view

  id: number = 0;
  oTipoProducto: ITipoproducto;
  oUserSession: IUsuario;

  constructor(
    private oTipoproductoService: TipoproductoService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    oRouter: Router,
    public oMetadataService: MetadataService
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

}
