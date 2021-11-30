import { NumberSymbol } from "@angular/common";

export interface ITipoProducto {
    id: number,
    nombre: string,
    productos: number
}


export interface IPageTP{   
        content: ITipoProducto[];
        totalElements: number,
        totalPages: number
    

}