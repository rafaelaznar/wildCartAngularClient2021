
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICrud } from '../model/crud-interface';
import { IUsuarioPage, IUsuario, IUsuario2Send } from '../model/usuario-interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements ICrud {

  sURL = API_URL + '/usuario';

  constructor(private http: HttpClient) { }

  getPage(page: number, rpp: number, order: string, direction: string, filter: string, tipousuario: number): Observable<IUsuarioPage> {
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
    page--;
    return this.http.get<IUsuarioPage>(this.sURL + "?page=" + page + "&size=" + rpp + strUrl, httpOptions);
  }

  getOne(id: number): Observable<IUsuario> {
    return this.http.get<IUsuario>(this.sURL + "/" + id, httpOptions);
  }

  newOne(oUsuario: IUsuario2Send): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.sURL + "/new", oUsuario, httpOptions);
  }

  updateOne(oUsuario: IUsuario2Send): Observable<IUsuario> {
    return this.http.put<IUsuario>(this.sURL + "/" + oUsuario.id, oUsuario, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + "/" + id, httpOptions);
  }


}
