import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-shared-viewbuttons-unrouted',
  templateUrl: './shared-viewbuttons-unrouted.component.html',
  styleUrls: ['./shared-viewbuttons-unrouted.component.css']
})
export class SharedViewbuttonsUnroutedComponent implements OnInit {

  @Input() strProfile: string = "administrador";
  @Input() strEntity: string = "";
  @Input() id: number = 0;

  constructor(
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }
}
