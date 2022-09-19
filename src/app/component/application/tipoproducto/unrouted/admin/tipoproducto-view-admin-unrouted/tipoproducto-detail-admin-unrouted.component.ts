import { Component, Input, OnInit } from '@angular/core';
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
  
  oTipoproducto: ITipoproducto;

  strEntity: string = "tipoproducto"
  strOperation: string = "view"
  strTitleSingular:string= "tipoproducto"

  constructor(
    private oTipoproductoService: TipoproductoService,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit(): void {
    this.getOne();
  }

  getOne = () => {
    this.oTipoproductoService
      .getOne(this.id)
      .subscribe((oData: ITipoproducto) => {
        this.oTipoproducto = oData;
      });
  };

}
