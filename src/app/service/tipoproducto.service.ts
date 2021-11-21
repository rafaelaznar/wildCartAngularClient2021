import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  API_URL,
  environment,
  httpOptions,
} from 'src/environments/environment';
import { ITipoProducto, IPageTP } from '../model/tipoproducto-interfaces';

@Injectable({
  providedIn: 'root',
})
export class TipoproductoService {
  constructor(private http: HttpClient) {}

  sURL = API_URL + '/tipoprod';

  getPage(
    rpp: number,
    page: number,
    filter: string,
    order: string,
    direction: string
  ): Observable<IPageTP> {
    let strFilterUrl: string = '';
    let strOrderUrl: string = '';
    if (filter) {
      strFilterUrl += '/filter/' + filter;
    }
    if (order) {
      strOrderUrl += '&sort=' + order + ',' + direction;
    }
    return this.http.get<IPageTP>(
      this.sURL + strFilterUrl + '?page=' + page + '&size=' + rpp + strOrderUrl,
      httpOptions
    );
  }

  getOne(id: number): Observable<ITipoProducto> {
    return this.http.get<ITipoProducto>(this.sURL + '/' + id, httpOptions);
  }

  newOne(oTipoProducto: ITipoProducto): Observable<ITipoProducto> {
    return this.http.post<ITipoProducto>(
      this.sURL + '/',
      oTipoProducto,
      httpOptions
    );
  }

  updateOne(oTipoProducto: ITipoProducto): Observable<ITipoProducto> {
    return this.http.put<ITipoProducto>(
      this.sURL + '/',
      oTipoProducto,
      httpOptions
    );
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + '/' + id, httpOptions);
  }
}
