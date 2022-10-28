import { Observable } from "rxjs";
import { IEntity, IPage } from "./model-interfaces";

export interface IView {
    
    getPage(rpp: number, page: number, order: string, direction: string, filter: string, ...args: any[]): Observable<IPage<IEntity>>;

    getOne(id: number): Observable<IEntity>;

}
