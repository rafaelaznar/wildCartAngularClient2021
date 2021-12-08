import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactura } from 'src/app/model/factura-interfaces';
import { PostService } from 'src/app/service/post.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { FacturaService } from 'src/app/service/factura.service';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-remove-factura',
  templateUrl: './remove-factura.component.html',
  styleUrls: ['./remove-factura.component.css']
})
export class RemoveFacturaComponent implements OnInit {

  id: number = 0;
  oFactura: IFactura;
  strUsuarioSession: string;
  strResult: string = null;
  strEntity: string = "factura"
  strOperation: string = "remove"
  strTitleSingular: string = "Factura";
  strTitlePlural: string = "Facturas";

  constructor(
    private oFacturaService: FacturaService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location,
    public oIconService: IconService
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    // recogida de parámetros
    this.id = this.oActivatedRoute.snapshot.params.id
    // llamada al servidor
    this.getOne();
  }

  ngOnInit() {
  }

  getOne = () => {
    this.oFacturaService.getOne(this.id).subscribe((oData: IFactura) => {
      this.oFactura = oData;
    })
  }

  removeOne() {
    this.oFacturaService.Delete(this.id).subscribe((data: number) => {
     
        this.strResult = "El post se ha borrado bien";        
      
      this.openPopup();
    })
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
    this.oRouter.navigate([this.strEntity + '/view/' + this.id]);
  }

}
