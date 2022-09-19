import { Component, Input, OnInit } from '@angular/core';
import { ITipousuario } from 'src/app/model/tipousuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-detail-admin-unrouted',
  templateUrl: './tipousuario-detail-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-detail-admin-unrouted.component.css']
})

export class TipousuarioDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;

  oTipousuario: ITipousuario;

  strEntity: string = "tipousuario"
  strOperation: string = "view"
  strATitleSingular: string = "El tipo de usuario"
  strTitleSingular: string = "Tipo de usuario"

  constructor(
    private oTipousuarioService: TipousuarioService,
    public oMetadataService: MetadataService
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
