import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-juego',
  imports: [CommonModule, FormsModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

  abcedario: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  palabrasEquiposFutbol: string[] = ['BOCA', 'FERRO', 'RIVER', 'RIESTRA', 'RACING', 'INDEPENDIENTE', 'ESTUDIANTES', 'UNION', 'PLATENSE', 'BANFIELD']

  palabrasPaises: string[] = ['ARGENTINA', 'BOLIVIA', 'COLOMBIA', 'ALEMANIA', 'ESPAÑA', 'PORTUGAL', 'BRASIL', 'JAPON', 'CHINA', 'FRANCIA']

  palabraSecreta: string[] = []

  letraIngresada: string[] = [];

  letraAcertada: boolean[] = [];

  letraCorrecta: string[] = [];

  categoriaSeleccionada: string = "";

  categoria: string = "";

  mostrarTituloCategoria: boolean = true;

  mostrarImagen: boolean = true;

  mostrarModal: boolean = false;

  modalGanador : boolean = false;

  modalPerdedor : boolean = false;

  cantidadIntentos: number = 6;

  cantidadErrores: number = 0;

  imagenAhorcado: string = "";

  juegoIniciado: boolean = false;

  botonReiniciar: boolean = true;

  mostrarContadorIntentos: boolean = true;

  ocultarAbecedario: boolean = true;

  palabraAdivinada: boolean = false;


  // Inicia el Juego
  empezarJuego() {
    this.juegoIniciado = true;
    this.mostrarModal = true;

  }

  // palabra seleccionada al azar
  seleccionarPalabraAleatoria() {
    var indiceAleatorio = Math.floor(Math.random() * (10 - 0) + 0);
    var palabra: string;
    switch (this.categoriaSeleccionada) {
      case "1":
        palabra = this.palabrasEquiposFutbol[indiceAleatorio];
        this.agregarLetraPalabraSecreta(palabra);
        this.categoria = "Equipo de futbol Argentino"

        break;
      case "2":
        palabra = this.palabrasPaises[indiceAleatorio];
        this.agregarLetraPalabraSecreta(palabra);
        this.categoria = "Nombre de Pais"
        break;
      default:
        break;
    }
  }

  // Agrega las letras de la palabra seleccionada al azar y va agregando cada caracter al arreglo palabra Secreta
  agregarLetraPalabraSecreta(palabra: string) {
    for (let i = 0; palabra.length > i; i++) {
      this.palabraSecreta.push(palabra[i]);
    }
  }

  //Inicializar el arreglo de palabras acertadas
  iniciarPalabrasAcertadas() {
    this.letraAcertada = Array(this.palabraSecreta.length).fill(false);
  }

  agregarLetra(letraSeleccionada: string) {
    this.letraIngresada.push(letraSeleccionada);
    let acierto = false;
    for (let i = 0; i < this.palabraSecreta.length; i++) {
      if (this.palabraSecreta[i] === letraSeleccionada) {
        this.letraAcertada[i] = true;
        this.letraCorrecta[i] = letraSeleccionada;
        console.log(this.letraCorrecta);
        acierto = true;
      }
    }

    if (!acierto) {
      this.cantidadIntentos--;
      this.cantidadErrores++;
      this.imagenAhorcado = 'images/ahorcado/ahorcado-' + String(this.cantidadErrores) + '.jpg';
      if (this.cantidadIntentos === 0 ) {
          this.mostrarModalPerdedor();
      }
    }else{
      if(this.cantidadErrores<6 && this.letraCorrecta.join('') === this.palabraSecreta.join('')){
        this.palabraAdivinada=true;
        this.mostrarModalGanador();

          console.log("Felicidades ganaste")
      }
    }

  }

  cerrarModalPerdedor(): void {
    this.reiniciarPartida();
    this.juegoIniciado = false;
    this.modalPerdedor = false;
  }

  mostrarModalGanador(): void{
    this.modalGanador = true;
  }

  mostrarModalPerdedor():void{
    this.modalPerdedor=true;
  }

 reiniciarPartida():void{
  this.ocultarAbecedario = true;
  this.botonReiniciar = true;
  this.mostrarContadorIntentos = true;
  this.mostrarModal = true;
  this.mostrarTituloCategoria = true;
  this.mostrarImagen = true;
  this.palabraSecreta=[];
  this.letraCorrecta=[];
  this.letraAcertada=[];
  this.letraIngresada=[];
  this.mostrarModal=false;
  this.cantidadIntentos=6;
  this.cantidadErrores=0;
 }

 reiniciarJuego(){
  this.reiniciarPartida();
  this.mostrarModal=true;
  this.juegoIniciado=true;
 }

  cerrarModalGanador():void{
   this.reiniciarPartida();
   this.juegoIniciado = false;
    this.modalGanador = false;
  }

  cerrarModalCategoria() {
    this.ocultarAbecedario = false;
    this.botonReiniciar = false;
    this.mostrarContadorIntentos = false;
    this.mostrarModal = false;
    this.mostrarTituloCategoria = false;
    this.mostrarImagen = false;
    this.imagenAhorcado = 'images/ahorcado/ahorcado-' + String(this.cantidadErrores) + '.jpg';
    this.seleccionarPalabraAleatoria();
  }

}
