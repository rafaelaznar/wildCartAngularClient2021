import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-usuario-plist-routed',
  templateUrl: './usuario-plist-routed.component.html',
  styleUrls: ['./usuario-plist-routed.component.css']
})

export class UsuarioPlistRoutedComponent implements OnInit {

  strEntity: string = "usuario"
  strOperation: string = "plist"
  strTitleSingular: string = "Usuario";
  strTitlePlural: string = "Usuarios";

  strUsuarioSession: string;

  id_tipousuario: number = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,    
    public oIconService: IconService
  ) {

    if (this.oActivatedRoute.snapshot.data.message) {
      this.strUsuarioSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem("user", JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      this.oRouter.navigate(['/home']);
    }
    this.id_tipousuario = this.oActivatedRoute.snapshot.params.id_tipousuario;

  }

  ngOnInit(): void { }

}