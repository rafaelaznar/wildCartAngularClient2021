
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICrud } from '../model/crud-interface';
import { IUsuarioPage, IUsuario, IUsuario2Send } from '../model/usuario-interfaces';
import { ErrorHandlerService } from './errorHandler.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements ICrud {

  sURL = API_URL + '/usuario';

  constructor(
    private http: HttpClient,
    private oErrorHandlerService: ErrorHandlerService
  ) { }

  getPage(page: number, rpp: number, order: string, direction: string, filter: string, tipousuario: number): Observable<IUsuarioPage> {
    if (!page) {
      page = 0;
    }
    if (!rpp) {
      rpp = 10;
    }
    let strUrl: string = "";
    if (order) {
      strUrl += "&sort=" + order + "," + direction;
    }
    if (filter) {
      strUrl += "&filter=" + filter;
    }
    if (tipousuario) {
      strUrl += "&tipousuario=" + tipousuario;
    }
    //page--;
    return this.http.get<IUsuarioPage>(this.sURL + "?page=" + page + "&size=" + rpp + strUrl, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  getOne(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.sURL + "/" + id, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  getByUsername(username: string): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.sURL + "/username/" + username, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  newOne(oUsuario: IUsuario2Send): Observable<number> {
    return this.http.post<number>(this.sURL + "/", oUsuario, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  updateOne(oUsuario: IUsuario2Send): Observable<number> {
    return this.http.put<number>(this.sURL + "/" + oUsuario.id, oUsuario, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + "/" + id, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  flipValid(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.sURL + "/flipvalid/" + id, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

  flipActive(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.sURL + "/flipactive/" + id, httpOptions).pipe(catchError(this.oErrorHandlerService.serviceHandleError));
  }

}
