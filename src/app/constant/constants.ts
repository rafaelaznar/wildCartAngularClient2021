export abstract class Constants {

    static readonly APP_NAME = "WildCart";

    static readonly OPERATIONS = {
        plist: "plist", gplist:'gplist', list: "list", view: "view", new: "new", edit: "edit", remove: "remove", print: "print"
    };

    static readonly ENTITIES = {
        user: "usuario", product: "producto", purchase: "compra", usertype: "tipousuario", producttype: "tipoproducto", invoice: "factura", cart: "carrito", report: "informe", comment: "comment"
    };
    
    static readonly PROFILES = {
        admin: "administrador", user: "usuario", guest: "guest"
    };
}