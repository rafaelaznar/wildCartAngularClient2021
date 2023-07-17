import { Observable } from 'rxjs';
import { IEntity2Send, IEntity, IPage } from './model-interfaces';

export interface ICrud {
    getPage(rpp: number, page: number, order: string, direction: string, filter: string, ...args: any[]): Observable<IPage<IEntity>>;

    getOne(id: number): Observable<IEntity>;

    newOne(oEntity: IEntity2Send): Observable<number>;

    updateOne(oEntity: IEntity2Send): Observable<number>;

    removeOne(id: number): Observable<number>;
}
