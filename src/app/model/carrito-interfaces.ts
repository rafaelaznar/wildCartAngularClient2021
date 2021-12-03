import { IProducto } from './producto-interfaces';
import { IUsuario } from './usuario-interfaces';

export interface ICarritoPlist {
  id: number;
  cantidad: number;
  precio: number;
  producto: IProducto;
  usuario: IUsuario;
}

export interface ICarritoPage {
  content: ICarritoPlist[];
  totalElements: number;
  totalPages: number;
}

export interface ICarritoToSend {
  id: number;
  cantidad: number;
  precio: number;
  producto: number;
  usuario: number;
}
