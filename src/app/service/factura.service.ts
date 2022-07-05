import { IFactura } from 'src/app/model/factura-interfaces';
import { IPageFactura, IFactura2Send } from './../model/factura-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICrud } from '../model/crud-interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaService implements ICrud {

  constructor(private http: HttpClient) { }

  sURL = API_URL + '/factura';

  getPage(page: number, rpp: number, order: string, direction: string, filter: string, id_usuario: number): Observable<IPageFactura> {
    let strUrl: string = "";
    if (order) {
      strUrl += "&sort=" + order + "," + direction;
    }
    if (filter) {
      strUrl += "&filter=" + filter;
    }
    if (id_usuario) {
      strUrl += "&usuario=" + id_usuario;
    }
    return this.http.get<IPageFactura>(this.sURL + "?size=" + rpp + "&page=" + page + strUrl, httpOptions);
  }

  getOne(id: number): Observable<IFactura> {
    return this.http.get<IFactura>(this.sURL + "/" + id, httpOptions);
  }

  newOne(oFactura: IFactura2Send): Observable<IFactura> {
    return this.http.post<IFactura>(this.sURL + '/', oFactura, httpOptions);
  }

  updateOne(oFactura: IFactura2Send): Observable<IFactura> {
    return this.http.put<IFactura>(this.sURL + '/', oFactura, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + "/" + id, httpOptions);
  }

  //getAll(): Observable<IFactura> {
  //  return this.http.get<IFactura>(this.sURL + "/all", httpOptions);
  //}

  //getCount(): Observable<IFactura> {
  //  return this.http.get<IFactura>(this.sURL + "/count", httpOptions);
  //}

  //random(): Observable<IFactura> {
  //  return this.http.post<IFactura>(this.sURL + "/random", httpOptions);
  //}

}