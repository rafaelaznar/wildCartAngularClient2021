import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-shared-footer-unrouted',
  templateUrl: './shared-footer-unrouted.component.html',
  styleUrls: ['./shared-footer-unrouted.component.css']
})
export class SharedFooterUnroutedComponent implements OnInit {

  constructor(public oMetadataService: MetadataService) { }

  ngOnInit() {
  }

}
