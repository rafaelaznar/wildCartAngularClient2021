import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { IPageProducto, IProducto, IProducto2Send } from '../model/producto-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  sURL = API_URL + '/producto';

  constructor(private http: HttpClient) { }

  get(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(this.sURL + "/" + id, httpOptions);
  }

  removeOne(id: number): Observable<IProducto> {
    return this.http.delete<IProducto>(this.sURL + "/" + id, httpOptions);
  }

  newOne(oProduct: IProducto2Send): Observable<IProducto> {
    return this.http.post<IProducto>(this.sURL + "/", oProduct, httpOptions);
  }

  update(oProduct: IProducto2Send): Observable<IProducto> {
    return this.http.put<IProducto>(this.sURL + "/", oProduct, httpOptions);
  }

  getPage(rpp: number, page: number, filter: string, order: string, direction: string, tipoproducto: number): Observable<IPageProducto> {  
    let strOrderUrl: string = "";
    if (order) {
      strOrderUrl += "&sort=" + order + "," + direction;
    }
    if (filter) {
      strOrderUrl += "&filter=" + filter;
    }
    if (tipoproducto){
      strOrderUrl += "&tipoproducto=" + tipoproducto;
    }
    return this.http.get<IPageProducto>(this.sURL + "?page=" + page + "&size=" + rpp + strOrderUrl, httpOptions);
  }
}