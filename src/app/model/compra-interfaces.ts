import { IFactura } from "./factura-interfaces";
import { IFecha } from "./model-interfaces";
import { Iproduct } from "./producto-interfaces";

export interface IPageCompra {
    content: ICompra[];
    totalElements: number,
    totalPages: number
}

export interface ICompra {
    id: number,
    cantidad: number,
    precio: number,
    fecha: IFecha,
    descuento_usuario: number,
    descuento_producto: number,
    producto: Iproduct,
    factura: IFactura

}

export interface ICompraToSend {
    id: number,
    cantidad: number,
    precio: number,
    fecha: string,
    descuento_usuario: number,
    descuento_producto: number,
    producto: Iproduct,
    factura: IFactura

}