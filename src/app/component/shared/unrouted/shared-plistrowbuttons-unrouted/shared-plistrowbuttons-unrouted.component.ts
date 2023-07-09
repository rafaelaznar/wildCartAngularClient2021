import { Component, Input, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-shared-plistrowbuttons-unrouted]',
  templateUrl: './shared-plistrowbuttons-unrouted.component.html',
  styleUrls: ['./shared-plistrowbuttons-unrouted.component.css']
})
export class SharedPlistrowbuttonsUnroutedComponent implements OnInit {

  @Input() strProfile: string = "administrador";
  @Input() id: number = null;
  @Input() strEntity: string = null;

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
  }

}
