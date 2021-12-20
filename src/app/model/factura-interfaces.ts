import { ICompra } from './compra-interfaces';
import { I2Send, IFecha } from "./model-interfaces";
import { IUsuario } from "./usuario-interfaces";

export interface IFactura {
    totalElements: number;
    id: number,
    iva: number,
    usuario: IUsuario,
    fecha: IFecha,
    pagado: boolean,
    compras: number
}
export interface IPageFactura {
    content: IFactura[];
    totalElements: number,
    totalPages: number
}

export interface IFactura2Send {
    id: number,
    fecha: string,
    iva: number,
    pagado: boolean,
    usuario: I2Send
}