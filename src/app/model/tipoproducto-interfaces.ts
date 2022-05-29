export interface ITipoproducto {
    id: number,
    nombre: string,
    productos: number
}

export interface ITipoproducto2Send {
    id: number,
    nombre: string
}

export interface ITipoproductoPage {
    content: ITipoproducto[];
    totalElements: number,
    totalPages: number
}