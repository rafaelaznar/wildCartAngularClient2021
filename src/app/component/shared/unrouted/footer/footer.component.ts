import { Component, OnInit } from '@angular/core';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public oMetadataService: MetadataService) { }

  ngOnInit() {
  }

}
