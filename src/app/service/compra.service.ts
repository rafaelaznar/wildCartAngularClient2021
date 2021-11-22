import { IPageCompra } from './../model/compra-interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API_URL, environment, httpOptions } from 'src/environments/environment';


import { catchError, retry, shareReplay, tap } from 'rxjs/operators';

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
    return this.http.get<IPageCompra>(this.sURL + "/page"+"?rpp=" + rpp + "&page=" + page + strFilterUrl + strOrderUrl, httpOptions);
  }
}
