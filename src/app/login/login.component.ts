import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { Login } from '../model/login';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public mensagem: String = "";
  public obj: Cliente = new Cliente();
  login: Login = { email: '', senha: '' };

  constructor(private _service: ClienteService, private _router: Router) { }

  ngOnInit(): void {
    const loggedUser = localStorage.getItem('usuario');

    if (loggedUser && loggedUser.length > 10) {
      this._router.navigate(['/meu-cadastro']);
    }
  }

  async entrar() {
    try {
      this._service.login(this.login).subscribe(s => {
        if (s.email.length > 0) {
          alert(`Bem vindo! ${s.nome}`)
          this._router.navigate(['/']);
        }

        localStorage.setItem('usuario', JSON.stringify(s));
      });

    } catch (error) {
      alert("Ocorreu um erro durante a verificação do login!");
    }
  }
}
