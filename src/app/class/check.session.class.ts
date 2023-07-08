import { Router } from "@angular/router";
import { IUsuario } from "../model/usuario-interfaces";
import { SessionService } from "../service/session.service";

export class CheckSession {

    oUserSession: IUsuario;

    constructor(
        profile: string,
        protected oRouter: Router,
        protected oSessionService: SessionService
    ) {        
        if (this.oSessionService.isSessionActive()) {
            this.oSessionService.getUsuario().subscribe((oData: IUsuario) => {
                this.oUserSession = oData;
                if (this.oUserSession.tipousuario.nombre != profile) {
                    this.oRouter.navigate(['/', 'home']);
                }    
            });
        } else {
            this.oRouter.navigate(['/', 'home']);
        }
    }

}