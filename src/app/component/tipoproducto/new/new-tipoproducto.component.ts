import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { ITipoProducto, ITipoProducto2Send } from 'src/app/model/tipoproducto-interfaces';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

declare let $: any;

@Component({
  selector: 'app-new-tipoproducto',
  templateUrl: './new-tipoproducto.component.html',
  styleUrls: ['./new-tipoproducto.component.css'],
})

export class NewTipoproductoComponent implements OnInit {
  
  TipoProducto2Send: ITipoProducto2Send = null;
  id: number = 0;
  oForm: FormGroup = null;
  strResult: string = '';

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
  }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.oForm) {
      this.TipoProducto2Send = {
        id: null,
        nombre: this.oForm.value.nombre,
      };
      this.new();
    }
  }

  new = (): void => {
    this.oTipoProductoService
      .newOne(this.TipoProducto2Send)
      .subscribe((oTipoProducto: ITipoProducto) => {
        if (oTipoProducto.id) {
          this.id = oTipoProducto.id;
          this.strResult = 'El post se ha creado correctamente';
        } else {
          this.strResult = 'Error en la creación del registro';
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
