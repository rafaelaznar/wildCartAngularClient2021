import { Component, Input, OnInit } from '@angular/core';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-plistrowbuttons-unrouted]',
  templateUrl: './plistrowbuttons-unrouted.component.html',
  styleUrls: ['./plistrowbuttons-unrouted.component.css']
})
export class PlistrowbuttonsUnroutedComponent implements OnInit {

  @Input() id: number = null;
  @Input() strEntity: string = null;

  constructor(
    public oIconService: IconService
  ) { }

  ngOnInit() {
  }

}
