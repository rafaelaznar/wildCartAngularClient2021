import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class MetadataService {

  constructor() { }

  // TODO: crear tipo entity, tipo operation y tipo system

  //pruebas:

  public getFilterMsg(strFilter: string, strEntity1: string, entity1Filter: number, strEntity2: string, entity2Filter: number): string {
    if (entity1Filter !== null && entity1Filter !== undefined) {
      if (entity2Filter !== null && entity2Filter !== undefined) {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getArticledName4Entity(strEntity1) + ' con id=' + entity1Filter + ', por ' + this.getArticledName4Entity(strEntity2) + ' con id=' + entity2Filter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getArticledName4Entity(strEntity1) + ' con id=' + entity1Filter + ', por ' + this.getArticledName4Entity(strEntity2) + ' con id=' + entity2Filter + ' y sin filtro';
        }
      } else {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getArticledName4Entity(strEntity1) + ' con id=' + entity1Filter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getArticledName4Entity(strEntity1) + ' con id=' + entity1Filter + ' y sin filtro';
        }
      }
    } else {
      if (entity2Filter !== null && entity2Filter !== undefined) {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getArticledName4Entity(strEntity2) + ' con id=' + entity2Filter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getArticledName4Entity(strEntity2) + ' con id=' + entity2Filter + ' y sin filtro';
        }
      } else {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por el filtro ' + strFilter;
        } else {
          return 'Sin filtro';
        }
      }
    }
  }

  public getIcon4Entity(strEntity: string): string {
    switch (true) {
      case strEntity == "system": return "fas fa-shopping-basket";
      case strEntity == "producto": return "fas fa-gift";
      case strEntity == "tipoproducto": return "fas fa-tag";
      case strEntity == "usuario": return "fas fa-user";
      case strEntity == "tipousuario": return "fas fa-user-tag";
      case strEntity == "compra": return "fas fa-cash-register";
      case strEntity == "factura": return "fas fa-file-invoice-dollar";
      case strEntity == "carrito": return "fas fa-shopping-cart";
      default: return 'fas fa-question';
    }
  }

  public getIcon4Operation(strOperation: string): string { //from API
    switch (true) {
      case strOperation == "view": return "fas fa-eye";
      case strOperation == "plist": return "fas fa-list";
      case strOperation == "selection": return "fas fa-bullseye";
      case strOperation == "list": return "fas fa-stream";
      case strOperation == "remove": return "fas fa-trash";
      case strOperation == "new": return "fas fa-plus";
      case strOperation == "edit": return "fas fa-pen";
      case strOperation == "random": return "fas fa-random";
      default: return 'fas fa-question';

    }
  }



  getName4Operation(strOperation: string): string {
    switch (true) {
      case strOperation == "view": return "Ver";
      case strOperation == "plist": return "Listado";
      case strOperation == "selection": return "Selección";
      case strOperation == "list": return "Listado";
      case strOperation == "remove": return "Eliminar";
      case strOperation == "new": return "Nuevo";
      case strOperation == "edit": return "Editar";
      case strOperation == "random": return "Aleatorio";
      default: return 'Desconocido';
    }
  }



  getSystemLabel(strSystemOperation: string): string {
    switch (true) {
      case strSystemOperation == "home": return "Página principal";
      case strSystemOperation == "user": return "Detalle de usuario en sesión";
      case strSystemOperation == "random": return "Generación aleatoria de registros";
      case strSystemOperation == "print": return "Impresión de informes";
      case strSystemOperation == "actions": return "Acciones";
      default: return 'Desconocido';
    }
  }

  getSystemAction(strSystemOperation: string): string {
    switch (true) {
      case strSystemOperation == "return": return "Volver";
      case strSystemOperation == "home": return "Ir a la página principal";
      case strSystemOperation == "yes": return "Sí";
      case strSystemOperation == "no": return "No";
      default: return 'Desconocido';
    }
  }




  getArticledName4Entity(strEntity: string): string {
    switch (true) {
      case strEntity == "system": return "el sistema";
      case strEntity == "producto": return "el producto";
      case strEntity == "tipoproducto": return "el tipo de producto";
      case strEntity == "usuario": return "el usuario";
      case strEntity == "tipousuario": return "el tipo de usuario";
      case strEntity == "compra": return "la compra";
      case strEntity == "factura": return "la factura";
      case strEntity == "carrito": return "el carrito";
      default: return 'Desconocido';
    }
  }

  getPluralArticledName4Entity(strEntity: string): string {
    switch (true) {
      case strEntity == "system": return "los sistemas";
      case strEntity == "producto": return "los productos";
      case strEntity == "tipoproducto": return "los tipos de producto";
      case strEntity == "usuario": return "los usuarios";
      case strEntity == "tipousuario": return "los tipos de usuario";
      case strEntity == "compra": return "las compras";
      case strEntity == "factura": return "las facturas";
      case strEntity == "carrito": return "los carritos";
      default: return 'Desconocido';
    }
  }








  getOperationTitle(strOperation: string): string {
    switch (true) {
      case strOperation == "view": return "Vista de ";
      case strOperation == "plist": return "Listado de ";
      case strOperation == "selection": return "Selección de ";
      case strOperation == "list": return "Listado de ";
      case strOperation == "remove": return "Borrado de ";
      case strOperation == "new": return "Alta de ";
      case strOperation == "edit": return "Edición de ";
      default: return 'Desconocido';
    }
  }

  getPluralName4Entity(strEntity: string): string {
    switch (true) {
      case strEntity == "system": return "Sistemas";
      case strEntity == "producto": return "Productos";
      case strEntity == "tipoproducto": return "Tipos de producto";
      case strEntity == "usuario": return "Usuarios";
      case strEntity == "tipousuario": return "Tipos de usuario";
      case strEntity == "compra": return "Compras";
      case strEntity == "factura": return "Facturas";
      case strEntity == "carrito": return "Carritos";
      default: return 'Desconocido';
    }
  }


  getTitle(strEntity: string, strOperation: string): string {
    switch (true) {
      case strEntity == "system": return this.getSystemLabel(strOperation);
      default: return this.getOperationTitle(strOperation) + this.getPluralName4Entity(strEntity);
    }
  }

  getOperationAction(strOperation: string): string {
    switch (true) {
      case strOperation == "view": return "Ver ";
      case strOperation == "plist": return "Ir al listado de ";
      case strOperation == "selection": return "Seleccionar ";
      case strOperation == "list": return "Ir al listado de ";
      case strOperation == "remove": return "Eliminar ";
      case strOperation == "new": return "Añadir ";
      case strOperation == "edit": return "Editar ";
      default: return 'Desconocido';
    }
  }


  getSingularName4Entity(strEntity: string): string {
    switch (true) {
      case strEntity == "system": return "Sistema";
      case strEntity == "producto": return "Producto";
      case strEntity == "tipoproducto": return "Tipo de producto";
      case strEntity == "usuario": return "Usuario";
      case strEntity == "tipousuario": return "Tipo de usuario";
      case strEntity == "compra": return "Compra";
      case strEntity == "factura": return "Factura";
      case strEntity == "carrito": return "Carrito";
      default: return 'Desconocido';
    }
  }

  getActionTitle(strEntity: string, strOperation: string): string {
    switch (true) {
      case strEntity == "system": return this.getSystemLabel(strOperation);
      default: return this.getOperationAction(strOperation) + this.getSingularName4Entity(strEntity).toLowerCase();
    }
  }

  getConfirmationMessage(strEntity: string, strOperation: string): string {
    switch (true) {
      case strOperation == "remove": return "¿Estás seguro de que quieres eliminar " + this.getArticledName4Entity(strEntity) + "?";

      default: return 'Desconocido';
    }
  }








  /////////////////////////////////////////
  // OLD (TODO: REMOVE)
  /////////////////////////////////////////

  public getIcon(strIcon: string): string {

    switch (true) {
      // 
      case strIcon == "fecha": return "far fa-clock"; //cambiar a date
      case strIcon == "cantidad": return "fas fa-mountain"; //amount
      case strIcon == "euro": return "fas fa-euro-sign";
      case strIcon == "precio": return "fas fa-euro-sign"; //price
      case strIcon == "porcentaje": return "fas fa-percent"; //percent
      case strIcon == "descuento": return "fas fa-percent";
      case strIcon == "codigo": return "fas fa-barcode"; //code
      case strIcon == "imagen": return "fas fa-camera"; //image
      //
      case strIcon == "print": return "fas fa-print";
      case strIcon == "imprimir": return "fas fa-print";
      case strIcon == "informe": return "fas fa-file-alt"; //cambiar a report
      case strIcon.startsWith("report"): return "fas fa-copy";
      // 
      case strIcon == "home": return "fas fa-home";
      case strIcon == "login": return "fas fa-sign-in-alt";
      case strIcon == "logout": return "fas fa-sign-out-alt";
      case strIcon == "usuarios": return "fas fa-user-friends";

      case strIcon == "entradaSistema": return "fas fa-sign-in";
      case strIcon == "salidaSistema": return "fas fa-sign-in";
      case strIcon == "reset": return "fas fa-brush";
      case strIcon == "carroImagenes": return "fas fa-cart-plus";
      // 
      case strIcon == "filtro": return "fas fa-filter";
      case strIcon == "buscar": return "fas fa-search";
      case strIcon == "rpp": return "fas fa-file-alt";
      // 
      case strIcon == "seleccionar": return "fas fa-check";
      case strIcon == "ok": return "fas fa-check-square";
      case strIcon == "aceptar": return "fas fa-check-circle";
      case strIcon == "rechazar": return "fas fa-times-circle";
      case strIcon == "volver": return "fas fa-arrow-circle-left";


      case strIcon == "seleccion": return "fas fa-bullseye";
      //
      //
      //
      //
      //
      // 
      case strIcon == "tools": return "fas fa-tools";
      case strIcon == "acciones": return "fas fa-tools"; //ojo borrar

      case strIcon == "view": return "fas fa-eye";
      case strIcon == "plist": return "fas fa-list";
      case strIcon == "listado": return "fas fa-stream";
      case strIcon == "remove": return "fas fa-trash";
      case strIcon == "new": return "fas fa-plus";
      case strIcon == "edit": return "fas fa-pen";
      case strIcon == "random": return "fas fa-random";
      case strIcon == "save": return "fas fa-floppy-disk";
      // 
      case strIcon == "orderUp": return "fas fa-arrow-up";
      case strIcon == "orderDown": return "fas fa-arrow-down";
      //
      // entities
      case strIcon == "system": return "fas fa-shopping-basket";
      case strIcon == "producto": return "fas fa-gift";
      case strIcon == "tipoproducto": return "fas fa-tag";
      case strIcon == "usuario": return "fas fa-user";
      case strIcon == "tipousuario": return "fas fa-user-tag";
      case strIcon == "compra": return "fas fa-cash-register";
      case strIcon == "factura": return "fas fa-file-invoice-dollar";
      case strIcon == "carrito": return "fas fa-shopping-cart";
      // id      
      case strIcon == "id": return "fas fa-key";
      // fields - usuario      
      case strIcon == "dni": return "fas fa-address-card";
      case strIcon == "nombre": return "fas fa-signature";
      case strIcon == "apellido1": return "fas fa-signature";
      case strIcon == "apellido2": return "fas fa-signature";
      case strIcon == "email": return "fas fa-at";
      case strIcon == "validado": return "fas fa-user-check";
      case strIcon == "activado": return "fas fa-flag-checkered";
      //

      //
      case strIcon == "github": return "fab fa-github";
      case strIcon == "github-alt": return "fab fa-github-alt";
      //
      default: return 'fas fa-question';





    }

  }
}

