import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/constant/constants';

@Component({
  selector: 'app-shared-viewbuttons-unrouted',
  templateUrl: './shared-viewbuttons-unrouted.component.html',
  styleUrls: ['./shared-viewbuttons-unrouted.component.css']
})
export class SharedViewbuttonsUnroutedComponent implements OnInit {

  @Input() strProfile: string = Constants.PROFILES.admin;
  @Input() strEntity: string = "";
  @Input() id: number = 0;

  constructor(
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }
}
