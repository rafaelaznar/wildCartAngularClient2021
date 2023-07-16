import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-shared-rpp-unrouted',
  templateUrl: './shared-rpp-unrouted.component.html',
  styleUrls: ['./shared-rpp-unrouted.component.css']
})
export class SharedRppUnroutedComponent implements OnInit {

  @Input() nPageSize: number = 10;
  @Output() eeRpp = new EventEmitter<number>();

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
  }

  onChangeRpp(nRpp: number) {
    this.eeRpp.emit(nRpp);
  }

}
