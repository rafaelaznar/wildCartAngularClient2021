import { IFecha } from "./model-interfaces";

export interface IFactura {
    totalElements: number;
    id: number,
    iva: number,
    id_usuario: object,
    fecha: IFecha,
    pagado: boolean
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
    id_usuario: object

}