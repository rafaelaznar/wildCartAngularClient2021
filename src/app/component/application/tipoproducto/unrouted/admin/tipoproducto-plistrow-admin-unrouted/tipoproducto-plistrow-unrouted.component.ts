import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from 'src/app/model/constants';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-tipoproducto-plistrow-admin-unrouted]',
  templateUrl: './tipoproducto-plistrow-unrouted.component.html',
  styleUrls: ['./tipoproducto-plistrow-unrouted.component.css']
})
export class TipoproductoPlistRowAdminUnroutedComponent implements OnInit {

  @Input() oTipoproducto: ITipoproducto = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();

  strEntity: string = Constants.ENTITIES.product;
  strOperation: string = Constants.OPERATIONS.plist;

  constructor(
    public oMetadataService: MetadataService
  ) {    
  }

  ngOnInit() {
  }

}
