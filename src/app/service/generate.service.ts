import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})


export class GenerateService {
  constructor(private http: HttpClient) { }  

  generateProductos(n: number): Observable<number> {
    return this.http.post<number>(API_URL + '/producto/generate/' + n, { amount: n }, httpOptions);
  }

  generateUsuarios(n: number): Observable<number> {
    return this.http.post<number>(API_URL + '/usuario/generate/' + n, { amount: n }, httpOptions);
  }

  generateTiposDeUsuario(): Observable<number> {
    return this.http.post<number>(API_URL + '/tipousuario/generate', '', httpOptions);
  }


  generateTiposDeProductos(n: number): Observable<number> {
    return this.http.post<number>(API_URL + '/tipoproducto/generate/' + n, { amount: n }, httpOptions);
  }

  generateFacturas(n: number): Observable<number> {
    return this.http.post<number>(API_URL + '/factura/generate/' + n, { amount: n }, httpOptions);
  }

  generateCompras(n: number): Observable<number> {
    return this.http.post<number>(API_URL + '/compra/generate/' + n, { amount: n }, httpOptions);
  }

  generateCarritos(n: number): Observable<number> {
    return this.http.post<number>(API_URL + '/carrito/generate/' + n, { amount: n }, httpOptions);
  }

  purgeFacturas(): Observable<number> {
    return this.http.delete<number>(API_URL + '/factura/purge', httpOptions);
  }

}
