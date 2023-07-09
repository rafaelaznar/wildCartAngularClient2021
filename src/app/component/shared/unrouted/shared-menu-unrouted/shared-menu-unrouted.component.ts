import { CarritoService } from '../../../../service/carrito.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionEvents, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-shared-menu-unrouted',
  templateUrl: './shared-menu-unrouted.component.html',
  styleUrls: ['./shared-menu-unrouted.component.css']
})
export class SharedMenuUnroutedComponent implements OnInit {

  //private carritoEventsSubscription: Subscription;
  //@Input() carritoMenuObservable: Observable<{ action: string, data: number }>;

  oUsuarioSession: IUsuario;

  nCarritos: number = 0;
  strUrl: String = "";
  tcarrito: number

  constructor(
    private router: Router,
    public oMetadataService: MetadataService,
    private oCarritoService: CarritoService,
    private oSessionService: SessionService
  ) {

    //this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
    /*
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.strUrl = ev.url;
      }
    })
    */
    if (this.oSessionService.isSessionActive()) {
      this.oSessionService.getUsuario().subscribe((oData: IUsuario) => {
        this.oUsuarioSession = oData;
        this.count();
      });
    } else {
      this.oUsuarioSession = null;
    }


  }

  ngOnInit(): void {



    this.oSessionService.on(SessionEvents.login).subscribe({
      next: () => {
        this.oSessionService.getUsuario().subscribe((oData: IUsuario) => {
          this.oUsuarioSession = oData;

        });
        this.count();
      }
    });
    this.oSessionService.on(SessionEvents.logout).subscribe({
      next: () => {
        this.oUsuarioSession = null;
        this.count();
      }
    });


    /*
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
 */

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

  ngOnDestroy() {
    //this.oCarritoService.onCarritoChangeSubject.unsubscribe();
    //this.oSessionService.on(SessionEvents.login).unsubscribe();
    /*
    if (this.carritoMenuObservable) {
      this.carritoEventsSubscription.unsubscribe();
    }
    */
  }

  count = () => {
    if (this.oSessionService.isSessionActive()) {
      this.oCarritoService.getCount().subscribe((oData: number) => {
        this.tcarrito = oData;
        this.nCarritos = this.tcarrito;
      })
    }
  }

}
