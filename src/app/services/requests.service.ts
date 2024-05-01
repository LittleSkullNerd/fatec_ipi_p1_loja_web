import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  public inputValue: string | undefined
  constructor(_http: HttpClient) { }

  getProducts(): Produto[] {
    return [
      {
        codigo: 1, nome: "Umbreon Halloween", valor: 80, descritivo: `Feito em resina \n Pintado a mão \n Altura aproximada: 8cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 2, nome: "Kirby Heart", valor: 50, descritivo: `Feito em filamento Pintado a mão Altura aproximada: 6cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 3, nome: "Skeleton King", valor: 150, descritivo: `Feito em resina Pintado a mão Altura aproximada: 10cm `, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 4, nome: "Jack Frost", valor: 200, descritivo: `Feito em resina Pintado a mão Altura aproximada: 20cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 5, nome: "Pyro Jack", valor: 250, descritivo: `Feito em resina Pintado a mão Altura aproximada: 20cm `, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 6, nome: "Malenia", valor: 310, descritivo: `Feito em resina Pintado a mão Altura aproximada: 20cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 7, nome: "Kerberos", valor: 60, descritivo: `Feito em filamento Pintado a mão Altura aproximada: 8cm `, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 8, nome: "Princesa Mononoke", valor: 280, descritivo: `Feito em resina Pintado a mão Altura aproximada: 14cm `, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 9, nome: "Hoarding Bug", valor: 100, descritivo: `Feito em resina Pintado a mão Altura aproximada: 8,5cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 10, nome: "Kurama", valor: 150, descritivo: `Feito em resina Pintado a mão Altura aproximada: 15cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
      {
        codigo: 11, nome: "Pyramid Head", valor: 450, descritivo: `Feito em resina Pintado a mão Altura aproximada: 18cm`, valorPromo: 90, estoque: 10, destaque: 1
      },
    ];
  }

  updateValue(newValue: string) {
    this.inputValue = newValue;
    console.log('Service value updated:', this.inputValue);
  }
}
