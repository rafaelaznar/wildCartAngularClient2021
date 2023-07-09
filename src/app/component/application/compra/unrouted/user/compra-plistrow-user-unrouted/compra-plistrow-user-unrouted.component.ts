import { Component, Input, OnInit } from '@angular/core';
import { ICompra } from 'src/app/model/compra-interfaces';
import { Constants } from 'src/app/constant/constants';
import { MetadataService } from 'src/app/service/metadata.service';
import { API_URL } from 'src/environments/environment';

@Component({
  selector: '[app-compra-plistrow-user-unrouted]',
  templateUrl: './compra-plistrow-user-unrouted.component.html',
  styleUrls: ['./compra-plistrow-user-unrouted.component.css']
})
export class CompraPlistrowUserUnroutedComponent implements OnInit {

  @Input() oCompra: ICompra = null; 

  strAPI_URL: string = API_URL;
  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.purchase;
  strOperation: string = Constants.OPERATIONS.plist;

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

}
