import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-shared-footerbuttons-unrouted',
  templateUrl: './shared-footerbuttons-unrouted.component.html',
  styleUrls: ['./shared-footerbuttons-unrouted.component.css']
})
export class SharedFooterbuttonsUnroutedComponent implements OnInit {

  @Input() strEntity: string = "";


  constructor(
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

}
