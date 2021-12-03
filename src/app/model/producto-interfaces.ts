import { I2Send } from "./model-interfaces";
import { ITipoProducto } from "./tipoproducto-interfaces";

export interface IProducto {
    id: number,
    codigo: string,
    nombre: string,
    existencias: number,
    precio: number,
    imagen: number,
    descuento: number,
    tipoproducto: ITipoProducto,
    
    compras: number,
    carritos: number
}
export interface IProducto2Send {
    id: number,
    codigo: string,
    nombre: string,
    existencias: number,
    precio: number,
    imagen: number,
    descuento: number,
    tipoproducto: I2Send
}

export interface IPageProducto {
    content: IProducto[];
    totalElements: number,
    totalPages: number
}
