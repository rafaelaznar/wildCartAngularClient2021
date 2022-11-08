import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-plistrowbuttons-unrouted]',
  templateUrl: './plistrowbuttons-unrouted.component.html',
  styleUrls: ['./plistrowbuttons-unrouted.component.css']
})
export class PlistrowbuttonsUnroutedComponent implements OnInit {

  @Input() strProfile: string = "administrador";
  @Input() id: number = null;
  @Input() strEntity: string = null;

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
  }

}
