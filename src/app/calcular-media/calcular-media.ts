import { Component } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  imports: [],
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.scss',
})
export class CalculaMedia {
  protected mediaParcial: number | undefined
  protected mediafinal:number | undefined
  
  constructor() {
    this.mediaParcial = undefined;
    this.mediafinal=undefined
  }
  

  calcularMediaParcial(b1: number, b2: number, 
                       b3: number, b4: number) {
      this.mediaParcial = 
        (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10
  }

  calcularMediaFinal(mp:number,nf:number){
    this.mediafinal=(mp+nf)/2;
  }
}
