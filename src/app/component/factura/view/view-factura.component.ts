import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactura } from 'src/app/model/factura-interfaces';
import { PostService } from 'src/app/service/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-factura',
  templateUrl: './view-factura.component.html',
  styleUrls: ['./view-factura.component.css']
})
export class ViewFacturaComponent implements OnInit {

  id: number = 0;
  oFactura: IFactura;
  strUsuarioSession: string;
  oFacturaService: any;

  constructor(
    private oPostService: PostService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location
  ) {

    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem("user", this.oRoute.snapshot.data.message);
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
    this.oFacturaService.getOne(this.id).subscribe((oData: IFactura) => {
      this.oFactura = oData;
    })
  }

  goBack() {
    this.oLocation.back();
  }


}