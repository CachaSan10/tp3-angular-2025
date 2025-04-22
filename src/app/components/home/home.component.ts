import { Component } from '@angular/core';
import { Noticia } from '../../models/noticia';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  noticias: Noticia[] = [
    new Noticia(1, 'Noticia 1', 'Descripción de la noticia 1', 'https://via.placeholder.com/150'),
    new Noticia(2, 'Noticia 2', 'Descripción de la noticia 2', 'https://via.placeholder.com/150'),
    new Noticia(3, 'Noticia 3', 'Descripción de la noticia 3', 'https://via.placeholder.com/150'),
  ];
}
