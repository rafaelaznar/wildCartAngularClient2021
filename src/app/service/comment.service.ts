import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICrud } from '../model/crud-interface';
import { IComment, IComment2Send, ICommentPage } from '../model/comment-interfaces';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './errorHandler.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService implements ICrud {

  sURL = API_URL + '/comment';

  constructor(private http: HttpClient, private oErrorHandlerService: ErrorHandlerService) { }

  getPage(page: number, rpp: number, order: string, direction: string, filter: string, usuario: number, producto: number): Observable<ICommentPage> {
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
    if (usuario) {
      strUrl += '&usuario=' + usuario;
    }
    if (producto) {
      strUrl += '&producto=' + producto;
    }
    return this.http.get<ICommentPage>(this.sURL + '?page=' + page + '&size=' + rpp + strUrl, httpOptions);
  }

  getOne(id: number): Observable<IComment> {
    return this.http.get<IComment>(this.sURL + '/' + id, httpOptions);
  }

  getCount(): Observable<number> {
    return this.http.get<number>(this.sURL + '/count', httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  newOne(oProduct: IComment2Send): Observable<number> {
    return this.http.post<number>(this.sURL + '/', oProduct, httpOptions);
  }

  updateOne(oProduct: IComment2Send): Observable<number> {
    return this.http.put<number>(this.sURL + '/', oProduct, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + '/' + id, httpOptions);
  }

}