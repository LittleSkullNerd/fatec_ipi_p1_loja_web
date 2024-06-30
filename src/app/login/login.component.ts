import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { Login } from '../model/login';
import { ClienteService } from '../services/cliente.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public mensagem: String = "";
  public obj: Cliente = new Cliente();
  login: Login = { email: '', senha: '' };

  constructor(private _service: ClienteService) { }

  async entrar() {
    try {
      const userExists = await lastValueFrom(this._service.login(this.login));
      if (userExists) {
        alert("Usuário encontrado e login bem-sucedido!");
      } else {
        alert("Usuário não encontrado ou credenciais inválidas.");

      }
    } catch (error) {
      alert("Ocorreu um erro durante a verificação do login!");
    }
  }

}
