import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-esquecisenha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esquecisenha.component.html',
  styleUrl: './esquecisenha.component.css'
})
export class EsquecisenhaComponent {
  emailSent: boolean = false

  bait() {
    this.emailSent = !this.emailSent
  }
}
