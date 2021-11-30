import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducto } from 'src/app/model/producto-interfaces';
import { ProductoService } from 'src/app/service/producto.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-remove-producto',
  templateUrl: './remove-producto.component.html',
  styleUrls: ['./remove-producto.component.css']
})
export class RemoveProductoComponent implements OnInit {

  id: number = 0;
  oProduct: IProducto;
  strUsuarioSession: string;
  strResult: string = null;

  constructor(
    private oProductoService: ProductoService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location
  ) {
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    // recogida de parámetros
    this.id = this.oActivatedRoute.snapshot.params.id
    // llamada al servidor
    this.getOne();
  }

  ngOnInit(): void {
  }

  getOne = () => {
    this.oProductoService.get(this.id).subscribe((oData: IProducto) => {
      this.oProduct = oData;
    })
  }

  removeOne() {
    this.oProductoService.removeOne(this.id).subscribe((oData: IProducto) => {
      if (oData) {
        this.strResult = "El post con ID=" + this.id + " ha sido borrado con éxito";
      } else {
        this.strResult = "Error en el borrado del post";
      }
      this.openModal();
    })
  }

  goBack() {
    this.oLocation.back();
  }


  eventsSubject: Subject<void> = new Subject<void>();

  openModal() {
    this.eventsSubject.next();
  }

  closeModal() {
    this.oRouter.navigate(["/producto/plist"]);
  }



}
