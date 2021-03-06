import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICarritoPage, ICarrito, ICarrito2Send, } from '../model/carrito-interfaces';
import { ICrud } from '../model/crud-interface';

@Injectable({
  providedIn: 'root',
})
export class CarritoService implements ICrud {

  sURL = API_URL + '/carrito';

  constructor(private http: HttpClient) { }

  getPage(page: number, rpp: number, order: string, direction: string, filter: string, id_producto: number, id_usuario: number): Observable<ICarritoPage> {
    let strOrderUrl: string = '';
    if (order) {
      strOrderUrl += '&sort=' + order + ',' + direction;
    }
    if (filter) {
      strOrderUrl += '&filter=' + filter;
    }
    if (id_producto) {
      strOrderUrl += '&idproducto=' + id_producto;
    } else if (id_usuario) {
      strOrderUrl += '&idusuario=' + id_usuario;
    }
    page--;
    return this.http.get<ICarritoPage>(this.sURL + '?page=' + page + '&size=' + rpp + strOrderUrl, httpOptions);
  }

  getOne(id: number): Observable<ICarrito> {
    return this.http.get<ICarrito>(this.sURL + '/' + id, httpOptions);
  }

  newOne(oCarrito2Send: ICarrito2Send): Observable<ICarrito> {
    return this.http.post<ICarrito>(this.sURL + '/', oCarrito2Send, httpOptions);
  }

  updateOne(oCarritoPlist: ICarrito2Send): Observable<ICarrito> {
    return this.http.put<ICarrito>(this.sURL + '/', oCarritoPlist, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + '/' + id, httpOptions);
  }

  getCount(): Observable<number> {
    return this.http.get<number>(this.sURL + '/count', httpOptions);
  }

  purchase(): Observable<number> {
    return this.http.put<number>(this.sURL + '/comprar', null, httpOptions);
  };

}
