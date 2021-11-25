import { ProductoService } from './../../../service/producto.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/producto-interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})

export class ViewProductoComponent implements OnInit {

  id: number = 0;
  oProduct: Iproduct;
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
    this.oProductoService.get(this.id).subscribe((oData: Iproduct) => {
      this.oProduct = oData;
    })
  }

  goBack() {
    this.oLocation.back();
  }


}