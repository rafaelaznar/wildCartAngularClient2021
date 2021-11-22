import { IFactura} from 'src/app/model/factura-interfaces';
import { IPageFactura, IFactura2Send } from './../model/factura-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  sURL = API_URL + '/factura';


  getOne(id: number): Observable<IFactura> {
    return this.http.get<IFactura>(this.sURL + "/" + id, httpOptions);
  }

  getAll(): Observable<String> {
    return this.http.get<String>(this.sURL + "/all" , httpOptions);
  }

  //Create(body:string): Observable<IFactura2Send> {
    //return this.http.post<number>(this.sURL ,body , httpOptions);
  //}

  Delete(id: number): Observable<String> {
    return this.http.delete<String>(this.sURL + "/" + id, httpOptions);
  }

  Count(): Observable<String> {
    return this.http.get<String>(this.sURL + "/count", httpOptions);
  }

 // Update(id: number,body:string): Observable<IFactura2Send> {
   
 //return this.http.put<number>(this.sURL + "/" + id,body, httpOptions);
 // }

  
  getPage(rpp: number, page: number, filter: string, order: string, direction: string): Observable<IPageFactura> {
   
    let strOrderUrl: string = "";
  
    if (order) {
      strOrderUrl += "&order=" + order + "&dir=" + direction;
    }
    return this.http.get<IPageFactura>(this.sURL + "?rpp=" + rpp + "&page=" + page + strOrderUrl, httpOptions);
  }

  Random(): Observable<String> {
    return this.http.post<String>(this.sURL + "/random" , httpOptions);
  }
  Create(oFactura: IFactura): Observable<IFactura2Send> {
    return this.http.post<IFactura2Send>(
      this.sURL + '/',
      oFactura,
      httpOptions
    );
  }

  Update(oFactura: IFactura): Observable<IFactura2Send> {
    return this.http.put<IFactura2Send>(
      this.sURL + '/',
      oFactura,
      httpOptions
    );
  }

  
}

