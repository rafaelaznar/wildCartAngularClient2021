import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rpp-unrouted',
  templateUrl: './rpp-unrouted.component.html',
  styleUrls: ['./rpp-unrouted.component.css']
})
export class RppUnroutedComponent implements OnInit {

  @Input() nPageSize: number = 10;
  @Output() selection = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onChangeRpp(nRpp:number){
    this.selection.emit(nRpp);
  }
  
}
