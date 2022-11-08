import { Component, OnInit } from '@angular/core';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';

@Component({
  selector: 'app-tipoproducto-remove-admin-routed',
  templateUrl: './tipoproducto-remove-admin-routed.component.html',
  styleUrls: ['./tipoproducto-remove-admin-routed.component.css'],
})

export class TipoproductoRemoveAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.producttype
  strOperation: string = Constants.OPERATIONS.view
  id: number = 0;
  oTipoProducto: ITipoproducto;

  constructor(
    private oTipoproductoService: TipoproductoService,
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    super(Constants.PROFILES.admin, oRouter, oActivatedRoute);   
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
        strResult = this.oMetadataService.getName('the' + this.strEntity) + " con id = " + this.id + " se ha eliminado.";
      } else {
        strResult = 'Error en el borrado de ' + this.oMetadataService.getName('the' + this.strEntity).toLowerCase();
      }
      this.openPopup(strResult);
    });
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
