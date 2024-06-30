import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Cliente } from '../model/cliente';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public _url: string = "https://localhost:7274"

  constructor(private _http: HttpClient) { }

  login(obj: Login): Observable<boolean> {
    return this._http.post<any>(`${this._url}/Client/Login`, obj).pipe(
      map(response => response && response.success),
      catchError(() => of(false))
    );
  }

  cadastrar(obj: Cliente): Observable<boolean> {
    return this._http.post<any>(`${this._url}/Client`, obj).pipe(
      map(response => response && response.success),
      catchError(() => of(false))
    );
  }
}
