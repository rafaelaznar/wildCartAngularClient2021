import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class RandomLoadService {
  constructor(private http: HttpClient) { }

  getCountProductos(): Observable<number> {
    return this.http.get<number>(API_URL + '/producto/count', httpOptions);
  }

  getCountUsuarios(): Observable<number> {
    return this.http.get<number>(API_URL + '/usuario/count', httpOptions);
  }

  getCountTiposUsuario(): Observable<number> {
    return this.http.get<number>(API_URL + '/tipousuario/count', httpOptions);
  }

  getCountTiposProducto(): Observable<number> {
    return this.http.get<number>(API_URL + '/tipoproducto/count', httpOptions);
  }

  getCountCompras(): Observable<number> {
    return this.http.get<number>(API_URL + '/compra/count', httpOptions);
  }

  getCountFacturas(): Observable<number> {
    return this.http.get<number>(API_URL + '/factura/count', httpOptions);
  }

  getCountCarritos(): Observable<number> {
    return this.http.get<number>(API_URL + '/carrito/count', httpOptions);
  }

  generateProductos(n: number): Observable<number> {
    return this.http.post<number>(API_URL + '/producto/generate/' + n, httpOptions);
  }

  generateUsuarios(n: number): Observable<number> {
    return this.http.post<number>(API_URL + '/usuario/generate/' + n, httpOptions);
  }


}
