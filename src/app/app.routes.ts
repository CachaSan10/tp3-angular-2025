import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';   
import { ProductoComponent } from './components/producto/producto.component';   
import { JuegoComponent } from './components/juego/juego.component';
import { Parte2Component } from './components/parte2/parte2.component';
import { FormularioParte2Component } from './components/formulario-parte2/formulario-parte2.component';
export const routes: Routes = [
  {path: 'home', component: HomeComponent },   
  {path: 'producto', component: ProductoComponent},
  {path: 'juego', component: JuegoComponent},
  {path: 'parte2', component: Parte2Component},
  { path: 'formulario-boleto/:id', component: FormularioParte2Component},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
