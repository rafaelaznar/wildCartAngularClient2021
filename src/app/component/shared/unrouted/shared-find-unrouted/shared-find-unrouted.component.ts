import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';


import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: '[app-shared-find-unrouted]',
  templateUrl: './shared-find-unrouted.component.html',
  styleUrls: ['./shared-find-unrouted.component.css']
})
export class SharedFindUnroutedComponent implements OnInit {
  @Input() entity: string = "";
  @Input() description: string = "";
  @Input() id: number = null;
  @Output() selection = new EventEmitter<number>();

  constructor(
    public oMetadataService: MetadataService
  ) { }

  ngOnInit() {
    this.dirty = false;
    //console.log("----->>>>>" + this.entity);
  }

  //modal

  //fila: ITipousuario;
  dirty: boolean = false;
  showingModal: boolean = false;

  eventsSubjectShowModal: Subject<void> = new Subject<void>();
  eventsSubjectHideModal: Subject<void> = new Subject<void>();

  //eventsSubjectShowModal: EventEmitter<void> = new EventEmitter();
  //eventsSubjectHideModal: EventEmitter<void> = new EventEmitter();

  openModal(): void {
    //console.log("----->>>>>" + this.entity);
    this.eventsSubjectShowModal.next();
    //console.log(this.eventsSubjectShowModal)
    this.showingModal = true;
  }

  onCloseModal(): void {
    //this.oRouter.navigate(['/','factura/view/' + this.id]);
  }

  closeModal(): void {
    this.eventsSubjectHideModal.next();
    this.showingModal = false;
  }

  onSelection($event: number) {
    console.log("find onSelection evento recibido: " + $event)
    this.id = $event;
    this.closeModal();
    this.selection.emit($event);
    //this.oForm.controls['id_usuario'].setValue($event);

  }

  onChangeForeign($event: number) {
    //console.log("find onChangeForeign evento recibido: " + $event)
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
