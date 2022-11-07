import { ActivatedRoute, Router } from "@angular/router";
import { IUsuario } from "../model/usuario-interfaces";

export class CheckSession {

    oUserSession: IUsuario;

    constructor(
        protected oRouter: Router,
        protected oRoute: ActivatedRoute,
    ) {
        if (this.oRoute.snapshot.data.message) {
            this.oUserSession = this.oRoute.snapshot.data.message;
            localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
        } else {
            localStorage.clear();
            this.oRouter.navigate(['/home']);
        }
    }

}