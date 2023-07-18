import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICrud } from '../model/crud-interface';
import { IProductoPage, IProducto, IProducto2Send } from '../model/producto-interfaces';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './errorHandler.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService implements ICrud {

  sURL = API_URL + '/producto';

  constructor(private http: HttpClient, private oErrorHandlerService: ErrorHandlerService) { }

  getPage(page: number, rpp: number, order: string, direction: string, filter: string, tipoproducto: number): Observable<IProductoPage> {
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
    if (tipoproducto) {
      strUrl += '&tipoproducto=' + tipoproducto;
    }
    return this.http.get<IProductoPage>(this.sURL + '?page=' + page + '&size=' + rpp + strUrl, httpOptions);
  }

  getOne(id: number): Observable<IProducto> {
    return this.http.get<IProducto>(this.sURL + '/' + id, httpOptions);
  }

  getCount(): Observable<number> {
    return this.http.get<number>(this.sURL + '/count', httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  newOne(oProduct: IProducto2Send): Observable<number> {
    return this.http.post<number>(this.sURL + '/', oProduct, httpOptions);
  }

  updateOne(oProduct: IProducto2Send): Observable<number> {
    return this.http.put<number>(this.sURL + '/', oProduct, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + '/' + id, httpOptions);
  }

  nByDescuentoDesc(quantity: number): Observable<IProducto[]> {
      return this.http.get<IProducto[]>(this.sURL + '/nByDescuentoDesc/' + quantity, httpOptions);
  }
}