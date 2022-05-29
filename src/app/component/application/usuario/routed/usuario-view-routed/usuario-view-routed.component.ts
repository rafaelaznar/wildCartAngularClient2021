import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-usuario-view-routed',
  templateUrl: './usuario-view-routed.component.html',
  styleUrls: ['./usuario-view-routed.component.css'],
})

export class UsuarioViewRoutedComponent implements OnInit {
  
  strEntity: string = "usuario"
  strOperation: string = "view"
  strTitleSingular:string= "usuario"
  strTitlePlural:string= "usuarios"
  //
  id: number;
  strUsuarioSession: string;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    public oIconService: IconService
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

  ngOnInit(): void {}

}