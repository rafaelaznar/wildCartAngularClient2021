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


  getOne(id: number): Observable<String> {
    return this.http.get<String>(this.sURL + "/" + id, httpOptions);
  }

  getAll(): Observable<String> {
    return this.http.get<String>(this.sURL + "/all" , httpOptions);
  }

  Create(body:string): Observable<String> {
    return this.http.post<String>(this.sURL ,body , httpOptions);
  }

  Delete(id: number): Observable<String> {
    return this.http.delete<String>(this.sURL + "/" + id, httpOptions);
  }

  Count(): Observable<String> {
    return this.http.get<String>(this.sURL + "/count", httpOptions);
  }

  Update(id: number,body:string): Observable<String> {
    return this.http.put<String>(this.sURL + "/" + id,body, httpOptions);
  }

  getPage(): Observable<String> {
    return this.http.get<String>(this.sURL + "/page", httpOptions);
  }

  Random(): Observable<String> {
    return this.http.post<String>(this.sURL + "/random" , httpOptions);
  }

}

