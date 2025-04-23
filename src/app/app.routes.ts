import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';   
import { ProductoComponent } from './components/producto/producto.component';   
import { JuegoComponent } from './components/juego/juego.component';
export const routes: Routes = [
  {path: 'home', component: HomeComponent },   
  {path: 'producto', component: ProductoComponent},
  {path: 'juego', component: JuegoComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
