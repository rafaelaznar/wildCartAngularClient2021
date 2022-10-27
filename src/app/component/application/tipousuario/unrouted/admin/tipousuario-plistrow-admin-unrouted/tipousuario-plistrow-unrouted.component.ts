import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from 'src/app/model/constants';
import { ITipousuario } from 'src/app/model/tipousuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-tipousuario-plistrow-admin-unrouted]',
  templateUrl: './tipousuario-plistrow-unrouted.component.html',
  styleUrls: ['./tipousuario-plistrow-unrouted.component.css']
})

export class TipousuarioPlistrowAdminUnroutedComponent implements OnInit {
  
  @Input() oTipousuario: ITipousuario = null;  
  @Input() mode: boolean = true; //true=edición; false=selección
  
  strEntity: string = Constants.ENTITIES.usertype;
  strOperation: string = Constants.OPERATIONS.plist;

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
  }

}
