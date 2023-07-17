import { IFactura } from 'src/app/model/factura-interfaces';
import { IFacturaPage, IFactura2Send } from './../model/factura-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICrud } from '../model/crud-interface';
import { ErrorHandlerService } from './errorHandler.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacturaService implements ICrud {

  constructor(private http: HttpClient, private oErrorHandlerService: ErrorHandlerService) { }

  sURL = API_URL + '/factura';

  getPage(page: number, rpp: number, order: string, direction: string, filter: string, id_usuario: number): Observable<IFacturaPage> {
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
    if (id_usuario) {
      strUrl += '&usuario=' + id_usuario;
    }
    return this.http.get<IFacturaPage>(this.sURL + '?size=' + rpp + '&page=' + page + strUrl, httpOptions);
  }

  getOne(id: number): Observable<IFactura> {
    return this.http.get<IFactura>(this.sURL + '/' + id, httpOptions);
  }

  getCount(): Observable<number> {
    return this.http.get<number>(this.sURL + '/count', httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  newOne(oFactura: IFactura2Send): Observable<number> {
    return this.http.post<number>(this.sURL + '/', oFactura, httpOptions);
  }

  updateOne(oFactura: IFactura2Send): Observable<number> {
    return this.http.put<number>(this.sURL + '/', oFactura, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + '/' + id, httpOptions);
  }

  getTotalFactura4User(id_usuario: number): Observable<number> {
    return this.http.get<number>(this.sURL + '/total/usuario/' + id_usuario, httpOptions);
  }

  getTotalFactura(id_factura: number): Observable<number> {
    return this.http.get<number>(this.sURL + '/total/' + id_factura, httpOptions);
  }

  //getAll(): Observable<IFactura> {
  //  return this.http.get<IFactura>(this.sURL + '/all', httpOptions);
  //}

  //getCount(): Observable<IFactura> {
  //  return this.http.get<IFactura>(this.sURL + '/count', httpOptions);
  //}

  //random(): Observable<IFactura> {
  //  return this.http.post<IFactura>(this.sURL + '/random', httpOptions);
  //}

}