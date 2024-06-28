import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Item } from '../model/item';


@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public inputValue: string | undefined
  public listaFiltro: Produto[] | undefined
  public lista: Produto[] =
    [
      {
        codigo: 1, nome: "Umbreon Halloween", valor: 80, descritivo: `Feito em resina \n Pintado a mão \n Altura aproximada: 8cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 2, nome: "Kirby Heart", valor: 50, descritivo: `Feito em filamento Pintado a mão Altura aproximada: 6cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 3, nome: "Skeleton King", valor: 150, descritivo: `Feito em resina Pintado a mão Altura aproximada: 10cm `, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 4, nome: "Jack Frost", valor: 200, descritivo: `Feito em resina Pintado a mão Altura aproximada: 20cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 5, nome: "Pyro Jack", valor: 250, descritivo: `Feito em resina Pintado a mão Altura aproximada: 20cm `, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 6, nome: "Malenia", valor: 310, descritivo: `Feito em resina Pintado a mão Altura aproximada: 20cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 7, nome: "Kerberos", valor: 60, descritivo: `Feito em filamento Pintado a mão Altura aproximada: 8cm `, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 8, nome: "Princesa Mononoke", valor: 280, descritivo: `Feito em resina Pintado a mão Altura aproximada: 14cm `, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 9, nome: "Hoarding Bug", valor: 100, descritivo: `Feito em resina Pintado a mão Altura aproximada: 8,5cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 10, nome: "Kurama", valor: 150, descritivo: `Feito em resina Pintado a mão Altura aproximada: 15cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 11, nome: "Pyramid Head", valor: 450, descritivo: `Feito em resina Pintado a mão Altura aproximada: 18cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
    ];

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
    let currentObj:Produto[] = this.lista.filter(f => f.nome.toLowerCase().includes(_.target.value))
    currentObj.length > 0 ? this.listaFiltro = currentObj : ''
  }

}
