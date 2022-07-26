import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { ITipoproducto, ITipoproducto2Send } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';


declare let $: any;

@Component({
  selector: 'app-tipoproducto-edit-routed',
  templateUrl: './tipoproducto-edit-routed.component.html',
  styleUrls: ['./tipoproducto-edit-routed.component.css'],
})
export class TipoproductoEditRoutedComponent implements OnInit {

  strEntity: string = 'tipoproducto';
  strOperation: string = 'edit';
  strTitleSingular: string = 'Tipo de producto';
  strTitlePlural: string = 'Tipos de producto';
  strATitleSingular: string = 'El tipo de producto';
  strATitlePlural: string = 'Los tipos de producto';
  //
  id: number = null;
  strResult: string = null;
  strUsuarioSession: string;


  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oIconService: IconService,
    private oLocation: Location
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.strOperation = this.oActivatedRoute.snapshot.url[1].path;
  }

  ngOnInit(): void {
  }

  reportResult = (oResult: any): void => {
    this.strResult = oResult.strMsg;
    this.id = oResult.id;
    this.openPopup();
  };

  goBack(): void {
    this.oLocation.back();
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
