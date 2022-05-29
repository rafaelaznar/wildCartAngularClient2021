import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-tipousuario-plist-routed',
  templateUrl: './tipousuario-plist-routed.component.html',
  styleUrls: ['./tipousuario-plist-routed.component.css'],
})
export class TipousuarioPlistRoutedComponent implements OnInit {
  strEntity: string = 'tipousuario';
  strOperation: string = 'plist';
  strTitleSingular: string = 'Tipo de usuario';
  strTitlePlural: string = 'Tipos de usuario';
  //

  oUserSession: IUsuario;
  subjectFiltro$ = new Subject();

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    public oIconService: IconService
  ) {
    if (this.oActivatedRoute.snapshot.data.message) {
      this.oUserSession = this.oActivatedRoute.snapshot.data.message;
      localStorage.setItem('user', JSON.stringify(this.oActivatedRoute.snapshot.data.message));
    } else {
      localStorage.clear();
      oRouter.navigate(['/home']);
    }
    
  }

  ngOnInit(): void { }


}
