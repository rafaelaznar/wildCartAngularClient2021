import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { ITipoProducto, ITipoProducto2Send } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

declare let $: any;

@Component({
  selector: 'app-edit-tipoproducto',
  templateUrl: './edit-tipoproducto.component.html',
  styleUrls: ['./edit-tipoproducto.component.css'],
})
export class EditTipoproductoComponent implements OnInit {
  oTipoProducto2Send: ITipoProducto2Send = null;
  oTipoProducto2Show: ITipoProducto = null;  
  id: number = null;
  oForm: FormGroup = null;
  strResult: string = null;

  get f() {
    return this.oForm.controls;
  }

  constructor(
    private oFormBuilder: FormBuilder,
    private oRouter: Router,
    private oTipoProductoService: TipoproductoService,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      const strUsuarioSession: string =
        this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
    this.getOne();
  }

  ngOnInit(): void {}

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
          this.strResult = 'El post se ha modificado correctamente';
        } else {
          this.strResult = 'Error en la modificación del post';
        }
        this.openModal();
      });
  };

  goBack(): void {
    this.oLocation.back();
  }

  //modal

  eventsSubject: Subject<void> = new Subject<void>();

  openModal(): void {
    this.eventsSubject.next();
  }

  closeModal(): void {
    this.oRouter.navigate(['tipoproducto/view/' + this.id]);
  }
}
