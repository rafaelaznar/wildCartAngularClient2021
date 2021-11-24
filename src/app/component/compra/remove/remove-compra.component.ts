import { ICompra } from './../../../model/compra-interfaces';
import { CompraService } from './../../../service/compra.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-remove-compra',
  templateUrl: './remove-compra.component.html',
  styleUrls: ['./remove-compra.component.css']
})
export class RemoveCompraComponent implements OnInit {
  id: number = 0;
  oCompra: ICompra;
  strUsuarioSession: string;
  strResult: string = null;

  constructor(
    private oPostService: CompraService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private _location: Location
  ) {
    // control de sesión
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message.login;
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
    this.oPostService.get(this.id).subscribe((oData: ICompra) => {
      this.oCompra = oData;
      console.log(oData.producto);
    })
    
  }

  removeOne() {
    this.oPostService.remove(this.id).subscribe((data: number) => {
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
    this.oRouter.navigate(["/compra/plist"]);
  }

}

