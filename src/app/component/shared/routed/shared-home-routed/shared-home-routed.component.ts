import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-shared-home-routed',
  templateUrl: './shared-home-routed.component.html',
  styleUrls: ['./shared-home-routed.component.css']
})

export class SharedHomeRoutedComponent implements OnInit {

  oUsuarioSession: IUsuario = null;

  constructor(
    private oCarritoService: CarritoService,
    private oSessionService: SessionService
  ) {
    if (this.oSessionService.isSessionActive()) {
      this.oSessionService.getUsuario().subscribe({
        next: (oData: IUsuario) => {
          this.oUsuarioSession = oData;
        }
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
