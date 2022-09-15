import { Component, Input, OnInit } from '@angular/core';
import { ITipousuario } from 'src/app/model/tipousuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-view-admin-unrouted',
  templateUrl: './tipousuario-view-au.component.html',
  styleUrls: ['./tipousuario-view-au.component.css']
})

export class TipousuarioViewAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;

  oTipousuario: ITipousuario;

  strEntity: string = "tipousuario"
  strOperation: string = "view"
  strATitleSingular: string = "El tipo de usuario"
  strTitleSingular: string = "Tipo de usuario"

  constructor(
    private oTipousuarioService: TipousuarioService,
    public oIconService: IconService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne = () => {
    this.oTipousuarioService
      .getOne(this.id)
      .subscribe((oData: ITipousuario) => {
        this.oTipousuario = oData;
      });
  };

}
