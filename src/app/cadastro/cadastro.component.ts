import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  public mensagem: string = "";
  public cliente: Cliente = { cep: '', cidade: '', clientId: 0, codigo: 0, complemento: '', documento: '', email: '', estado: '', logradouro: '', nome: '', telefone: '', senha: '' }

  public constructor(private _service: ClienteService) { }

  async gravar() {
    try {
      this._service.cadastrar(this.cliente).subscribe(s => {
        alert("Usuário cadastrado!")
        window.location.reload()
      })
    } catch (error) {
      alert("Ocorreu um erro durante o cadastro!");
    }
  }
}
