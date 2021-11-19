import { IPost2Send } from './../model/model-interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API_URL, environment, httpOptions } from 'src/environments/environment';
import { ITipoProducto, IPageTP} from '../model/tipoproducto-interfaces';



@Injectable({
  providedIn: 'root'
})
export class TipoproductoService {

  constructor(private http: HttpClient) { }

  sURL = API_URL + '/tipoprod';

  getPage(rpp: number, page: number, filter: string, order: string, direction: string): Observable<IPageTP> {
    let strFilterUrl: string = "";
    let strOrderUrl: string = "";
    if (filter) {
      strFilterUrl += "/filter/" + filter;
    }
    if (order) {
      strOrderUrl += "&sort=" + order + "," + direction;
    }
    return this.http.get<IPageTP>(this.sURL + "?page=" + page + "&size=" + rpp  + strFilterUrl + strOrderUrl, httpOptions);
  }


  getOne(id: number): Observable<ITipoProducto> {
    return this.http.get<ITipoProducto>(this.sURL + "/" + id, httpOptions);
  }

  newOne(dataPost: String): Observable<number> {
    return this.http.post<number>(this.sURL + "/", dataPost, httpOptions);
  }

  updateOne(dataPost: String): Observable<number> {
    return this.http.put<number>(this.sURL + "/", dataPost, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.http.delete<number>(this.sURL + "/" + id, httpOptions);
  }


}
