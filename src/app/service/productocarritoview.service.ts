import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICrud } from '../model/crud-interface';
import { IEntity2Send, IEntity } from '../model/model-interfaces';
import { IProductoPage, IProducto, IProducto2Send } from '../model/producto-interfaces';
import { IView } from '../model/view-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoCarritoViewService implements IView  {

  sURL = API_URL + '/productocarritoview';

  constructor(private http: HttpClient) { }

  getPage( page: number, rpp: number, order: string, direction: string, filter: string, tipoproducto: number): Observable<IProductoPage> {
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

  getOne(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(this.sURL + "/" + id, httpOptions);
  }


}