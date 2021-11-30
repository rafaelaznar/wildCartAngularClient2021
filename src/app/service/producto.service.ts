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

  getPage(rpp: number, page: number, filter: string, order: string, direction: string, filtertype:number): Observable<IPageProduct> {
    let strFilterUrl: string = "&filter=";
    let strOrderUrl: string = "";
    let strFilterNumber: string="&filtertype=0";
    if (filter) {
      strFilterUrl +=filter;
    }
    if (order) {
      strOrderUrl += "&sort=" + order + "," + direction;
    }
    if(filtertype){
      strFilterNumber ="&filtertype="+filtertype;
    }
    return this.http.get<IPageProduct>(this.sURL  + "?page=" + page + "&size=" + rpp + strOrderUrl+ strFilterUrl+strFilterNumber, httpOptions);
  }
}