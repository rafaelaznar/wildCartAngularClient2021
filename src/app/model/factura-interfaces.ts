import { IFecha } from "./model-interfaces";
import { IUsuario } from "./usuario-interfaces";
import { IEntity, IEntity2Send, IPage } from "./model-interfaces";

export interface IFactura extends IEntity {
    iva: number,
    fecha: IFecha,
    pagado: boolean,
    compras: number,
    usuario: IUsuario,
}
export interface IFactura2Send extends IEntity2Send {
    fecha: string,
    iva: number,
    pagado: boolean,
    usuario: IEntity2Send
}

export interface IPageFactura extends IPage<IFactura> {
}
