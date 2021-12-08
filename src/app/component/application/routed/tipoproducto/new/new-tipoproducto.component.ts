import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { ITipoProducto, ITipoProducto2Send } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

declare let $: any;

@Component({
  selector: 'app-new-tipoproducto',
  templateUrl: './new-tipoproducto.component.html',
  styleUrls: ['./new-tipoproducto.component.css'],
})

export class NewTipoproductoComponent implements OnInit {


  strEntity: string = "tipoproducto"
  strOperation: string = "new"
  strTitleSingular: string = "Tipo de producto";
  strTitlePlural: string = "Tipos de producto";
  oTipoProducto2Send: ITipoProducto2Send = null;
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;
  oUserSession: IUsuario;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oTipoProductoService: TipoproductoService,
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
  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.oForm) {
      this.oTipoProducto2Send = {
        id: null,
        nombre: this.oForm.value.nombre,
      
      };
      this.new();
    }
  }

  new = (): void => {
    this.oTipoProductoService
      .newOne(this.oTipoProducto2Send)
      .subscribe((oTipoProducto: ITipoProducto) => {
        if (oTipoProducto.id) {
          this.id = oTipoProducto.id;
          this.strResult = this.strTitleSingular + ' creado correctamente con id=' + oTipoProducto.id;
        } else {
          this.strResult = this.strTitleSingular + ': error en la creación del registro';
        }
        this.openPopup();
      });
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
