import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/constant/constants';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-factura-remove-admin-routed',
  templateUrl: './factura-remove-admin-routed.component.html',
  styleUrls: ['./factura-remove-admin-routed.component.css']
})

export class FacturaRemoveAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.invoice
  strOperation: string = Constants.OPERATIONS.remove
  //
  id: number = 0;

  constructor(
    private oFacturaService: FacturaService,
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit() { }

  removeOne() {
    this.oFacturaService.removeOne(this.id).subscribe({
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
