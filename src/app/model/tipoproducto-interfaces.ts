import { IEntity, IEntity2Send, IPage } from './model-interfaces';

export interface ITipoproducto extends IEntity {
    nombre: string,
    productos: number
}

export interface ITipoproducto2Send extends IEntity2Send {
    nombre: string
}

export interface ITipoproductoPage extends IPage<ITipoproducto> {
}