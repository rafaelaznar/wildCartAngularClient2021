import { ITipoproducto } from '../../../../../model/tipoproducto-interfaces';
import { Component, OnInit } from '@angular/core';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-remove-tipoproducto',
  templateUrl: './remove-tipoproducto.component.html',
  styleUrls: ['./remove-tipoproducto.component.css'],
})
export class RemoveTipoproductoComponent implements OnInit {

  strEntity: string = "tipoproducto"
  strOperation: string = "view"
  strTitleSingular: string = "Tipo de producto";
  strTitlePlural: string = "Tipos de producto";
  id: number = 0;
  oTipoProducto: ITipoproducto;
  oUserSession: IUsuario;
  strResult: string = null;

  constructor(
    private oTipoproductoService: TipoproductoService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location,
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

  removeOne() {
    this.oTipoproductoService.removeOne(this.id).subscribe((data: number) => {
      if (data) {
        this.strResult = this.strTitleSingular + ' con ID=' + this.id + ' ha sido borrado con éxito';
      } else {
        this.strResult = 'Error en el borrado de ' + this.strTitleSingular;
      }
      this.openPopup();
    });
  }

  goBack() {
    this._location.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<void> = new Subject<void>();

  openPopup(): void {
    this.eventsSubjectShowPopup.next();
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
  }
}
