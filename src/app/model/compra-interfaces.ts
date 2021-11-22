export interface IProducto {
    id: number
}
export interface IFactura {
    id: number
}
export interface IDate {
    year: number,
    month: number,
    day: number
}

export interface ITime {
    hour: number,
    minute: number
}

export interface IFecha {
    date: IDate,
    time: ITime
}
export interface ICompra {
    id: number,
    cantidad: number,
    precio: number,
    fecha: IFecha,
    descuento_usuario: number,
    descuento_producto: number,
    producto: any,
    factura: any
}

export interface ICompraToSend {
    id: number,
    cantidad: number,
    precio: number,
    fecha: string,
    descuento_usuario: number,
    descuento_producto: number,
    producto: any,
    factura: any

}