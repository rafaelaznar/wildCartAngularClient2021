import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class MetadataService {

  constructor() { }

  // TODO: crear tipo entity, tipo operation y tipo system

  //pruebas:



  public getIcon(strIcon: string): string {
    switch (true) {  
      case strIcon == "system": return "fas fa-shopping-basket";
      //-- entities  
      case strIcon == "usuario": return "fas fa-user";
      case strIcon == "tipousuario": return "fas fa-user-tag";
      case strIcon == "producto": return "fas fa-gift";
      case strIcon == "tipoproducto": return "fas fa-tag";
      case strIcon == "compra": return "fas fa-cash-register";
      case strIcon == "factura": return "fas fa-file-invoice-dollar";
      case strIcon == "carrito": return "fas fa-shopping-cart";
      //-- operations
      case strIcon == "view": return "fas fa-eye";
      case strIcon == "plist": return "fas fa-list";
      case strIcon == "selection": return "fas fa-bullseye";
      case strIcon == "list": return "fas fa-stream";
      case strIcon == "remove": return "fas fa-trash";
      case strIcon == "new": return "fas fa-plus";
      case strIcon == "edit": return "fas fa-pen";
      case strIcon == "random": return "fas fa-random";
      //-- fields
      case strIcon == "id": return "fas fa-hashtag";
      //
      case strIcon == "dni": return "fas fa-address-card";
      case strIcon == "nombre": return "fas fa-signature";
      case strIcon == "apellido1": return "fas fa-signature";
      case strIcon == "apellido2": return "fas fa-signature";
      case strIcon == "email": return "fas fa-at";
      case strIcon == "login": return "fas fa-user";
      case strIcon == "password": return "fas fa-key";
      case strIcon == "descuento": return "fas fa-percentage";
      case strIcon == "token": return "fas fa-barcode";
      case strIcon == "validado": return "fas fa-user-check";
      case strIcon == "activo": return "fas fa-flag-checkered";
      //
      case strIcon == "descripcion": return "fas fa-signature";
      //
      case strIcon == "codigo": return "fas fa-barcode";
      case strIcon == "precio": return "fas fa-euro-sign";
      case strIcon == "existencias": return "fas fa-boxes";
      case strIcon == "imagen": return "fas fa-image";
      //
      case strIcon == "fecha": return "fas fa-calendar";
      case strIcon == "iva": return "fas fa-percentage";
      case strIcon == "pagado": return "fas fa-check";
      //
      case strIcon == "cantidad": return "fas fa-sort-numeric-up";
      case strIcon == "precio": return "fas fa-euro-sign";
      case strIcon == "descuento_usuario": return "fas fa-percentage";
      case strIcon == "descuento_producto": return "fas fa-percentage";
      // SYSTEM
      case strIcon == "date": return "far fa-calendar-alt";
      case strIcon == "time": return "far fa-clock"; //cambiar a date
      case strIcon == "quantity": return "fas fa-mountain"; //amount
      case strIcon == "euro": return "fas fa-euro-sign";
      case strIcon == "dollar": return "fas fa-dollar-sign";
      case strIcon == "price": return "fas fa-euro-sign"; //price
      case strIcon == "percent": return "fas fa-percent"; //percent      
      case strIcon == "code": return "fas fa-barcode"; //code
      case strIcon == "image": return "fas fa-camera"; //image      
      case strIcon == "print": return "fas fa-print";
      case strIcon == "dashboard": return "fas fa-tachometer-alt";
      case strIcon == "report": return "fas fa-file-alt"; //cambiar a report
      case strIcon.startsWith("report"): return "fas fa-copy";
      case strIcon == "home": return "fas fa-home";
      case strIcon == "login": return "fas fa-sign-in-alt";
      case strIcon == "logout": return "fas fa-sign-out-alt";
      case strIcon == "users": return "fas fa-user-friends";
      case strIcon == "getin": return "fas fa-sign-in";
      case strIcon == "logout": return "fas fa-sign-in";
      case strIcon == "reset": return "fas fa-brush";
      case strIcon == "filter": return "fas fa-filter";
      case strIcon == "search": return "fas fa-search";
      case strIcon == "rpp": return "fas fa-file-alt";
      case strIcon == "selection": return "fas fa-bullseye";
      case strIcon == "ok": return "fas fa-check-square";
      case strIcon == "return": return "fas fa-arrow-circle-left";
      case strIcon == "tools": return "fas fa-tools";
      case strIcon == "random": return "fas fa-random";
      case strIcon == "save": return "fas fa-floppy-disk";
      case strIcon == "accept": return "fas fa-check-circle";
      case strIcon == "reject": return "fas fa-times-circle";
      case strIcon == "orderUp": return "fas fa-arrow-up";
      case strIcon == "orderDown": return "fas fa-arrow-down";
      case strIcon == "github": return "fab fa-github";
      case strIcon == "github2": return "fab fa-github-alt";      
      //
      default: return 'fas fa-question';
    }
  }

  public getName(str: string): string {
    switch (true) {
      // entidades
      case str == "system": return "Sistema";
      case str == "systems": return "Sistemas";
      case str == "thesystem": return "El sistema";
      case str == "thesystems": return "Los sistemas";
      //
      case str == "producto": return "Producto";
      case str == "productos": return "Productos";
      case str == "theproduct": return "El producto";
      case str == "theproducts": return "Los productos";
      //
      case str == "tipoproducto": return "Tipo de producto";
      case str == "tipoproductos": return "Tipos de producto";
      case str == "thetipoproducto": return "El tipo de producto";
      case str == "thetipoproductos": return "Los tipos de producto";
      //
      case str == "usuario": return "Usuario";
      case str == "usuarios": return "Usuarios";
      case str == "theusuario": return "El usuario";
      case str == "theusuarios": return "Los usuarios";
      //
      case str == "tipousuario": return "Tipo de usuario";
      case str == "tipousuarios": return "Tipos de usuario";
      case str == "thetipousuario": return "El tipo de usuario";
      case str == "thetipousuarios": return "Los tipos de usuario";
      //
      case str == "compra": return "Compra";
      case str == "compras": return "Compras";
      case str == "thecompra": return "La compra";
      case str == "thecompras": return "Las compras";
      //
      case str == "factura": return "Factura";
      case str == "facturas": return "Facturas";
      case str == "thefactura": return "La factura";
      case str == "thefacturas": return "Las facturas";
      //
      case str == "carrito": return "carrito";
      case str == "carritos": return "carritos";
      case str == "thecarrito": return "el carrito";
      case str == "thecarritos": return "los carritos";
      //operaciones
      case str == "view": return "Ver";
      case str == "goview": return "Ir a la vista";
      case str == "views": return "Vistas";
      case str == "viewing": return "Viendo";
      case str == "theview": return "La vista";
      case str == "theviews": return "Las vistas";
      //
      case str == "plist": return "Listado";
      case str == "goplist": return "Ir al listado";
      case str == "plists": return "Listados";
      case str == "plisting": return "Listando";
      case str == "theplist": return "El listado";
      case str == "theplists": return "Los listados";
      //
      case str == "selection": return "Selección";
      case str == "goselection": return "Ir a la selección";
      case str == "selections": return "Selecciones";
      case str == "selecting": return "Seleccionando";
      case str == "theselection": return "La selección";
      case str == "theselections": return "Las selecciones";
      //
      case str == "list": return "Listado";
      case str == "golist": return "Ir al listado";
      case str == "lists": return "Listados";
      case str == "listing": return "Listando";
      case str == "thelist": return "El listado";
      case str == "thelists": return "Los listados";
      //
      case str == "remove": return "Eliminar";
      case str == "goremove": return "Ir a la eliminación";
      case str == "removes": return "Borrados";
      case str == "removing": return "Eliminando";
      case str == "theremove": return "El borrado";
      case str == "theremoves": return "Los borrados";
      //
      case str == "new": return "Nuevo";
      case str == "gonew": return "Ir a la creación";
      case str == "news": return "Altas";
      case str == "newing": return "Creando";
      case str == "thenew": return "El alta";
      case str == "thenews": return "Las altas";
      //
      case str == "edit": return "Editar";
      case str == "goedit": return "Ir a la edición";
      case str == "edits": return "Ediciones";
      case str == "editing": return "Editando";
      case str == "theedit": return "La edición";
      case str == "theedits": return "Las ediciones";
      //
      case str == "random": return "Aleatorio";
      case str == "gorandom": return "Ir a la creación aleatoria";
      case str == "randoms": return "Aleatorios";
      case str == "randoming": return "Creando registros aleatorios";
      case str == "therandom": return "La creación de registros aleatorios";
      case str == "therandoms": return "Las creaciones de registros aleatorios";
      // campos usuario
      case str == "dni": return "DNI";
      case str == "nombre": return "Nombre";
      case str == "apellido1": return "Primer apellido";
      case str == "apellido2": return "Segundo apellido";
      case str == "login": return "Login";
      case str == "password": return "Contraseña";
      case str == "email": return "Email";
      case str == "descuento": return "Descuento";
      case str == "token": return "Token";
      case str == "validado": return "Validado";
      case str == "activo": return "Activo";
      // campos producto
      case str == "codigo": return "Código";
      case str == "existencias": return "Existencias";
      case str == "precio": return "Precio";
      // campos compra
      case str == "cantidad": return "Cantidad";
      case str == "fecha": return "Fecha";
      case str == "descuento_usuario": return "Descuento usuario";
      case str == "descuento_producto": return "Descuento producto";
      // campos factura
      case str == "iva": return "IVA";
      case str == "pagado": return "Pagado";
      //      
      // sistema      
      case str == "id": return "ID";
      case str == "report": return "Informe";
      case str == "reports": return "Informes";
      case str == "action": return "Acción";
      case str == "actions": return "Acciones";
      case str == "order": return "Orden";
      case str == "ascending": return "Ascendente";
      case str == "descending": return "Descendente";
      case str == "home": return "Página principal";
      case str == "userprofile": return "Detalles del usuario en sesión";
      case str == "random": return "Generación aleatoria de registros";
      case str == "print": return "Impresión de informe";
      case str == "prints": return "Impresión de informes";
      case str == "actions": return "Acciones";
      case str == "return": return "Volver";
      case str == "home": return "Ir a la página principal";
      case str == "github": return "Github";
      case str == "save": return "Guardar";
      case str == "selection": return "Seleccionar";
      case str == "image": return "Imagen";
      case str == "form": return "Formulario";
      case str == "systemLogin": return "Entrada al sistema";
      case str == "systemLogout": return "Salida del sistema";
      case str == "reset": return "Limpiar";
      case str == "filter": return "Filtro";
      case str == "search": return "Buscar";
      case str == "find": return "Encontrar";
      case str == "rpp": return "Registros por página";
      case str == "page": return "Página";
      case str == "yes": return "Sí";
      case str == "no": return "No";
      case str == "accept": return "Aceptar";
      case str == "reject": return "Rechazar";
      case str == "description": return "Descripcion";
      //
      case str == "user-carritocontent": return "Contenido de tu carrito";
      case str == "productDetail": return "Detalle de producto";
      case str == "randomRegistersLoad": return "Carga aleatoria de registros";
      //
      default: return 'Desconocido';
    }
  }

  getTitle(strEntity: string, strOperation: string): string {
    return this.getName(strOperation) + ' de ' + this.getName(strEntity + 's').toLowerCase();
  }

  getActionTitle(strEntity: string, strOperation: string): string {
    return this.getName('go' + strOperation) + ' de ' + this.getName(strEntity).toLowerCase();
  }

  getConfirmationMessage(strEntity: string, strOperation: string): string {
    return "¿Está vd. seguro de que quiere " + this.getName(strOperation).toLowerCase() + ' ' + this.getName('the' + strEntity) + "?";
  }

  public getFilterMsg(strFilter: string, strEntity1: string, entity1Filter: number, strEntity2: string, entity2Filter: number): string {
    if (entity1Filter !== null && entity1Filter !== undefined) {
      if (entity2Filter !== null && entity2Filter !== undefined) {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getName('the' + strEntity1) + ' con id=' + entity1Filter + ', por ' + this.getName('the' + strEntity2) + ' con id=' + entity2Filter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getName('the' + strEntity1) + ' con id=' + entity1Filter + ', por ' + this.getName('the' + strEntity2) + ' con id=' + entity2Filter + ' y sin filtro';
        }
      } else {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getName('the' + strEntity1) + ' con id=' + entity1Filter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getName('the' + strEntity1) + ' con id=' + entity1Filter + ' y sin filtro';
        }
      }
    } else {
      if (entity2Filter !== null && entity2Filter !== undefined) {
        if (strFilter !== null && strFilter !== undefined && strFilter !== "") {
          return 'Filtrando por ' + this.getName('the' + strEntity2) + ' con id=' + entity2Filter + ' y por el filtro ' + strFilter;
        } else {
          return 'Filtrando por ' + this.getName('the' + strEntity2) + ' con id=' + entity2Filter + ' y sin filtro';
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



  /////////////////////////////////////////
  // OLD (TODO: REMOVE)
  /////////////////////////////////////////
  /*
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
  */




}

