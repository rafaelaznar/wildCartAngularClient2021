import { I2Send } from "./model-interfaces";
import { ITipousuario } from "./tipousuario-interfaces";

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
    tipousuario: ITipousuario,
    carritos: number,
    facturas: number
}

export interface IUsuarioPage {
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