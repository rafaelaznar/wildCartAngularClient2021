import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { IProductoPage, IProducto } from '../model/producto-interfaces';
import { IView } from '../model/view-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoCarritoViewService implements IView {

  sURL = API_URL + '/productocarritoview';

  constructor(private http: HttpClient) { }

  getPage(page: number, rpp: number, order: string, direction: string, filter: string, tipoproducto: number): Observable<IProductoPage> {
    if (!page) {
      page = 0;
    }
    if (!rpp) {
      rpp = 10;
    }
    let strUrl: string = '';
    if (order) {
      strUrl += '&sort=' + order + ',' + direction;
    }
    if (filter) {
      strUrl += '&filter=' + filter;
    }
    if (tipoproducto) {
      strUrl += '&tipoproducto=' + tipoproducto;
    }
    return this.http.get<IProductoPage>(this.sURL + '?page=' + page + '&size=' + rpp + strUrl, httpOptions);
  }

  getOne(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(this.sURL + '/' + id, httpOptions);
  }

}