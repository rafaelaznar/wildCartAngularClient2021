import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckSession } from 'src/app/class/check.session.class';
import { Constants } from 'src/app/constant/constants';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-carrito-plist-user-routed',
  templateUrl: './carrito-plist-user-routed.component.html',
  styleUrls: ['./carrito-plist-user-routed.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CarritoPlistUserRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.user;
  strEntity: string = Constants.ENTITIES.cart;
  strOperation: string = Constants.OPERATIONS.plist;
  oUserSession: IUsuario;
  id_producto: number = null;
  id_usuario: number = null;
  tipousuarioSession_id: number = null;

  constructor(
    protected oRouter: Router,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oCarritoService: CarritoService,
    protected oSessionService: SessionService
  ) {
    super(Constants.PROFILES.user, oRouter, oSessionService);
    this.id_producto = this.oActivatedRoute.snapshot.params.id_producto;
    this.id_usuario = this.oActivatedRoute.snapshot.params.id_usuario;
  }

  ngOnInit(): void { }

  onAddCarrito(id_producto: number) {
    this.oCarritoService.notifyCarritoChange('add');
  }

  onPurchase(): void {
    if (confirm('¿Está seguro de que desea realizar la compra de los productos en el carrito?')) {
      this.oCarritoService.purchase().subscribe(
        (data) => {
          console.log(data);
          this.oCarritoService.notifyCarritoChange('purchase');
          alert('Compra realizada con éxito. Se ha generado la factura número ' + data + ".");
          this.oRouter.navigate(['/', 'usuario', 'factura', 'plist']);
        }
      )
    }
  }

}
