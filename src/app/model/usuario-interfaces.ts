import { I2Send } from "./model-interfaces";
import { IUserType } from "./tipousuario-interfaces";

export interface IUsuario {
    id: number,
    dni: String,
    nombre: String,
    apellido1: String,
    apellido2: String,
    login: String,
    email: String,
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
    dni: String,
    nombre: String,
    apellido1: String,
    apellido2: String,
    login: String,
    email: String,
    descuento: number,
    validado: boolean,
    activo: boolean,
    tipousuario: I2Send
}