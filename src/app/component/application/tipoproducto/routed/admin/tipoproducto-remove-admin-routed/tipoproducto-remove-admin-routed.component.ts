import { Component, OnInit } from '@angular/core';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';

@Component({
  selector: 'app-tipoproducto-remove-admin-routed',
  templateUrl: './tipoproducto-remove-admin-routed.component.html',
  styleUrls: ['./tipoproducto-remove-admin-routed.component.css'],
})

export class TipoproductoRemoveAdminRoutedComponent implements OnInit {

  strEntity: string = "tipoproducto"
  strOperation: string = "view"
  strTitleSingular: string = "Tipo de producto";
  strTitlePlural: string = "Tipos de producto";
  strTitleArtSingular: string = "El tipo de producto";

  id: number = 0;
  oTipoProducto: ITipoproducto;
  oUserSession: IUsuario;
  

  constructor(
    private oTipoproductoService: TipoproductoService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location,
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

  removeOne() {
    let strResult: string = '';
    this.oTipoproductoService.removeOne(this.id).subscribe((id: number) => {
      if (id) {
        strResult = this.strTitleArtSingular + " con id = " + this.id + " se ha eliminado.";
      } else {
        strResult = 'Error en el borrado de ' + this.strTitleSingular;
      }
      this.openPopup(strResult);
    });
  }

  goBack() {
    this._location.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str:string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/plist']);
  }
}
