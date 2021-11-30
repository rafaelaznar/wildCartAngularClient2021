
export interface ITipoProducto {
    id: number,
    nombre: string,
    productos: number
}


export interface ITipoProducto2Send {
    id: number,
    nombre: string    
}

export interface IPageTP{   
        content: ITipoProducto[];
        totalElements: number,
        totalPages: number
    

}