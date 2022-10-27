import { Component, Input, OnInit } from '@angular/core';
import { ICarrito } from 'src/app/model/carrito-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-carrito-plistrow-admin-unrouted]',
  templateUrl: './carrito-plistrow-admin-unrouted.component.html',
  styleUrls: ['./carrito-plistrow-admin-unrouted.component.css']
})

export class CarritoPlistrowAdminUnroutedComponent implements OnInit {

  @Input() oCarrito: ICarrito = null;
  @Input() mode: boolean = true; //true=edición; false=selección  

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

}
