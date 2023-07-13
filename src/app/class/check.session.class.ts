import { Router } from "@angular/router";
import { IUsuario } from "../model/usuario-interfaces";
import { SessionEvent, SessionEvents, SessionService } from "../service/session.service";

export class CheckSession {

    oUserSession: IUsuario;

    constructor(
        profile: string,
        protected oRouter: Router,
        protected oSessionService: SessionService        
    ) {
        if (this.oSessionService.isSessionActive()) {
            this.oSessionService.getUsuario().subscribe({
                next: (oData: IUsuario) => {
                    this.oUserSession = oData;
                    if (this.oUserSession.tipousuario.nombre != profile) {
                        this.oRouter.navigate(['/', 'home']);
                    }
                }
            });
        } else {
            this.oRouter.navigate(['/', 'home']);
            // notify
            this.oSessionService.logout();
            this.oSessionService.emit(new SessionEvent(SessionEvents.logout));
        }
    }

}