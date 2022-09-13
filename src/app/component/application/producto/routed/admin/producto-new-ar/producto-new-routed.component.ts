import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
@Component({
  selector: 'app-producto-new-routed',
  templateUrl: './producto-new-routed.component.html',
  styleUrls: ['./producto-new-routed.component.css']
})

export class ProductoNewRoutedComponent implements OnInit {

  strEntity: string = "producto";
  strOperation: string = "new";
  strTitleSingular: string = "Producto";
  strTitlePlural: string = "Productos";
  id: number = null;
  strResult: string = null;
  strUsuarioSession: string;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oLocation: Location,
    public oIconService: IconService
  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.strUsuarioSession));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id
    this.strOperation = this.oActivatedRoute.snapshot.url[1].path;

  }

  ngOnInit(): void {
  }

  reportResult = (oResult: any): void => {
    this.strResult = oResult.strMsg;
    this.id = oResult.id;
    this.openPopup();
  };


  goBack(): void {
    this.oLocation.back();
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
