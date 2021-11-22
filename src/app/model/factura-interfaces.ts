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