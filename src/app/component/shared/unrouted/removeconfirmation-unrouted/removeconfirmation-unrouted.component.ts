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
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() { }

  removeOne() {
    this.doRemove.emit();
  }

}
