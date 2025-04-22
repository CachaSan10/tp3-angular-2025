import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Noticia } from '../../models/noticia';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  path = 'images/';
  noticias: Noticia[] = [
    new Noticia(1, 'Financial Times advierte por "riesgos electorales" para Javier Milei tras el acuerdo con el FMI y la flexibilización del cepo', 'El diario británico The Financial Times publicó este domingo un artículo en el que advierte sobre los "riesgos electorales" para la gestión de Javier Milei que podrían generar las recientes medidas del acuerdo con el FMI y la eliminación del cepo cambiario para personas humanas, en la dinámica del dólar y la inflación.', this.path + 'noticia1.webp', 'Imagen de Milei'),
    new Noticia(2, 'La muerte del papa Francisco', 'La Santa Sede confirmó que el Papa falleció por un derrame cerebral durante la madrugada de este lunes. Además, se informó podrían trasladar el cuerpo del pontífice el miércoles a San Pedro para el último saludo de los fieles.', this.path + 'noticia2.webp', 'foto de papa Francisco'),
    new Noticia(3, 'Deportivo Riestra y San Lorenzo igualaron sin goles en un partido con pocas emociones', 'Deportivo Riestra y San Lorenzo empataron 0 a 0 en el Guillermo Laza, por la 14° jornada del Torneo Apertura. La igualdad no le sirve a ninguno, ya que el Ciclón no pudo superar a Rosario Central en la tabla de posiciones de la Zona B, mientras que el Malevo tampoco consiguió asegurarse la clasificación a los octavos de final, aunque está cada vez más cerca.', this.path + 'noticia3.webp', 'Iker Muniain, de lo más destacado de San Lorenzo en el empate ante Riestra.'),
  ];
}
