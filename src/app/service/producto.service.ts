import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { IPageProduct, Iproduct } from '../model/producto-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  sURL = API_URL + '/producto';

  constructor(private http: HttpClient) { }

  get(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(this.sURL + "/" + id, httpOptions);
  }

  removeOne(id: number): Observable<Iproduct> {
    return this.http.delete<Iproduct>(this.sURL + "/" + id, httpOptions);
  }

  newOne(oProduct: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(this.sURL + "/", oProduct, httpOptions);
  }

  update(oProduct: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(this.sURL + "/", oProduct, httpOptions);
  }

  getPage(rpp: number, page: number, filter: string, order: string, direction: string): Observable<IPageProduct> {
    let strFilterUrl: string = "";
    let strOrderUrl: string = "";
    if (filter) {
      strFilterUrl += "/filter/" + filter;
    }
    if (order) {
      strOrderUrl += "&sort=" + order + "," + direction;
    }
    return this.http.get<IPageProduct>(this.sURL + strFilterUrl + "/?page=" + page + "&size=" + rpp + strOrderUrl, httpOptions);
  }
}