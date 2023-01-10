import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/model/constants';
import { IProducto } from 'src/app/model/producto-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: '[app-producto-plistrow-admin-unrouted]',
  templateUrl: './producto-plistrow-admin-unrouted.component.html',
  styleUrls: ['./producto-plistrow-admin-unrouted.component.css']
})
export class ProductoPlistRowAdminUnroutedComponent implements OnInit {

  @Input() oProducto: IProducto = null;
  @Input() mode: boolean = true; //true=edición; false=selección

  strAPI_URL: string = API_URL;
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.product;
  strOperation: string = Constants.OPERATIONS.plist;

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

}
