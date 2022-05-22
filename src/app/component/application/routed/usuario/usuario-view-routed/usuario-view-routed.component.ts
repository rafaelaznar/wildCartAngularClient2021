import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-usuario-view-routed',
  templateUrl: './usuario-view-routed.component.html',
  styleUrls: ['./usuario-view-routed.component.css'],
})

export class UsuarioViewRoutedComponent implements OnInit {
  
  id: number;
  strUsuarioSession: string;
  strEntity: string = "usuario"
  strOperation: string = "view"
  strTitleSingular:string= "usuario"

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oLocation: Location,
    public oIconService: IconService

  ) {
    if (this.oRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }

    this.id = this.oActivatedRoute.snapshot.params.id;    
  }

  ngOnInit(): void {}

  goBack() {
    this.oLocation.back();
  }
}