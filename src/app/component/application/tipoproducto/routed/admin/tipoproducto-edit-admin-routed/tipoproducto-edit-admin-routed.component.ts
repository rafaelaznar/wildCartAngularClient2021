import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';
import { IResult } from 'src/app/model/model-interfaces';
import { CheckSession } from 'src/app/class/check.session.class';

@Component({
  selector: 'app-tipoproducto-edit-admin-routed',
  templateUrl: './tipoproducto-edit-admin-routed.component.html',
  styleUrls: ['./tipoproducto-edit-admin-routed.component.css'],
})

export class TipoproductoEditAdminRoutedComponent extends CheckSession implements OnInit {

  strEntity: string = Constants.ENTITIES.producttype;
  strOperation: string = Constants.OPERATIONS.edit;
  id: number = null;
  oResult: IResult = null;

  constructor(
    protected oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService
  ) {
    super(Constants.PROFILES.admin, oRouter, oActivatedRoute);
    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }

  reportResult = (oResult: any): void => {
    this.oResult = oResult;
    if (oResult.error == null) {
      if (oResult.id > 0) {
        this.id = oResult.id;
        this.openPopup(this.oMetadataService.getName('the' + oResult.strEntity) + ' se ha modificado correctamente con el id = ' + oResult.id);
      } else {
        this.openPopup('Error en la modificación de ' + this.oMetadataService.getName('the' + oResult.strEntity).toLowerCase());
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
      this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
    }
  }
}
