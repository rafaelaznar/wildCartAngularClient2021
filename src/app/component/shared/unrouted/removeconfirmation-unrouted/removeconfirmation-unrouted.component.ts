import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-removeconfirmation-unrouted',
  templateUrl: './removeconfirmation-unrouted.component.html',
  styleUrls: ['./removeconfirmation-unrouted.component.css']
})
export class RemoveconfirmationUnroutedComponent implements OnInit {

  @Input() strEntity: string = "";
  @Output() doRemove = new EventEmitter<Event>();

  constructor(
    private oLocation: Location,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.oLocation.back();
  }

  removeOne() {
    this.doRemove.emit();
  }

}
