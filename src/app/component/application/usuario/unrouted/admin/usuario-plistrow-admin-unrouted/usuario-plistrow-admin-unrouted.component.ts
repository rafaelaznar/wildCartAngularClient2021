import { Component, Input, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-usuario-plistrow-admin-unrouted]',
  templateUrl: './usuario-plistrow-admin-unrouted.component.html',
  styleUrls: ['./usuario-plistrow-admin-unrouted.component.css']
})

export class UsuarioPlistRowAdminUnroutedComponent implements OnInit {

  @Input() oUsuario: IUsuario = null;  
  @Input() mode: boolean = true; //true=edición; false=selección

  strEntity: string = "usuario";
  strOperation: string = "plist";

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
  }

}
