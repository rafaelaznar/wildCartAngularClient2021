import { IEntity, IEntity2Send, IPage } from './model-interfaces';
import { IProducto } from './producto-interfaces';
import { IUsuario } from './usuario-interfaces';

export interface ICarrito extends IEntity {
  cantidad: number;
  precio: number;
  producto: IProducto;
  usuario: IUsuario;
}

export interface ICarritoPage extends IPage<ICarrito> {
}

export interface ICarrito2Send extends IEntity2Send {
  cantidad: number;
  precio: number;
  producto: IEntity2Send;
  usuario: IEntity2Send;
}
