import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Constants } from 'src/app/constant/constants';
import { MetadataService } from 'src/app/service/metadata.service';

declare let bootstrap: any;

@Component({
  selector: 'app-shared-popup-unrouted',
  templateUrl: './shared-popup-unrouted.component.html',
  styleUrls: ['./shared-popup-unrouted.component.css']
})

export class SharedPopupUnroutedComponent implements OnInit {

  // https://stackoverflow.com/questions/44053227/how-to-emit-an-event-from-parent-to-child

  @Input() show: Observable<string>;
  @Input() title: string = Constants.APP_NAME;
  @Input() body: string = '';
  @Input() size: string = '';
  @Input() icon: string = '';
  @Output() close = new EventEmitter<Event>();
  //
  private eventsSubscriptionShow: Subscription;
  //
  myPopup: any;
  strMsg: string = '';

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.eventsSubscriptionShow = this.show.subscribe({ next: (str: string) => this.showModal(str) });
  }

  ngOnDestroy() {
    this.eventsSubscriptionShow.unsubscribe();
  }

  showModal = (str: string) => {
    this.strMsg = str;
    this.myPopup = new bootstrap.Modal(document.getElementById('myPopup'), {
      keyboard: false
    })
    var myPopupEl = document.getElementById('myPopup');
    myPopupEl.addEventListener('hidden.bs.modal', (event): void => {
      this.close.emit(event);
    })
    this.myPopup.show()
  }

}
