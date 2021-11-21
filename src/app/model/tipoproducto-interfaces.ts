
export interface ITipoProducto {
    id: number,
    nombre: string,
}


export interface IPageTP{   
        content: ITipoProducto[];
        totalElements: number,
        totalPages: number
    

}