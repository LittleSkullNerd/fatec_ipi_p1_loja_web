import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';


@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent implements OnInit {

  constructor(private _service: ProdutoService) { }

  ngOnInit(): void {
    this._service.listar().subscribe((s: Produto[]) => this.lista = s);
  }

  public inputValue: string | undefined
  public listaFiltro: Produto[] | undefined
  public lista: Produto[] = [];

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

  public teste(_: any) {
    this.inputValue = _.target.value
    this.lista.filter(f => f.nome.includes(_.target.value))
    
    let currentObj: Produto[] = this.lista.filter(f => f.nome.toLowerCase().includes(_.target.value))
    currentObj.length > 0 ? this.listaFiltro = currentObj : ''
  }

}
