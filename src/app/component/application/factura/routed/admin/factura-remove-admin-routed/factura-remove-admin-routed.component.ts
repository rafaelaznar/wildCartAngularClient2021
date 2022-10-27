import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactura } from 'src/app/model/factura-interfaces';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { FacturaService } from 'src/app/service/factura.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-factura-remove-admin-routed',
  templateUrl: './factura-remove-admin-routed.component.html',
  styleUrls: ['./factura-remove-admin-routed.component.css']
})

export class FacturaRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  oFactura: IFactura;
  strUsuarioSession: string;
  strEntity: string = Constants.ENTITIES.invoice
  strOperation: string = Constants.OPERATIONS.remove

  constructor(
    private oFacturaService: FacturaService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location,
    public oMetadataService: MetadataService
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    this.id = this.oActivatedRoute.snapshot.params.id
    this.getOne();
  }

  ngOnInit() { }

  getOne = () => {
    this.oFacturaService.getOne(this.id).subscribe((oData: IFactura) => {
      this.oFactura = oData;
    })
  }

  removeOne() {
    let strResult: string = '';
    this.oFacturaService.removeOne(this.id).subscribe((id: number) => {
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
