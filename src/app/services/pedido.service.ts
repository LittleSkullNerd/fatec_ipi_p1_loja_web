import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // ajuste conforme necessário

export interface Pedido {
  numero: string;
  itens: any[];
  dadosEntrega: {
    nome: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) {}

  finalizarCompra(itens: any[], dadosEntrega: any): Observable<Pedido> {
    const numeroPedido = 'PEDIDO-' + Math.floor(Math.random() * 1000000).toString();
    const pedido: Pedido = {
      numero: numeroPedido,
      itens: itens,
      dadosEntrega: dadosEntrega
    };

    return this.http.post<Pedido>(`${environment.apiUrl}/pedidos`, pedido);
  }
}
