import { I2Send } from "./model-interfaces";
import { IUserType } from "./tipousuario-interfaces";

export interface IUsuario {
    id: number,
    dni: string,
    nombre: string,
    apellido1: string,
    apellido2: string,
    login: string,
    email: string,
    descuento: number,
    validado: boolean,
    activo: boolean,
    tipousuario: IUserType,
    carritos: number,
    facturas: number
}

export interface IPageUsuario {
    content: IUsuario[];
    totalElements: number,
    totalPages: number
}

export interface IUsuario2Send {
    id: number,
    dni: string,
    nombre: string,
    apellido1: string,
    apellido2: string,
    login: string,
    email: string,
    descuento: number,
    validado: boolean,
    activo: boolean,
    tipousuario: I2Send
}