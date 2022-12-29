import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  usuarioSession: IUsuario = null;
  tipousuarioSession_id: number = null;

  constructor(
    private oRoute: ActivatedRoute,
    private oActivatedRoute: ActivatedRoute,
    private oCarritoService: CarritoService
  ) {

    if (this.oActivatedRoute.snapshot.data && this.oRoute.snapshot.data.message) {
      this.usuarioSession = this.oRoute.snapshot.data.message;
      this.tipousuarioSession_id = this.usuarioSession.tipousuario.id;
      localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    } else {
      localStorage.clear();
    }

  }

  ngOnInit(): void { }

  onChangeCarrito(id_producto: number) {
    this.oCarritoService.notifyCarritoChange('');
  }

}
