import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITipousuario } from 'src/app/model/tipousuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-tipousuario-plistrow-admin-unrouted]',
  templateUrl: './tipousuario-plistrow-unrouted.component.html',
  styleUrls: ['./tipousuario-plistrow-unrouted.component.css']
})

export class TipousuarioPlistrowAdminUnroutedComponent implements OnInit {
  
  @Input() oTipousuario: ITipousuario = null;  
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();
  
  strEntity: string = "tipousuario";
  strOperation: string = "plist";
  constructor(
    public oIconService: IconService
  ) { }

  ngOnInit() {
  }
  onSelection(id: number) {
    this.selection.emit(id);
  }
}
