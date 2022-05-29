import { I2Send } from "./model-interfaces";
import { ITipoproducto } from "./tipoproducto-interfaces";

export interface IFile {
    file: File
}
export interface IProducto {
    id: number,
    codigo: string,
    nombre: string,
    existencias: number,
    precio: number,
    imagen: number,
    descuento: number,
    tipoproducto: ITipoproducto,

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

export interface IProductoPage {
    content: IProducto[];
    totalElements: number,
    totalPages: number
}
