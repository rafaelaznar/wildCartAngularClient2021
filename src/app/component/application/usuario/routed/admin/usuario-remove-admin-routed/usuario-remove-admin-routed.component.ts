import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-usuario-remove-admin-routed',
  templateUrl: './usuario-remove-admin-routed.component.html',
  styleUrls: ['./usuario-remove-admin-routed.component.css'],
})

export class UsuarioRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  strUsuarioSession: string;
  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.remove

  constructor(
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location,
    public oMetadataService: MetadataService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }

  removeOne() {
    this.oUsuarioService.removeOne(this.id).subscribe((id: number) => {
      let strResult: string = '';
      if (id) {
        strResult = this.oMetadataService.getName('the' + this.strEntity) + " con id = " + this.id + " se ha eliminado.";
      } else {
        strResult = 'Error en el borrado de ' + this.oMetadataService.getName('the' + this.strEntity).toLowerCase();
      }
      this.openPopup(strResult);
    })
  }

  goBack() {
    this._location.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/plist']);
  }
  
}