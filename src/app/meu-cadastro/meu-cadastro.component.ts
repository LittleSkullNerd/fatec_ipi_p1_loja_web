import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-meu-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meu-cadastro.component.html',
  styleUrl: './meu-cadastro.component.css'
})
export class MeuCadastroComponent implements OnInit {
  public cliente: Cliente = { cep: '', cidade: '', clientId: 0, codigo: 0, complemento: '', documento: '', email: '', estado: '', logradouro: '', nome: '', telefone: '', senha: '' }

  constructor(private _service: ClienteService, private _router: Router) { }

  ngOnInit(): void {
    const userData = localStorage.getItem('usuario');

    if (userData) {
      this.cliente = JSON.parse(userData);
    }
  }


  async atualizar() {
    try {
      this._service.updateCliente(this.cliente).subscribe(s => {
        alert("Dados atualizados!")
        localStorage.setItem('usuario', JSON.stringify(s));
        window.location.reload()
      })
    } catch (error) {
      alert("Ocorreu um erro durante o cadastro!");
    }
  }

  async deslogar() {
    localStorage.removeItem('usuario')
    this._router.navigate(['/login'])
  }
}
