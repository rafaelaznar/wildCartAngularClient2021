import { MetadataService } from '../../../../../../service/metadata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/model/constants';
import { IResult } from 'src/app/model/model-interfaces';

@Component({
  selector: 'app-factura-new-admin-routed',
  templateUrl: './factura-new-admin-routed.component.html',
  styleUrls: ['./factura-new-admin-routed.component.css']
})

export class FacturaNewAdminRoutedComponent implements OnInit {

  strEntity: string = Constants.ENTITIES.invoice
  strOperation: string = Constants.OPERATIONS.new
  id: number = null;
  strUsuarioSession: string;
  oResult: IResult = null;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    public oMetadataService: MetadataService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    this.id = this.oActivatedRoute.snapshot.params.id
    //this.strOperation = this.oActivatedRoute.snapshot.url[1].path;
  }

  ngOnInit(): void { }

  reportResult = (oResult: IResult): void => {
    this.oResult = oResult;
    if (oResult.error == null) {
      if (oResult.id > 0) {
        this.id = oResult.id;
        this.openPopup(this.oMetadataService.getName('the' + oResult.strEntity) + ' se ha creado correctamente con el id = ' + oResult.id);
      } else {
        this.openPopup('Error en la creación de ' + this.oMetadataService.getName('the' + oResult.strEntity).toLowerCase());
      }
    } else {
      this.openPopup('ERROR: ' + oResult.error.status + ': ' + oResult.error.message);
    }
  };

  goBack(): void {
    this.oLocation.back();
  }

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