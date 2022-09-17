import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-tipoproducto-plistrow-admin-unrouted]',
  templateUrl: './tipoproducto-plistrow-unrouted.component.html',
  styleUrls: ['./tipoproducto-plistrow-unrouted.component.css']
})
export class TipoproductoPlistRowAdminUnroutedComponent implements OnInit {

  @Input() oTipoproducto: ITipoproducto = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();

  strEntity: string = "producto";
  strOperation: string = "plist";
  oUsuarioSession: IUsuario;

  constructor(
    public oIconService: IconService
  ) {
    //console.log("user=" +localStorage.getItem("user"));
    this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
  }
  onSelection(id: number) {
    this.selection.emit(id);
  }

}
