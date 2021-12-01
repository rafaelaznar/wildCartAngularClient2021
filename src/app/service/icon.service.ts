import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { }

  public getIcon(strIcon: string): string {

    switch (true) {
      // entities
      case strIcon == "system": return "fas fa-shopping-basket";
      case strIcon == "producto": return "fas fa-gift";
      case strIcon == "tipoproducto": return "fas fa-tag";
      case strIcon == "usuario": return "fas fa-user";
      case strIcon == "tipousuario": return "fas fa-user-friends";
      case strIcon == "compra": return "fas fa-cash-register";
      case strIcon == "factura": return "fas fa-file-invoice-dollar";
      case strIcon == "carrito": return "fas fa-shopping-cart";
      // operations
      case strIcon == "view": return "fas fa-eye";
      case strIcon == "plist": return "fas fa-list";
      case strIcon == "remove": return "fas fa-eraser";
      case strIcon == "new": return "fas fa-plus";
      case strIcon == "edit": return "fas fa-edit";
      case strIcon == "fill": return "fas fa-random";
      // menú
      case strIcon == "aleatorioMenu": return "fas fa-random";
      case strIcon == "listadoMenu": return "fas fa-stream";
      case strIcon == "newMenu": return "far fa-file";
      // login/logout
      case strIcon == "home": return "fas fa-home";
      case strIcon == "login": return "fas fa-user-friends";
      case strIcon == "logout": return "fas fa-sign-out-alt";
      case strIcon == "accesoSistema": return "fas fa-key";
      case strIcon == "entradaSistema": return "fas fa-sign-in";
      case strIcon == "salidaSistema": return "fas fa-sign-in";
      case strIcon == "resetLogin": return "fas fa-brush";
      case strIcon == "carroImagenes": return "fas fa-cart-plus";
      // tools
      case strIcon == "viewHerramientas": return "fas fa-eye";
      case strIcon == "editHerramientas": return "fas fa-edit";
      case strIcon == "removeHerramientas": return "far fa-times";
      case strIcon == "printHerramientas": return "fas fa-print";
      // forms
      case strIcon == "buscar": return "fas fa-search";
      case strIcon == "ok": return "fas fa-check-square";
      case strIcon == "reject": return "fas fa-times-circle";
      // arrows
      case strIcon == "flechaUp": return "fas fa-arrow-up";
      case strIcon == "flechaDown": return "fas fa-arrow-down";
      // selections
      case strIcon == "check": return "fas fa-check";
      case strIcon == "vista": return "fas fa-eye";
      // status
      case strIcon == "success": return "fas fa-check-circle";
      case strIcon == "fail": return "fas fa-bomb";
      //GitHub footer
      case strIcon == "github": return "fab fa-github";
      case strIcon == "github-alt": return "fab fa-github-alt";
      //Impresión
      case strIcon.startsWith("report"): return "fas fa-copy";
      default: return 'fas fa-question';
    }

  }
}

