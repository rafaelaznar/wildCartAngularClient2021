import { CarritoService } from './../../../../service/carrito.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { IconService } from 'src/app/service/icon.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private carritoEventsSubscription: Subscription;
  @Input() carritoMenuObservable: Observable<{ action: string, data: number }>;

  oUsuarioSession: IUsuario;
  strUrl: String = "";
  tcarrito: number

  constructor(
    private router: Router,
    public oIconService: IconService,
    private oCarritoService: CarritoService,
  ) {

    this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.strUrl = ev.url;
      }
    })

  }

  ngOnInit(): void {
    this.count();
    this.carritoEventsSubscription = this.carritoMenuObservable.subscribe((data) => {
      console.log("action:" + data.action, "data:" + data.data)
      this.count()
    });
  }

  ngOnDestroy() {
    this.carritoEventsSubscription.unsubscribe();
  }

  count = () => {
    this.oCarritoService.getCount().subscribe((oData: number) => {
      this.tcarrito = oData;
    })
  }

}
