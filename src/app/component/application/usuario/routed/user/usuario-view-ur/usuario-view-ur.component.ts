import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from 'src/app/service/icon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario-view-user-routed',
  templateUrl: './usuario-view-ur.component.html',
  styleUrls: ['./usuario-view-ur.component.css'],
})

export class UsuarioViewUserRoutedComponent implements OnInit {

  strEntity: string = "usuario"
  strOperation: string = "view"
  strTitleSingular: string = "usuario"
  strTitlePlural: string = "usuarios"
  //
  id: number;
  strUsuarioSession: string;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    oRouter: Router,
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