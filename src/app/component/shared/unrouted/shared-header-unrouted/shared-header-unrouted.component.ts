import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-header-unrouted',
  templateUrl: './shared-header-unrouted.component.html',
  styleUrls: ['./shared-header-unrouted.component.css']
})
export class SharedHeaderUnroutedComponent implements OnInit {
  
  @Input() title: string = "wildCart";  
  @Input() subtitle: string = "wildCart";  
  @Input() filter: string = "";
  @Input() icon: string = "";
  @Input() iconEntity: string = "";
  
  constructor() { }

  ngOnInit() {
  }

}
