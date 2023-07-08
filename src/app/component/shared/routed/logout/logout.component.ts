import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionEvent, SessionEvents, SessionService } from 'src/app/service/session.service';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { IUsuario } from 'src/app/model/usuario-interfaces';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  strOperation: string = "logout"
  //oUserSession: IUsuario;
  strUserName: string = null;

  constructor(
    private oRouter: Router,
    private oSessionService: SessionService,
    private oCarritoService: CarritoService,
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) {
    if (this.oSessionService.isSessionActive()) {
      this.strUserName = this.oSessionService.getUserName();
    } else {
      this.oRouter.navigate(['/home']);
    }
  }

  public closeSession() {
    /*
    this.oSessionService.logout().subscribe(data => {
      localStorage.clear();
      this.oSessionService.notifySessionChange('logout');
      this.oCarritoService.notifyCarritoChange('logout');
      this.oRouter.navigate(['/', 'home']);
    });
    */
    
    this.oSessionService.logout();
    this.oCarritoService.notifyCarritoChange('logout');
    this.oSessionService.emit(new SessionEvent(SessionEvents.logout));
    this.oRouter.navigate(['/', 'home']);

  }

  ngOnInit(): void { }

}
