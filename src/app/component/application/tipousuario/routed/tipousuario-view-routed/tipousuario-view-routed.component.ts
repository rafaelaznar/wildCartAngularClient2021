import { IconService } from 'src/app/service/icon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tipousuario-view-routed',
  templateUrl: './tipousuario-view-routed.component.html',
  styleUrls: ['./tipousuario-view-routed.component.css'],
})
export class TipousuarioViewRoutedComponent implements OnInit {

  strEntity: string = 'tipousuario';  
  strOperation: string = 'view';
  strTitleSingular: string = 'Tipo de Usuario';
  strTitlePlural: string = 'Tipos de Usuario';
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
