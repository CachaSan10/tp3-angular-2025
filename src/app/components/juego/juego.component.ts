import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-juego',
  imports: [CommonModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent{

  abcedario: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  palabras: string[] = ['PLANETA','ISLA','COMPUTADORA','TECLADO','PROGRAMACION'];

  palabraSecreta: string[] = []

  letraIngresada: string[] = []; 

  letraAcertada: boolean[] = [];

  letraCorrecta: string[] = []
  
  cantidadIntentos: number = 10;

  juegoIniciado: boolean = false;

  juegoFinalizado: boolean = false;

  botonReiniciar: boolean = true;

  mostrarContadorIntentos: boolean = true;

  ocultarAbecedario: boolean = true;

  palabraAdivinada: boolean = false;

  palabraIncorrecta: boolean = false;

  palabraCorrecta: boolean = false;

  // Inicia el Juego
empezarJuego() {
  this.juegoIniciado=true;
  this.ocultarAbecedario=false;
  this.botonReiniciar=false;
 this.mostrarContadorIntentos=false;
  let indiceAleatorio = Math.floor(Math.random() * (5 - 0) + 0);
  const palabra = this.palabras[indiceAleatorio]; 
  console.log(indiceAleatorio);
  console.log(palabra);
  this.agregarLetraPalabraSecreta(palabra);

}

// Agrega las letras de la palabra seleccionada al azar y va agregando cada caracter al arreglo palabra Secreta
agregarLetraPalabraSecreta(palabra:string){
  for(let i=0;palabra.length>i;i++){
    this.palabraSecreta.push(palabra[i]);
  }
}

//Inicializar el arreglo de palabras acertadas
iniciarPalabrasAcertadas(){
  this.letraAcertada = Array(this.palabraSecreta.length).fill(false);
}

 agregarLetra(letraSeleccionada: string) {
    this.letraIngresada.push(letraSeleccionada);
    let acierto = false;

    for (let i = 0; i < this.palabraSecreta.length; i++ ){
      if(this.palabraSecreta[i] === letraSeleccionada){
        this.letraAcertada[i] = true;
        this.letraCorrecta[i] = letraSeleccionada;
        acierto = true;
      }
    }

    if (!acierto){
      this.cantidadIntentos--;
      if (this.cantidadIntentos===0){
        this.juegoFinalizado=true;
      }
    }



  }

  cerrarModalPerdida(): void {
    this.juegoIniciado = false;
  }



  /*
  verificarLetra() {
    if (this.palabraSecreta.includes(this.letraIngresada)) {
      this.palabraCorrecta = true;
    } else {
      this.palabraIncorrecta = true;
    }
  } 

  verificarPalabra() {
    if (this.palabraIngresada.join('') === this.palabraSecreta.join('')) {
      this.palabraAdivinada = true;
    }
  } 
    */
}
