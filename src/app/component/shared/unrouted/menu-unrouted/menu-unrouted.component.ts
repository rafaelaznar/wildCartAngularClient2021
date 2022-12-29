import { CarritoService } from '../../../../service/carrito.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menu-unrouted',
  templateUrl: './menu-unrouted.component.html',
  styleUrls: ['./menu-unrouted.component.css']
})
export class MenuUnroutedComponent implements OnInit {

  //private carritoEventsSubscription: Subscription;
  //@Input() carritoMenuObservable: Observable<{ action: string, data: number }>;

  oUsuarioSession: IUsuario;
  strUrl: String = "";
  tcarrito: number

  constructor(
    private router: Router,
    public oMetadataService: MetadataService,
    private oCarritoService: CarritoService,
    private oSessionService: SessionService
  ) {

    this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.strUrl = ev.url;
      }
    })

    this.oSessionService.onUserSessionChangeSubject.subscribe({
      next: (data) => {
        console.log("menu", "session", "action:" + data.action)
        this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
        if (this.oUsuarioSession) {
          this.tcarrito = this.oUsuarioSession.carritos;
        }
      },
      error: (error) => {
        console.log("error:", error)
        this.tcarrito = 0;
      }
    });

    this.oCarritoService.onCarritoChangeSubject.subscribe({
      next: (data) => {
        console.log("menu", "carrito", "action:" + data.action)
        this.count()
      },
      error: (error) => {
        console.log("error:", error)
      }
    });

  }

  ngOnInit(): void {
    this.count();
    /*
    if (this.carritoMenuObservable) {
      this.carritoEventsSubscription = this.carritoMenuObservable.subscribe((data) => {
        console.log("action:" + data.action, "data:" + data.data)
        this.count()
      });
    }
    */
  }

  ngOnDestroy() {
    this.oCarritoService.onCarritoChangeSubject.unsubscribe();
    this.oSessionService.onUserSessionChangeSubject.unsubscribe();
    /*
    if (this.carritoMenuObservable) {
      this.carritoEventsSubscription.unsubscribe();
    }
    */
  }

  count = () => {
    if (this.oUsuarioSession) {
      this.oCarritoService.getCount().subscribe((oData: number) => {
        this.tcarrito = oData;
        if (this.oUsuarioSession) {
          this.oUsuarioSession.carritos = this.tcarrito;
        }
      })
    }
  }

}
