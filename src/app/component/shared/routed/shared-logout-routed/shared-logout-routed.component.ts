import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionEvent, SessionEvents, SessionService } from 'src/app/service/session.service';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'app-shared-logout-routed',
  templateUrl: './shared-logout-routed.component.html',
  styleUrls: ['./shared-logout-routed.component.css']
})

export class SharedLogoutRoutedComponent implements OnInit {

  strOperation: string = 'logout'
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
    this.oSessionService.logout();
    this.oCarritoService.notifyCarritoChange('logout');
    this.oSessionService.emit(new SessionEvent(SessionEvents.logout));
    this.oRouter.navigate(['/', 'home']);
  }

  ngOnInit(): void { }

}
