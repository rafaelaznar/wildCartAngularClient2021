import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constant/constants';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

@Component({
  selector: 'app-tipoproducto-detail-admin-unrouted',
  templateUrl: './tipoproducto-detail-admin-unrouted.component.html',
  styleUrls: ['./tipoproducto-detail-admin-unrouted.component.css']
})

export class TipoproductoDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number = null;
  //
  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.producttype
  strOperation: string = Constants.OPERATIONS.view
  //
  oTipoproducto: ITipoproducto;
  status: HttpErrorResponse = null;

  constructor(
    private oTipoproductoService: TipoproductoService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne = () => {
    this.oTipoproductoService.getOne(this.id).subscribe({
      next: (oData: ITipoproducto) => {
        this.oTipoproducto = oData;
      },
      error: (error: HttpErrorResponse) => {
        this.status = error;        
      }
    });
  };

}
