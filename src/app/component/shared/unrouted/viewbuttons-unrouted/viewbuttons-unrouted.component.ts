import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-viewbuttons-unrouted',
  templateUrl: './viewbuttons-unrouted.component.html',
  styleUrls: ['./viewbuttons-unrouted.component.css']
})
export class ViewbuttonsUnroutedComponent implements OnInit {

  @Input() strProfile: string = "administrador";
  @Input() strEntity: string = "";
  @Input() id: number = 0;

  constructor(
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }
}
