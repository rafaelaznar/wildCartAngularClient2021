import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from 'src/app/service/icon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario-cview-routed',
  templateUrl: './usuario-cview-routed.component.html',
  styleUrls: ['./usuario-cview-routed.component.css'],
})

export class UsuarioCViewRoutedComponent implements OnInit {

  strEntity: string = "usuario"
  strOperation: string = "view"
  strTitleSingular: string = "usuario"
  strTitlePlural: string = "usuarios"
  //
  id: number;
  strUsuarioSession: string;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    public oIconService: IconService,
    private oLocation: Location
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void { }

  goBack() {
    this.oLocation.back();
  }
}