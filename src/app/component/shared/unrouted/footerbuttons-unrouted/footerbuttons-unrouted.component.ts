import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-footerbuttons-unrouted',
  templateUrl: './footerbuttons-unrouted.component.html',
  styleUrls: ['./footerbuttons-unrouted.component.css']
})
export class FooterbuttonsUnroutedComponent implements OnInit {

  @Input() strEntity: string = "";


  constructor(
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

}
