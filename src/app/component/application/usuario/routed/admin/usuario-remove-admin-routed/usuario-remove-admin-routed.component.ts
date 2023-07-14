import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/constant/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-usuario-remove-admin-routed',
  templateUrl: './usuario-remove-admin-routed.component.html',
  styleUrls: ['./usuario-remove-admin-routed.component.css'],
})

export class UsuarioRemoveAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.remove
  //
  id: number = 0;

  constructor(
    private oUsuarioService: UsuarioService,
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }

  removeOne() {
    this.oUsuarioService.removeOne(this.id).subscribe({
      next: (id: number) => {
        if (id) {
          this.openPopup(this.oMetadataService.getName('OK'));
        } else {
          this.openPopup(this.oMetadataService.getName('KO'));  
        }
      }
    })
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    this.oRouter.navigate(['/', this.strProfile, this.strEntity, 'plist']);
  }

}