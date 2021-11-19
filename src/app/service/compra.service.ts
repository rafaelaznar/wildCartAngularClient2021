import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICompra } from '../model/compra-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }
  
  sURL = API_URL + '/compra';

  new(oCompra: ICompra): Observable<number> {
    return this.http.post<number>(this.sURL, oCompra, httpOptions);
  }

}
