import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/model/constants';
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

  strEntity: string = Constants.ENTITIES.usertype
  strOperation: string = Constants.OPERATIONS.view

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
