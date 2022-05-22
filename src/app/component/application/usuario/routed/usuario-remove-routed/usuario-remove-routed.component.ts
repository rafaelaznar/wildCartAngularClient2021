import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-usuario-remove-routed',
  templateUrl: './usuario-remove-routed.component.html',
  styleUrls: ['./usuario-remove-routed.component.css'],
})

export class UsuarioRemoveRoutedComponent implements OnInit {
  id: number = 0;
  strUsuarioSession: string;
  strResult: string = null;
  strEntity: string = "usuario"
  strOperation: string = "remove"
  strTitleSingular: string = "Usuario";
  strTitlePlural: string = "Usuarios";

  constructor(
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location,
    public oIconService: IconService

  ) {
    // control de sesión
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    // recogida de parámetros
    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }


  removeOne() {
    this.oUsuarioService.removeOne(this.id).subscribe((data: number) => {
      this.strResult = this.strTitleSingular +' ' + this.id + ' eliminado';
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
    this.oRouter.navigate([this.strEntity + '/plist']);
  }
}