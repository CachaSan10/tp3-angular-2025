import { Component, OnInit } from '@angular/core';
import { Boleto } from '../../models/boleto';
import { BoletoService } from '../../services/boleto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-formulario-parte2',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './formulario-parte2.component.html',
  styleUrl: './formulario-parte2.component.css'
})
export class FormularioParte2Component implements OnInit {
  boleto: Boleto;
  accion: String="new";
  estado: boolean=false;
  constructor(private boletoService:BoletoService, private router:Router,private activatedRoute: ActivatedRoute) {
    this.boleto=new Boleto(0,'',3000,0,'',new Date(),''); 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == 0){
      this.accion = "new";
      }else{
      this.accion = "update";
      this.cargarBoleto(params['id']);
      }
      });
      
  }

  cargarBoleto(id: number){
    this.boleto= this.boletoService.obtenerBoleto(id);
  }

  registrarBoleto(){
    this.boleto.fechaCompra= new Date();
    this.boleto.precio=this.calcularPrecioCategoriaTurista();
    this.boletoService.agregarBoleto(this.boleto);
    this.estado=false;
    this.router.navigate(["parte2"]);
  }


  volverMenuPricipal(){
    this.router.navigate(["parte2"]);

  }
 
  calcularPrecioCategoriaTurista(){
   
    if(this.boleto.categoriaTurista==="Menor"){
      return this.boleto.precioReal-this.boleto.precioReal*0.35;
    }else {
      if(this.boleto.categoriaTurista==="Jubilado"){
        return this.boleto.precioReal-this.boleto.precioReal*0.5;
      }else
      return this.boleto.precioReal;
  }

}

  mostrarPrecioCobrado(){
    var bandera = this.boleto.categoriaTurista==="Menor" || this.boleto.categoriaTurista==="Adulto" || this.boleto.categoriaTurista==="Jubilado" ;
    if( bandera && this.boleto.precioReal>0)
    this.estado=true;

  }
 

  modificarBoleto(){
    this.boleto.fechaCompra= new Date();
    this.boleto.precio=this.calcularPrecioCategoriaTurista();
    this.boletoService.actualizarBoleto(this.boleto)
    this.estado=false;
    this.router.navigate(["parte2"]);
  }
}
