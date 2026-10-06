import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AppTeste');
  texto: string = 'Este é meu primeiro projeto Angular';
  numero: number = 0;
  vetNumerosGerados: number[] = [];

  gerarNumeroAleatorio(): void {
    this.numero = Math.round(Math.random() * 100);
    this.vetNumerosGerados.push(this.numero);
  }
}