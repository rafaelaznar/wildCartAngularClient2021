import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompraService } from 'src/app/service/compra.service';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/constant/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-compra-remove-admin-routed',
  templateUrl: './compra-remove-admin-routed.component.html',
  styleUrls: ['./compra-remove-admin-routed.component.css']
})
export class CompraRemoveAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.purchase
  strOperation: string = Constants.OPERATIONS.remove
  //
  id: number = 0;

  constructor(
    private oCompraService: CompraService,
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit(): void { }

  removeOne() {
    this.oCompraService.removeOne(this.id).subscribe({
      next: (id: number) => {
        let strResult: string = '';
        if (id) {
          strResult = this.oMetadataService.getName('the' + this.strEntity) + " con id = " + this.id + " se ha eliminado.";
        } else {
          strResult = 'Error en el borrado de ' + this.oMetadataService.getName('the' + this.strEntity).toLowerCase();
        }
        this.openPopup(strResult);
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
