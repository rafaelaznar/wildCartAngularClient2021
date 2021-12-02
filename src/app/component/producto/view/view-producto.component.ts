import { ProductoService } from './../../../service/producto.service';
import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/model/producto-interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IconService } from 'src/app/service/icon.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';


@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})

export class ViewProductoComponent implements OnInit {
  strEntity: string = "producto"
  strOperation: string = "view"
  strTitleSingular: string = "Producto";
  strTitlePlural: string = "Productos";
  id: number = null;
  strUsuarioSession: string;
  strResult: string = null;
  oProducto: IProducto;
  oUserSession: IUsuario;


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

    this.id = this.oActivatedRoute.snapshot.params.id
    this.getOne();
  }

  ngOnInit() {
  }

  getOne = () => {
    this.oProductoService
      .get(this.id)
      .subscribe((oData: IProducto) => {
        this.oProducto = oData;
      });
  };

  goBack() {
    this.oLocation.back();
  }


}