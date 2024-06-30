import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalhe-produto.component.html',
  styleUrl: './detalhe-produto.component.css'
})
export class DetalheProdutoComponent {
  public mensagem: String = "";
  public obj: Produto = new Produto();

  public constructor(private service: ProdutoService) {
    let codigo = localStorage.getItem("detalhe");
    if (codigo == null)
      this.mensagem = "produto nao encontrado!";
    else {
      this.service.carregar(codigo).subscribe(
        (data: Produto) => {
          if (data == null)
            this.mensagem = "Produto nao encontrado!";
          else
            this.obj = data;
        },
        (error) =>
          this.mensagem = "ocorreu um erro no carregamento do Detalhe!" + error
      )
    }
  }
}
