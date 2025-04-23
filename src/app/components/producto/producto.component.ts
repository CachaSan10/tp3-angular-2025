import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-producto',
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  productos: Producto[] = [
   new Producto(1,  'Producto 1', 'Descripción del producto 1', 100, 'image/producto1.jpg', 'Descripción de la imagen del producto 1'),
   new Producto(2,  'Producto 2', 'Descripción del producto 2', 200, 'image/producto2.jpg', 'Descripción de la imagen del producto 2'),
   new Producto(3,  'Producto 3', 'Descripción del producto 3', 300, 'image/producto3.jpg', 'Descripción de la imagen del producto 3'), 
   new Producto(4,  'Producto 4', 'Descripción del producto 4', 400, 'image/producto4.jpg', 'Descripción de la imagen del producto 4'),
   new Producto(5,  'Producto 5', 'Descripción del producto 5', 500, 'image/producto5.jpg', 'Descripción de la imagen del producto 5'),
  ];
}
