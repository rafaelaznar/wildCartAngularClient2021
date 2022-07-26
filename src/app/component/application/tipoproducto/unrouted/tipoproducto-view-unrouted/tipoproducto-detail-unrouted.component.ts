import { Component, Input, OnInit } from '@angular/core';
import { ITipoproducto } from 'src/app/model/tipoproducto-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { TipoproductoService } from 'src/app/service/tipoproducto.service';

@Component({
  selector: 'app-tipoproducto-detail-unrouted',
  templateUrl: './tipoproducto-detail-unrouted.component.html',
  styleUrls: ['./tipoproducto-detail-unrouted.component.css']
})
export class TipoproductoDetailUnroutedComponent implements OnInit {

  @Input() id: number = null;  
  
  oTipoproducto: ITipoproducto;

  strEntity: string = "tipoproducto"
  strOperation: string = "view"
  strTitleSingular:string= "tipoproducto"

  constructor(
    private oTipoproductoService: TipoproductoService,
    public oIconService: IconService
  ) {
    
  }

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
