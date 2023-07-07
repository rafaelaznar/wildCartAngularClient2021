import { IEntity, IEntity2Send, IPage } from "./model-interfaces";
import { ITipoproducto } from "./tipoproducto-interfaces";

export interface IFile {
    file: File
}
export interface IProducto extends IEntity {
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

export interface IProducto extends IEntity {
    codigo: string,
    nombre: string,
    existencias: number,
    precio: number,
    imagen: number,
    descuento: number,
    tipoproducto: ITipoproducto,
    cantidad: number,

    compras: number,
    carritos: number,
    comments: number    
}

export interface IProducto2Send extends IEntity2Send {
    id: number,
    codigo: string,
    nombre: string,
    existencias: number,
    precio: number,
    imagen: number,
    descuento: number,
    tipoproducto: IEntity2Send
}

export interface IProductoPage extends IPage<IProducto> {
}
