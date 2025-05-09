import { Injectable } from '@angular/core';
import { Boleto } from '../models/boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  boletos: Array<any>;

  constructor() {
    this.boletos = new Array<Boleto>();
    this.boletos = [
      {
        id: 1,
        dni: "43245654",
        precioReal:3000,
        precio: 1950,
        categoriaTurista: 'Menor',
        fechaCompra: '2025-04-14 15:20:00',
        email: 'juan@gmail.com'
      },
      {
        id: 2,
        dni: "36432166",
        precioReal:3000,
        precio: 3000,
        categoriaTurista: 'Adulto',
        fechaCompra: '2025-03-14 16:10:00',
        email: 'vdf@gmail.com'
      },
      {
        id: 3,
        dni: "23245654",
        precioReal:3000,
        precio:1500,
        categoriaTurista: 'Jubilado',
        fechaCompra: '2025-04-14 15:20:00',
        email: 'kie@hotmail.com'
      }]
  }

  obtenerBoletos(){
    return this.boletos;
  }

  agregarBoleto(boleto:Boleto){
    boleto.id = this.obtenerIdDisponible();
    this.boletos.push(boleto);
  }

  obtenerIdDisponible(){
    var maxId: number = 0 ;
    for(let i=0;i < this.boletos.length; i++){
      if(maxId < this.boletos[i].id){
        maxId = this.boletos[i].id;
      }
    }
    return (maxId + 1);
  }

  obtenerBoleto(id:number):Boleto{
    let boleto:Boleto;
    let indice:number = this.boletos.findIndex(bol => (bol.id == id));
    boleto = this.boletos[indice]; 
    return boleto;
  }

  actualizarBoleto(boleto: Boleto){
    let indexBoleto:number = this.boletos.findIndex(bol => (bol.id == boleto.id));
  this.boletos[indexBoleto]=boleto;
  }

  eliminarBoleto(boleto: Boleto){
    let indexBoleto:number = this.boletos.findIndex(bol => (bol.id == boleto.id));
    this.boletos.splice(indexBoleto,1);
  }

}
