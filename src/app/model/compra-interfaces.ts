import { IEntity, IEntity2Send, IPage } from './model-interfaces';
import { IFactura } from './factura-interfaces';
import { IProducto } from './producto-interfaces';

export interface ICompra extends IEntity {
    cantidad: number,
    precio: number,
    fecha: Date,
    descuento_usuario: number,
    descuento_producto: number,
    producto: IProducto,
    factura: IFactura
}

export interface ICompra2Send extends IEntity2Send {
    cantidad: number,
    precio: number,
    fecha: Date,
    descuento_usuario: number,
    descuento_producto: number,
    producto: IEntity2Send,
    factura: IEntity2Send

}

export interface ICompraPage extends IPage<ICompra> {
}