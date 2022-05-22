import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { ITipoProducto, ITipoProducto2Send } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';


declare let $: any;

@Component({
  selector: 'app-edit-tipoproducto',
  templateUrl: './edit-tipoproducto.component.html',
  styleUrls: ['./edit-tipoproducto.component.css'],
})
export class EditTipoproductoComponent implements OnInit {

  strEntity: string = "tipoproducto"
  strOperation: string = "edit"
  strTitleSingular: string = "Tipo de producto";
  strTitlePlural: string = "Tipos de producto";
  oTipoProducto2Send: ITipoProducto2Send = null;
  oTipoProducto2Show: ITipoProducto = null;
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
    private oActivatedRoute: ActivatedRoute,
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

  getOne = (): void => {
    this.oTipoProductoService
      .getOne(this.id)
      .subscribe((oData: ITipoProducto) => {
        this.oTipoProducto2Show = oData;
        this.oForm = this.oFormBuilder.group({
          id: [this.oTipoProducto2Show.id],
          nombre: [
            this.oTipoProducto2Show.nombre,
            [Validators.required, Validators.minLength(5)],
          ],
        });
      });
  };

  onSubmit(): void {
    if (this.oForm) {
      this.oTipoProducto2Send = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre
      };
      this.update();
    }
  }

  update = (): void => {
    this.oTipoProductoService
      .updateOne(this.oTipoProducto2Send)
      .subscribe((oTipoProducto: ITipoProducto) => {
        if (oTipoProducto.id) {
          this.strResult = this.strTitleSingular + ' modificado correctamente';
        } else {
          this.strResult = this.strTitleSingular + ': error en la modificación del registro';
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
