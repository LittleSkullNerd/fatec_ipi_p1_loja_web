import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Produto } from "../model/produto";

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  
  public _url: string = "https://localhost:7274"

  constructor(private _http: HttpClient) { }

  public gravar(obj: Produto): void {
    this._http.post<String>(`{_url}/Produto`, obj).subscribe({
      next: () => "Registro salvo com sucesso!",
      error: () => "Ocorreu um erro durante a gravação!"
    });
  }

  update(produto:Produto): Observable<Produto> {
    return this._http.put<Produto>(`${this._url}/Produto`, produto).pipe(
      catchError((error) => {
        throw new Error(error);
      })
    );
  }

  remover(pid: number): Observable<Produto> {
    return this._http.delete<Produto>(`${this._url}/Produto/${pid}`).pipe(
      catchError((error) => {
        return throwError(() => new Error(error));
      })
    );
  }

  public carregar(codigo: string): Observable<Produto> {
    return this._http.get<Produto>(`${this._url}/Produto/${codigo}`);
  }

  public listar(): Observable<Produto[]> {
    return this._http.get<Produto[]>(`${this._url}/Produto`);
  }

  public buscarPorId(id: number): Observable<Produto> {
    return this._http.get<Produto>(`${this._url}/Produto/${id}`);
  }

  public pesquisar(busca: String): Observable<Produto[]> {
    return this._http.get<Produto[]>("http://localhost/8090/api/produto/busca/" + busca);
  }
}
