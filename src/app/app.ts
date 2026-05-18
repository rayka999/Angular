import { Component, signal } from '@angular/core';
import { CalculaMedia } from './calcular-media/calcular-media';

@Component({
  selector: 'app-root',
  imports: [CalculaMedia],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('media');
}