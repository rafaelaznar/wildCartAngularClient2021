import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL, httpOptions, } from 'src/environments/environment';
import { ICrud } from '../model/crud-interface';
import { ITipousuario, ITipousuario2Send, ITipousuarioPage } from '../model/tipousuario-interfaces';
import { ErrorHandlerService } from './errorHandler.service';

@Injectable({
  providedIn: 'root',
})

export class TipousuarioService implements ICrud {

  sURL = API_URL + '/tipousuario';

  constructor(
    private http: HttpClient,
    private oErrorHandlerService: ErrorHandlerService,
  ) { }

  getPage(page: number, rpp: number, order: string, direction: string, filter: string): Observable<ITipousuarioPage> {
    let strUrl: string = '';
    if (filter) {
      strUrl += '&filter=' + filter;
    }
    if (order) {
      strUrl += '&sort=' + order + ',' + direction;
    }
    return this.http.get<ITipousuarioPage>(this.sURL + '/?page=' + (page - 1) + '&size=' + rpp + strUrl, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  getOne(id: number): Observable<ITipousuario> {
    return this.http.get<ITipousuario>(`${this.sURL}/${id}`, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  updateOne(oTipousuario: ITipousuario2Send): Observable<number> {
    return this.http.put<number>(this.sURL, oTipousuario, httpOptions);
  }

  newOne(_oTipousuario: ITipousuario2Send): Observable<number> {
    throw new Error('Method not implemented.');
  }
  removeOne(_id: number): Observable<number> {
    throw new Error('Method not implemented.');
  }

}
