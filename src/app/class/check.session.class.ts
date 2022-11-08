import { ActivatedRoute, Router } from "@angular/router";
import { IUsuario } from "../model/usuario-interfaces";

export class CheckSession {

    oUserSession: IUsuario;

    constructor(
        profile: string,
        protected oRouter: Router,
        protected oRoute: ActivatedRoute,
    ) {
        if (this.oRoute.snapshot.data.message) {
            this.oUserSession = this.oRoute.snapshot.data.message;
            if (this.oUserSession.tipousuario.nombre == profile) {
                localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
            } else {
                localStorage.clear();
                this.oRouter.navigate(['/','home']);
            }
        } else {
            localStorage.clear();
            this.oRouter.navigate(['/','home']);
        }
    }

}