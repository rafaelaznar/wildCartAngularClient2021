import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactura } from 'src/app/model/factura-interfaces';
import { PostService } from 'src/app/service/post.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { FacturaService } from 'src/app/service/factura.service';

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

  constructor(
    private oFacturaService: FacturaService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location
  ) {
    // control de sesión
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", this.strUsuarioSession);
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
      if (data) {
        this.strResult = "El post con ID=" + this.id + " ha sido borrado con éxito";        
      } else {
        this.strResult = "Error en el borrado del post";        
      }
      this.openModal();
    })
  }

  goBack() {
    this._location.back();
  }

  //modal

  eventsSubject: Subject<void> = new Subject<void>();

  openModal() {
    this.eventsSubject.next();
  }

  closeModal() {
    this.oRouter.navigate(["/plist"]);
  }

}
