import { ITipoProducto } from "./tipoproducto-interfaces";

export interface Iproduct {
    id: number,
    codigo: string,
    nombre: string,
    existencias: number,
    precio: number,
    imagen: number,
    descuento: number,
    tipoproducto:ITipoProducto
}

export interface IPageProduct {
    content: Iproduct[];
    totalElements: number,
    totalPages: number
}
