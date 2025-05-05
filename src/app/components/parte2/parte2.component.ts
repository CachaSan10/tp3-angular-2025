import { Component, OnInit } from '@angular/core';
import { Boleto } from '../../models/boleto';
import { BoletoService } from '../../services/boleto.service';
import { Router , Route } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-parte2',
  imports: [CommonModule, RouterModule],
  templateUrl: './parte2.component.html',
  styleUrl: './parte2.component.css'
})
export class Parte2Component implements OnInit {

  boletos: Array<Boleto>;
  resumen:boolean = false;

  constructor(private boletoService:BoletoService, private router:Router){
    this.boletos = new Array<Boleto>();
    this.cargarBoletos();
  }

  ngOnInit(): void {
  }

  cargarBoletos(){
    this.boletos = this.boletoService.obtenerBoletos();
  }

  agregarBoleto(){
    this.router.navigate(["formulario-boleto",0])
  }

  modificarTicket(boleto: Boleto){
    this.router.navigate(["formulario-boleto",boleto.id])

  }

  eliminarTicket(boleto: Boleto){
      this.boletoService.eliminarBoleto(boleto);
    
  }

  resumenBoleto(){
    this.resumen=true;
  }

  
  sumarBoletoMenor(){
    let Total=0;
      this.boletos.forEach((bol)=>{
        if(bol.categoriaTurista=="Menor"){
          Total+=bol.precio;
        }
      });
      return Total;
  }

  sumarBoletoAdulto(){
    let Total=0;
    this.boletos.forEach((bol)=>{
      if(bol.categoriaTurista=="Adulto"){
        Total+=bol.precio;
      }
    });
    return Total;
  }


  sumarBoletoJubilado(){
    let Total=0;
    this.boletos.forEach((bol)=>{
      if(bol.categoriaTurista=="Jubilado"){
        Total+=bol.precio;
      }
    });
    return Total;
  }

  obtenerTotalGeneral(){
    let total:number;
    total = this.sumarBoletoMenor() + this.sumarBoletoAdulto() + this.sumarBoletoJubilado();
    return total;
  }

}
