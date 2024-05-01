import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
mensagemEnviada: any;
enviarFormulario() {
throw new Error('Method not implemented.');
}
  public mensagem: String = "";

  public enviar(){
      this.mensagem = "Contato enviado com sucesso!!! Verifique !!!";
  }

}
