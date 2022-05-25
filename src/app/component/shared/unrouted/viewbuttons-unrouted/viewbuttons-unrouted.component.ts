import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: 'app-viewbuttons-unrouted',
  templateUrl: './viewbuttons-unrouted.component.html',
  styleUrls: ['./viewbuttons-unrouted.component.css']
})
export class ViewbuttonsUnroutedComponent implements OnInit {
  @Input() id: number;
  @Input() strEntity: string = "";
  @Input() strTitleSingular: string = "";
  @Input() strTitlePlural: string = "";


  constructor(
    private oLocation: Location,
    public oIconService: IconService
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.oLocation.back();
  }
}
