import { Component } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {
  searchTerm: string = ''; // Definindo searchTerm como uma string

  search() {
    // Adicione um console.log() para verificar se o método está sendo chamado corretamente
    console.log('Botão de pesquisa clicado!');

    // Coloque sua lógica de pesquisa aqui
    console.log('Pesquisando por:', this.searchTerm);
  }
}



