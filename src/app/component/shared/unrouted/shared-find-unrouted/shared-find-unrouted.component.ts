import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-shared-find-unrouted]',
  templateUrl: './shared-find-unrouted.component.html',
  styleUrls: ['./shared-find-unrouted.component.css']
})

export class SharedFindUnroutedComponent implements OnInit {
  @Input() entity: string = '';
  @Input() description: string = '';
  @Input() id: number = null;
  @Output() selection = new EventEmitter<number>();

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.dirty = false;
  }

  //modal
  
  dirty: boolean = false;
  showingModal: boolean = false;

  eventsSubjectShowModal: Subject<void> = new Subject<void>();
  eventsSubjectHideModal: Subject<void> = new Subject<void>();

  openModal(): void {
    this.eventsSubjectShowModal.next();
    this.showingModal = true;
  }

  onCloseModal(): void {
  }

  closeModal(): void {
    this.eventsSubjectHideModal.next();
    this.showingModal = false;
  }

  onSelection($event: number) {
    this.id = $event;
    this.closeModal();
    this.selection.emit($event);
  }

  onChangeForeign($event: number) {    
    this.dirty = true;
    if (this.showingModal) {
      this.closeModal();
    }
    this.selection.emit($event);
  }

  generateRandomIntegerInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
