import { Component, Input, OnInit } from '@angular/core';
import { ITipousuario } from 'src/app/model/tipousuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-view-unrouted',
  templateUrl: './tipousuario-view-unrouted.component.html',
  styleUrls: ['./tipousuario-view-unrouted.component.css']
})
export class TipousuarioViewUnroutedComponent implements OnInit {

  @Input() id: number = null;

  oTipousuario: ITipousuario;

  strEntity: string = "tipousuario"
  strOperation: string = "view"
  strATitleSingular: string = "El tipo de usuario"
  strTitleSingular: string = "Tipo de usuario"

  constructor(
    private oTipousuarioService: TipousuarioService,
    public oIconService: IconService
  ) {

  }

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
