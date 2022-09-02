import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { IUsuario } from 'src/app/model/usuario-interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {



  usuarioSession: IUsuario = null;
  tipousuarioSession_id: number = null;

  carritoHomeEventsSubject: Subject<{ action: string, data: number }> = new Subject<{ action: string, data: number }>();


  constructor(
    private oRoute: ActivatedRoute,
    private oActivatedRoute: ActivatedRoute
  ) {

    if (this.oActivatedRoute.snapshot.data && this.oRoute.snapshot.data.message) {
      this.usuarioSession = this.oRoute.snapshot.data.message;
      this.tipousuarioSession_id = this.usuarioSession.tipousuario.id;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
    }

  }

  ngOnInit(): void {
  }

  onAddCarrito(id_producto: number) {
    this.carritoHomeEventsSubject.next({ action: 'add', data: id_producto });
  }

}
