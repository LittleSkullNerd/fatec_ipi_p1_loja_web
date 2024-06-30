import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

  public alterar(obj: Produto): void {
    this._http.put<String>("http://localhost:8090/api/produto", obj).subscribe({
      next: () => "Reigstro alterado com sucesso!",
      error: () => "Ocorreu um erro durante a gravação!"
    });
  }

  public remover(obj: Produto): void {
    this._http.delete<String>("http://localhost:8090/api/produto/" + obj.codigo).subscribe({
      next: () => "Registro removido com sucesso!",
      error: () => "Ocorreu um erro durante a gravação!"
    });
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
