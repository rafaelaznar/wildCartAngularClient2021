import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';


import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-find-unrouted]',
  templateUrl: './find-unrouted.component.html',
  styleUrls: ['./find-unrouted.component.css']
})
export class findUnroutedComponent implements OnInit {
  @Input() entity: string = "";
  @Input() description: string = "";
  @Input() id: number = null;
  @Output() selection = new EventEmitter<number>();

  constructor(
    public oIconService: IconService
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
    //this.oRouter.navigate(['factura/view/' + this.id]);
  }

  closeModal(): void {
    this.eventsSubjectHideModal.next();
    this.showingModal = false;
  }

  onSelection($event: any) {
    console.log("find onSelection evento recibido: " + $event)
    this.id = $event;
    this.closeModal();
    this.selection.emit($event);
    //this.oForm.controls['id_usuario'].setValue($event);

  }

  onChangeForeign($event: any) {
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
