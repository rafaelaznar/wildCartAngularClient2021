import { ITipoProducto } from './../../../model/tipoproducto-interfaces';
import { Component, OnInit } from '@angular/core';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-remove-tipoproducto',
  templateUrl: './remove-tipoproducto.component.html',
  styleUrls: ['./remove-tipoproducto.component.css'],
})
export class RemoveTipoproductoComponent implements OnInit {
  id: number = 0;
  oTipoProducto: ITipoProducto;
  strUsuarioSession: string;
  strResult: string = null;

  constructor(
    private oTipoproductoService: TipoproductoService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location
  ) {
    // control de sesión
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem('user', this.strUsuarioSession);
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    // recogida de parámetros
    this.id = this.oActivatedRoute.snapshot.params.id;
    // llamada al servidor
    this.getOne();
  }

  ngOnInit(): void {}

  getOne = () => {
    this.oTipoproductoService
      .getOne(this.id)
      .subscribe((oData: ITipoProducto) => {
        this.oTipoProducto = oData;
      });
  };

  removeOne() {
    this.oTipoproductoService.removeOne(this.id).subscribe((data: number) => {
      if (data) {
        this.strResult =
          'El Tipo de producto con ID=' +
          this.id +
          ' ha sido borrado con éxito';
      } else {
        this.strResult = 'Error en el borrado del Tipo de producto';
      }
      this.openModal();
    });
  }

  goBack() {
    this._location.back();
  }

  //modal

  eventsSubject: Subject<void> = new Subject<void>();

  openModal() {
    this.eventsSubject.next();
  }

  closeModal() {
    this.oRouter.navigate(['/tipoproducto/plist']);
  }
}
