import { IUsuario } from './usuario-interfaces';
import { IEntity, IEntity2Send, IPage } from './model-interfaces';

export interface IFactura extends IEntity {
    iva: number,
    fecha: Date,
    pagado: boolean,
    compras: number,
    usuario: IUsuario,
    total: number
}
export interface IFactura2Send extends IEntity2Send {
    fecha: Date,
    iva: number,
    pagado: boolean,
    usuario: IEntity2Send
}

export interface IFacturaPage extends IPage<IFactura> {
}
