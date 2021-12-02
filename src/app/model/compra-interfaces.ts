import { IFactura } from "./factura-interfaces";
import { I2Send, IFecha } from "./model-interfaces";
import { IProducto } from "./producto-interfaces";

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
    producto: IProducto,
    factura: IFactura

}

export interface ICompraToSend {
    id: number,
    cantidad: number,
    precio: number,
    fecha: string,
    descuento_usuario: number,
    descuento_producto: number,
    producto: I2Send,
    factura: I2Send

}