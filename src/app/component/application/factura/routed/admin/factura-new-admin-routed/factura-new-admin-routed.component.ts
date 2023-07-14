import { MetadataService } from '../../../../../../service/metadata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/constant/constants';
import { IResult } from 'src/app/model/model-interfaces';
import { CheckSession } from 'src/app/class/check.session.class';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-factura-new-admin-routed',
  templateUrl: './factura-new-admin-routed.component.html',
  styleUrls: ['./factura-new-admin-routed.component.css']
})

export class FacturaNewAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.invoice;
  strOperation: string = Constants.OPERATIONS.new;
  //
  id: number = null;
  oResult: IResult = null;

  constructor(
    protected oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.admin, oRouter, oSessionService);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit(): void { }

  reportResult = (oResult: IResult): void => {
    this.oResult = oResult;
    if (oResult.error == null) {
      if (oResult.id > 0) {
        this.id = oResult.id;
        this.openPopup(this.oMetadataService.getName('OK'));
      } else {
        this.openPopup(this.oMetadataService.getName('KO'));
      }
    } else {
      this.openPopup('ERROR: ' + oResult.error.status + ': ' + oResult.error.message);
    }
  };

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    if (this.oResult && this.oResult.error == null) {
      this.oRouter.navigate(['/', this.strProfile, this.strEntity, 'view', this.id]);
    }
  }

}