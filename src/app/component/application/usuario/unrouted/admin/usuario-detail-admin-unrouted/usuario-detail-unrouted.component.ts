import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/model/constants';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-detail-admin-unrouted',
  templateUrl: './usuario-detail-unrouted.component.html',
  styleUrls: ['./usuario-detail-unrouted.component.css']
})

export class UsuarioDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;

  oUsuario: IUsuario;
  strEntity: string = Constants.ENTITIES.user
  strOperation: string = Constants.OPERATIONS.view

  constructor(
    private oUsuarioService: UsuarioService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne = () => {
    this.oUsuarioService
      .getOne(this.id)
      .subscribe((oData: IUsuario) => {
        this.oUsuario = oData;
      });
  };

}
