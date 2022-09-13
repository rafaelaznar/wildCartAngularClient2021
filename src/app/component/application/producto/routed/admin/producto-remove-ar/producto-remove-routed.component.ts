import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';
import { IconService } from 'src/app/service/icon.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';

@Component({
  selector: 'app-producto-remove-routed',
  templateUrl: './producto-remove-routed.component.html',
  styleUrls: ['./producto-remove-routed.component.css']
})
export class ProductoRemoveRoutedComponent implements OnInit {
  strEntity: string = "producto"
  strOperation: string = "remove"
  strTitleSingular: string = "Producto";
  strTitlePlural: string = "Productos";
  strTitleArtSingular: string = "El producto";

  id: number = 0;
  oUserSession: IUsuario;
  strResult: string = null;

  constructor(
    private oProductoService: ProductoService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location,
    public oIconService: IconService
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.oUserSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    // recogida de parámetros
    this.id = this.oActivatedRoute.snapshot.params.id

  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oProductoService.removeOne(this.id).subscribe((id: number) => {    
      if (id) {                
        this.strResult = this.strTitleArtSingular + " con id = " + this.id + " se ha eliminado.";
      } else {
        this.strResult = 'Error en el borrado de ' + this.strTitleSingular;
      }
      this.openPopup();
    })
  }

  goBack() {
    this.oLocation.back();
  }

  //popup

  eventsSubjectShowPopup: Subject<void> = new Subject<void>();

  openPopup(): void {
    this.eventsSubjectShowPopup.next();
  }

  onClosePopup(): void {
    this.oRouter.navigate([this.strEntity + '/plist']);
  }

}
