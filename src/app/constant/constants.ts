export abstract class Constants {

    static readonly APP_NAME = "WildCart";

    static readonly OPERATIONS = {
        plist: "plist", gplist: 'gplist', list: "list", view: "view", new: "new", edit: "edit", remove: "remove", print: "print"
    };

    static readonly ENTITIES = {
        user: "usuario", product: "producto", purchase: "compra", usertype: "tipousuario", producttype: "tipoproducto", invoice: "factura", cart: "carrito", report: "informe", comment: "comment"
    };

    static readonly PROFILES = {
        admin: "administrador", user: "usuario", guest: "guest"
    };

    static readonly CALENDAR_ES = {
        firstDayOfWeek: 1,
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        today: 'Hoy',
        clear: 'Borrar',
        dateFormat: 'mm/dd/yyyy',
    }


}