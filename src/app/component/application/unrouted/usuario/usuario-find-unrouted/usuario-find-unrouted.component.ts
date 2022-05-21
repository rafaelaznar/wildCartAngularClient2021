import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';

@Component({
  selector: '[app-usuario-find-unrouted]',
  templateUrl: './usuario-find-unrouted.component.html',
  styleUrls: ['./usuario-find-unrouted.component.css']
})
export class UsuarioFindUnroutedComponent implements OnInit {
  @Input() entity: string = "";
  @Input() description: string = "";
  @Input() id: number = null;
  @Output() selection = new EventEmitter<number>();
  constructor(
    public oIconService: IconService
  ) { }

  ngOnInit() {
    this.dirty=false;
  }

  //modal

  fila: IUsuario;
  dirty: boolean = false;
  showingModal: boolean = false;

  eventsSubjectShowModal: Subject<void> = new Subject<void>();
  eventsSubjectHideModal: Subject<void> = new Subject<void>();

  openModal(): void {
    this.eventsSubjectShowModal.next();
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
    this.id=$event;
    this.closeModal();
    this.selection.emit($event);
    //this.oForm.controls['id_usuario'].setValue($event);
    
  }

  onChangeForeign($event: any) {
    console.log("find onChangeForeign evento recibido: " + $event)
    this.dirty=true;
    if (this.showingModal) {
      this.closeModal();
    }
    this.selection.emit($event);
  }

}
