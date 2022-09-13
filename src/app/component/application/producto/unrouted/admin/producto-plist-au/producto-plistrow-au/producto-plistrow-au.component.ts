import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducto } from 'src/app/model/producto-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { API_URL } from '../../../../../../../../environments/environment';

@Component({
  selector: '[app-producto-plistrow-unrouted]',
  templateUrl: './producto-plistrow-au.component.html',
  styleUrls: ['./producto-plistrow-au.component.css']
})
export class ProductoPlistRowUnroutedComponent implements OnInit {
  @Input() oProducto: IProducto = null;
  @Input() mode: boolean = true; //true=edición; false=selección
  @Output() selection = new EventEmitter<number>();

  strAPI_URL: string = API_URL;
  strEntity: string = "producto";
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
