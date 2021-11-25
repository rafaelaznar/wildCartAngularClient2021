import { IUsuario } from './../../../model/usuario-interfaces';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-remove-usuario',
  templateUrl: './remove-usuario.component.html',
  styleUrls: ['./remove-usuario.component.css'],
})
export class RemoveUsuarioComponent implements OnInit {
  id: number = 0;
  oUsuario: IUsuario;
  strUsuarioSession: string;
  strResult: string = null;

  constructor(
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location
  ) {
    // control de sesión
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.strUsuarioSession));
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
    this.oUsuarioService
      .getOne(this.id)
      .subscribe((oData: IUsuario) => {
        this.oUsuario = oData;
      });
  };

  removeOne() {
    this.oUsuarioService.removeOne(this.id).subscribe((data: number) => {
      this.strResult = 'Usuario eliminado';
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
    this.oRouter.navigate(['/usuario/plist']);
  }
}