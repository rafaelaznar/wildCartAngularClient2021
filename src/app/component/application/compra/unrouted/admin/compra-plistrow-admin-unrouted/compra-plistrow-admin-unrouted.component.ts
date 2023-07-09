import { Component, Input, OnInit } from '@angular/core';
import { ICompra } from 'src/app/model/compra-interfaces';
import { Constants } from 'src/app/constants/constants';
import { MetadataService } from 'src/app/service/metadata.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: '[app-compra-plistrow-admin-unrouted]',
  templateUrl: './compra-plistrow-admin-unrouted.component.html',
  styleUrls: ['./compra-plistrow-admin-unrouted.component.css']
})
export class CompraPlistrowAdminUnroutedComponent implements OnInit {

  @Input() oCompra: ICompra = null;
  @Input() mode: boolean = true; //true=edición; false=selección  

  strAPI_URL: string = API_URL;
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.purchase;
  strOperation: string = Constants.OPERATIONS.plist;

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

}
