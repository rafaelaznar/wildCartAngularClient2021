import { IconService } from 'src/app/service/icon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITipousuario } from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-view-routed',
  templateUrl: './tipousuario-view-routed.component.html',
  styleUrls: ['./tipousuario-view-routed.component.css'],
})
export class TipousuarioViewRoutedComponent implements OnInit {
  public tipoUsuario: ITipousuario;
  strEntity: string = 'tipousuario';
  strOperation: string = 'view';
  strTitleSingular: string = 'Tipo de Usuario';
  strTitlePlural: string = 'Tipos de Usuario';

  constructor(
    private tipoUsuarioService: TipousuarioService,
    private activatedRoute: ActivatedRoute,
    public oIconService: IconService
  ) {
    this.tipoUsuarioService
      .view(this.activatedRoute.snapshot.params.id)
      .subscribe((data: ITipousuario) => {
        this.tipoUsuario = data;
      });
  }

  ngOnInit(): void {}

  goBack(): void {
    this.tipoUsuarioService.redirectPlist();
  }
}
