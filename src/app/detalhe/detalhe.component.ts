import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestsService } from '../services/requests.service';
import { ActivatedRoute } from '@angular/router';
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
  public esteProduto: Produto | undefined

  constructor(
    private _service: RequestsService,
    private _router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.produtos = this._service.getProducts();
    this.esteProduto = this.produtos.find(f => f.codigo == this._router.snapshot.params['codigo'])
  }
}
