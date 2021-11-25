import { IPageCompra } from './../model/compra-interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API_URL, environment, httpOptions } from 'src/environments/environment';


import { catchError, retry, shareReplay, tap } from 'rxjs/operators';
import { ICompra, ICompraToSend } from '../model/compra-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  sURL = API_URL + '/compra';

  getPage(rpp: number, page: number, filter: string, order: string, direction: string): Observable<IPageCompra> {
    let strFilterUrl: string = "";
    let strOrderUrl: string = "";
    if (filter) {
      strFilterUrl += "&filter=" + filter;
    }
    if (order) {
      strOrderUrl += "&sort=" + order + "," + direction;
    }
    return this.http.get<IPageCompra>(this.sURL + "/page"+"?size=" + rpp + "&page=" + page + strFilterUrl + strOrderUrl, httpOptions);
  }
  

  new(oCompra: ICompraToSend): Observable<number> {
    return this.http.post<number>(this.sURL, oCompra, httpOptions);
  }

  get(id: number): Observable<ICompra> {
    return this.http.get<ICompra>(this.sURL + "/" + id, httpOptions);
  }

  update(oCompraToSend: ICompraToSend): Observable<number> {
    return this.http.put<number>(this.sURL, oCompraToSend, httpOptions);
  }
  remove(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + "/" + id, httpOptions);
  }

}
