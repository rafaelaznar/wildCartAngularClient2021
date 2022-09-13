import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICompra } from 'src/app/model/compra-interfaces';

import { IconService } from 'src/app/service/icon.service';
import { API_URL } from '../../../../../../../../environments/environment';

@Component({
  selector: '[app-compra-plistrow-admin-unrouted]',
  templateUrl: './compra-plistrow-au.component.html',
  styleUrls: ['./compra-plistrow-au.component.css']
})
export class CompraPlistrowUnroutedComponent implements OnInit {
  @Input() oCompra: ICompra = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();


  strAPI_URL: string = API_URL;
  strEntity: string = "compra";
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
