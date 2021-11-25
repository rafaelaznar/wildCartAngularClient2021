import { IPost2Send } from './../model/model-interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API_URL, environment, httpOptions } from 'src/environments/environment';


import { catchError, retry, shareReplay, tap } from 'rxjs/operators';
import { IPage, IPost } from '../model/model-interfaces';
import { IPageUsuario, IUsuario, IUsuario2Send } from '../model/usuario-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  sURL = API_URL + '/usuario';

  getPage(rpp: number, page: number, order: string, direction: string): Observable<IPageUsuario> {
    let strOrderUrl: string = "";
    if (order) {
      strOrderUrl += "&sort=" + order + "," + direction;
    }
    page--;
    return this.http.get<IPageUsuario>(this.sURL + "/page" + "?size=" + rpp + "&page=" + page + strOrderUrl, httpOptions);
  }


  getOne(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.sURL + "/" + id, httpOptions);
  }

  newOne(oUsuario: IUsuario2Send): Observable<number> {
    return this.http.post<number>(this.sURL + "/new", oUsuario, httpOptions);
  }

  updateOne(oUsuario: IUsuario2Send): Observable<number> {
    return this.http.put<number>(this.sURL + "/" + oUsuario.id, oUsuario, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + "/" + id, httpOptions);
  }


}
