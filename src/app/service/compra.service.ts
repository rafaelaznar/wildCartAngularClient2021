import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';
import { ICompra, ICompraToSend } from '../model/compra-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }
  
  sURL = API_URL + '/compra';

  new(oCompra: ICompraToSend): Observable<number> {
    return this.http.post<number>(this.sURL, oCompra, httpOptions);
  }

  get(id: number): Observable<ICompra> {
    return this.http.get<ICompra>(this.sURL + "/" + id, httpOptions);
  }

  update(oCompraToSend: ICompraToSend): Observable<number> {
    return this.http.put<number>(this.sURL, oCompraToSend, httpOptions);
  }

}
