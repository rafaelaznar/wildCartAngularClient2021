import { IconService } from 'src/app/service/icon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserType } from 'src/app/model/tipousuario-interfaces';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-view-tipousuario',
  templateUrl: './view-tipousuario.component.html',
  styleUrls: ['./view-tipousuario.component.css'],
})
export class ViewTipousuarioComponent implements OnInit {
  public tipoUsuario: IUserType;
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
      .subscribe((data: IUserType) => {
        this.tipoUsuario = data;
      });
  }

  ngOnInit(): void {}

  goBack(): void {
    this.tipoUsuarioService.redirectPlist();
  }
}
