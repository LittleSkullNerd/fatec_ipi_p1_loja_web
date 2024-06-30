import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
finalizarCompra() {
throw new Error('Method not implemented.');
}
  public lista: Item[] = [];
  public mensagem: String = "";
  public totalCesta: number = 0;

  constructor(){
    let json = localStorage.getItem("cesta");
    if(json==null){
      this.mensagem = "Sua Cesta de Compras esta vazia!";
    } 
    else {
      this.lista = JSON.parse(json);
      for(let item of this.lista){
        this.totalCesta = this.totalCesta + item.total;
      }
    }
  }

  limpar(){
    this.lista = [];
    localStorage.removeItem("cesta");
  }
}
