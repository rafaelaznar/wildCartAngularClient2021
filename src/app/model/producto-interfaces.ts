export interface Iproduct2Send {
    id: number,
    codigo: string,
    nombre: string,
    existencias: number,
    precio: number,
    imagen: number,
    descuento: number,
    id_tipoproducto: {id:number} //cambiar por Itipoproducto - SERGIO - VIKA
}
export interface Iproduct {
    id: number,
    codigo: string,
    nombre: string,
    existencias: number,
    precio: number,
    imagen: number,
    descuento: number,
    id_tipoproducto:number//cambiar por Itipoproducto - SERGIO - VIKA
}

export interface IPageProduct {
    content: Iproduct[];
    totalElements: number,
    totalPages: number
}
