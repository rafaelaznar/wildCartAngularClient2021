import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  oUsuarioSession: IUsuario = null;

  constructor(
    private oRoute: ActivatedRoute,
    private oActivatedRoute: ActivatedRoute,
    private oCarritoService: CarritoService,
    private oSessionService: SessionService
  ) {

    if (this.oSessionService.isSessionActive()) {
      this.oSessionService.getUsuario().subscribe((oData: IUsuario) => {
        this.oUsuarioSession = oData;
      });
    } else {
      this.oUsuarioSession = null;
    }
  }

  ngOnInit(): void { }

  onChangeCarrito(id_producto: number) {
    this.oCarritoService.notifyCarritoChange('');
  }

}
