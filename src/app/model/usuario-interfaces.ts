import { IEntity2Send, IEntity, IPage } from "./model-interfaces";
import { ITipousuario } from "./tipousuario-interfaces";

export interface IUsuario extends IEntity {
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
    facturas: number,
    comments: number
}

export interface IUsuarioPage extends IPage<IUsuario> {
}

export interface IUsuario2Send extends IEntity2Send {
    dni: string,
    nombre: string,
    apellido1: string,
    apellido2: string,
    login: string,
    email: string,
    descuento: number,
    validado: boolean,
    activo: boolean,
    tipousuario: IEntity2Send
}