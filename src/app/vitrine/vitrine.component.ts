import { Component } from '@angular/core';
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
  public lista: Produto[] = 
  [{codigo:1,nome:"Umbreon Halloween",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:2,nome:"Kirby Heart",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:3,nome:"Skeleton King",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:4,nome:"Jack Frost",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:5,nome:"Pyro Jack",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:6,nome:"Malenia",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:7,nome:"Kerberos",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:8,nome:"Princesa Mononoke",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:9,nome:"Hoarding Bug",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:10,nome:"Kurama",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    {codigo:11,nome:"Pyramid Head",valor:100, descritivo:"",
    valorPromo:90, estoque:10, destaque:1},
    
  ];

  public comprar(produto: Produto){
    let novo: Item = new Item();
    novo.codigoProduto = produto.codigo;
    novo.nomeProduto = produto.nome;
    novo.valor = produto.valor;
    novo.qtd = 1;
    novo.total = produto.valor;
    let lista : Item[] = [];
    let json = localStorage.getItem("cesta");
    if(json==null){
      lista.push(novo);  
      console.log(JSON.stringify(lista));
    } else {
      lista = JSON.parse(json);
      lista.push(novo);
    }  
    localStorage.setItem("cesta",JSON.stringify(lista));
    window.location.href="./cesta";
  }
}
