export interface IEntity {
    id: number,
}

export interface IEntity2Send {
    id: number,
}

export interface IPage<T> {
    content: T[];
    totalElements: number,
    totalPages: number
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





export interface IReport {
    codigo: string,
    nombre: string
}

export interface IPrint {
    cantidad: number;
    fechainicial:string;
    fechafinal:string;
}

export interface IOrder {
    sortField: string;
    sortDirection: string;
}