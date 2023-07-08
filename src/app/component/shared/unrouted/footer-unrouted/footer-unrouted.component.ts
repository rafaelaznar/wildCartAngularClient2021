import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer-unrouted.component.html',
  styleUrls: ['./footer-unrouted.component.css']
})
export class FooterUnroutedComponent implements OnInit {

  constructor(public oMetadataService: MetadataService) { }

  ngOnInit() {
  }

}
