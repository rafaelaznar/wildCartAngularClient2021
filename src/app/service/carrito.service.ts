import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICarritoPage } from '../model/carrito-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  sURL = API_URL + '/carrito';

  constructor(private http: HttpClient) {}

  getPage(
    rpp: number,
    page: number,
    filter: string,
    order: string,
    direction: string,
    idproducto: number,
    idusuario: number
  ): Observable<ICarritoPage> {
    let strOrderUrl: string = '';
    if (order) {
      strOrderUrl += '&sort=' + order + ',' + direction;
    }

    if (filter) {
      strOrderUrl += '&filter=' + filter;
    }
    if (idproducto) {
      strOrderUrl += '&idproducto=' + idproducto;
    } else if (idusuario) {
      strOrderUrl += '&idusuario=' + idusuario;
    }

    return this.http.get<ICarritoPage>(
      this.sURL + '?page=' + page + '&size=' + rpp + strOrderUrl,
      httpOptions
    );
  }
}
