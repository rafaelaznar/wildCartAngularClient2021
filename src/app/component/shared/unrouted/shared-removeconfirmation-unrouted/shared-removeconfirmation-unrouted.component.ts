import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-shared-removeconfirmation-unrouted',
  templateUrl: './shared-removeconfirmation-unrouted.component.html',
  styleUrls: ['./shared-removeconfirmation-unrouted.component.css']
})
export class SharedRemoveconfirmationUnroutedComponent implements OnInit {

  @Input() strEntity: string = '';
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
