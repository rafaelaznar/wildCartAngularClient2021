import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { IProductoPage, IProducto, IProducto2Send } from '../model/producto-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  sURL = API_URL + '/producto';

  constructor(private http: HttpClient) { }

  getPage(rpp: number, page: number, order: string, direction: string, filter: string, tipoproducto: number): Observable<IProductoPage> {
    let strUrl: string = "";
    if (order) {
      strUrl += "&sort=" + order + "," + direction;
    }
    if (filter) {
      strUrl += "&filter=" + filter;
    }
    if (tipoproducto) {
      strUrl += "&tipoproducto=" + tipoproducto;
    }
    return this.http.get<IProductoPage>(this.sURL + "?page=" + (page - 1) + "&size=" + rpp + strUrl, httpOptions);
  }

  get(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(this.sURL + "/" + id, httpOptions);
  }

  newOne(oProduct: IProducto2Send): Observable<IProducto> {
    return this.http.post<IProducto>(this.sURL + "/", oProduct, httpOptions);
  }

  update(oProduct: IProducto2Send): Observable<IProducto> {
    return this.http.put<IProducto>(this.sURL + "/", oProduct, httpOptions);
  }

  removeOne(id: number): Observable<IProducto> {
    return this.http.delete<IProducto>(this.sURL + "/" + id, httpOptions);
  }

}