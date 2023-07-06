import { ICompraPage } from './../model/compra-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICompra, ICompra2Send } from '../model/compra-interfaces';
import { ICrud } from '../model/crud-interface';

@Injectable({
  providedIn: 'root'
})
export class CompraService implements ICrud {

  constructor(private http: HttpClient) { }

  sURL = API_URL + '/compra';

  getPage(page: number, rpp: number, order: string, direction: string, filter: string, id_factura: number, id_producto: number): Observable<ICompraPage> {
    if (!page) {
      page = 0;
    }
    if (!rpp) {
      rpp = 10;
    }
    let strOrderUrl: string = "";
    if (filter) {
      strOrderUrl += "&filter=" + filter;
    }
    if (order) {
      strOrderUrl += "&sort=" + order + "," + direction;
    }
    if (id_factura) {
      strOrderUrl += "&factura=" + id_factura;
    }
    if (id_producto) {
      strOrderUrl += "&producto=" + id_producto;
    }
    return this.http.get<ICompraPage>(this.sURL + "?page=" + page + "&size=" + rpp + strOrderUrl, httpOptions);
  }

  allByFactura(id_factura: number): Observable< ICompra[]> {
    return this.http.get<ICompra[]>(this.sURL + "/all/" + id_factura, httpOptions);
  }

  getOne(id: number): Observable<ICompra> {
    return this.http.get<ICompra>(this.sURL + "/" + id, httpOptions);
  }

  newOne(oCompra2Send: ICompra2Send): Observable<number> {
    return this.http.post<number>(this.sURL, oCompra2Send, httpOptions);
  }

  updateOne(oCompra2Send: ICompra2Send): Observable<number> {
    return this.http.put<number>(this.sURL, oCompra2Send, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + "/" + id, httpOptions);
  }

}