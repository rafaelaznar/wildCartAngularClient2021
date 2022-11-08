import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/model/constants';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-detail-user-unrouted',
  templateUrl: './usuario-detail-user-unrouted.component.html',
  styleUrls: ['./usuario-detail-user-unrouted.component.css']
})
export class UsuarioDetailUserUnroutedComponent implements OnInit {

  @Input() id: number = null;

  oUsuario: IUsuario;
  strProfile: string = Constants.PROFILES.admin;
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
