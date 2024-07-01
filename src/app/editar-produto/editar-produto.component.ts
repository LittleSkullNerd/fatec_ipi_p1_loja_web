import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-produto.component.html',
  styleUrl: './editar-produto.component.css'
})
export class EditarProdutoComponent {
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
    this._service.buscarPorId(this.id).subscribe((s: Produto) => { this.esteProduto = s });
  }

  public atualizar(produto: Produto) {
    this._service.update(produto).subscribe(s => {
      alert(`Produto atualizado com sucesso!`)
      window.location.reload()
    })
  }
}
