import { IEntity, IEntity2Send, IPage } from "./model-interfaces";
import { IProducto } from "./producto-interfaces";
import { IUsuario } from "./usuario-interfaces";

export interface IComment extends IEntity {
    comment: string;
    creation: Date;
    lastedition?: any;
    usuario: IUsuario;
    producto: IProducto;
}

export interface ICommentPage extends IPage<IUsuario> {    
}

export interface IUsuario2Send extends IEntity2Send {    
    comment: string;
    usuario: IEntity2Send;
    producto: IEntity2Send
}