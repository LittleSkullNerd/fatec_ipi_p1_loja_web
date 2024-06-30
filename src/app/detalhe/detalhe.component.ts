import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';
import { Item } from '../model/item';
@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent implements OnInit {
  public obj: Produto = new Produto();
  public produtos: Produto[] | undefined
  public esteProduto: Produto = new Produto()
  public id: number = 0;

  constructor(
    private _service: ProdutoService,
    private _router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this._router.snapshot.params['codigo'])
    this._service.buscarPorId(this.id).subscribe((s: Produto) => {debugger; this.esteProduto = s});
  }

  public comprar(produto: Produto) {
    let novo: Item = new Item();
    novo.codigoProduto = produto.codigo;
    novo.nomeProduto = produto.nome;
    novo.valor = produto.valor;
    novo.qtd = 1;
    novo.total = produto.valor;
    let lista: Item[] = [];
    let json = localStorage.getItem("cesta");
    if (json == null) {
      lista.push(novo);
      console.log(JSON.stringify(lista));
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }
    localStorage.setItem("cesta", JSON.stringify(lista));
    window.location.href = "./cesta";
  }
}
