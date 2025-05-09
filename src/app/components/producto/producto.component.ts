import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-producto',
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  path = 'images/producto/';
  
  id:number = 4;

  mostrarMensajeCompra:boolean = true;

  productos: Producto[] = [
   new Producto(1,  'Notebook Samsung Galaxy Book3', 'La Notebook Samsung Galaxy Book3 de 15.6" en color plateado ofrece un rendimiento potente gracias a su procesador Intel Core i7, 16GB de RAM y un rápido almacenamiento SSD de 512GB. Ideal para productividad y tareas exigentes en un diseño elegante y portátil.', 100, 1, this.path + 'netbook-samsung.webp', 'Notebook Samsung Galaxy Book3',0.3, 'disponible'),
   new Producto(2,  'Parlante Philips TAX3705/77N', 'El parlante Philips TAX3705/77N es un altavoz portátil para fiestas que destaca por su sonido potente con graves definidos, luces de fiesta dinámicas, resistencia a salpicaduras, micrófono para karaoke, y batería de larga duración para disfrutar de la música en cualquier lugar. Ideal para animar reuniones y eventos.', 200, 1, this.path + 'parlante-philips.webp', 'Parlante Philips TAX3705/77N',0.2, 'disponible'),
   new Producto(3,  'Celular Motorola G32', 'El Motorola G32 es un celular de gama media que destaca por su pantalla fluida de 90Hz, una batería de larga duración y una cámara principal de 50MP. Ofrece un buen rendimiento para tareas diarias y multimedia a un precio accesible.', 300, 1, this.path + 'celular-motorola.webp', 'Celular Motorola G32',0.1, 'reparacion'), 
   new Producto(4,  'Licuadora Atma LV24R1A', 'La licuadora Atma LV24R1A roja de 450W es un electrodoméstico de cocina para preparar licuados y batidos. Su diseño es compacto y de color rojo.', 400, 1, this.path + 'licuadora-atma.webp', 'Licuadora Atma LV24R1A',0.4, 'disponible')
  ];

  productosComprado: Producto[] = [];
  productosDisponible: Producto[] = [];
   ngOnInit(): void {
    this.productos.forEach(p => {
      if (p.estado === 'disponible') {
        this.productosDisponible.push(p);
      }
    });
   }

   calcularTotalCompra(producto: Producto) {
    let total = 0;
    total = producto.precio- producto.precio * producto.descuento;
    return total;
  }

  calcularPrecioTotalConDescuento(producto: Producto) {
    let total = 0;
    let totalDescuento = 0;
    totalDescuento= this.calcularTotalCompra(producto) * producto.cantidad;
    return totalDescuento;	
  }


  agregarProducto(producto: Producto) { 

    if(this.esProductoRepetido(producto)){
      this.id+=1;    
       this.productosComprado.push(new Producto(this.id,producto.nombre,producto.descripcion,producto.precio,1,producto.imagen,producto.imagen_descripcion));
    }else{
      
      this.productosComprado.push(producto)
    }
  }




  esProductoRepetido(producto: Producto){
    let band=false;
    this.productosComprado.forEach(p => {
      if (p.id === producto.id) {
         band = true;
      }
    });
    return band;
  }

  eliminarProducto(producto: Producto) {
   this.productosComprado = this.productosComprado.filter(p => p.id !== producto.id);
  }

  sumarCantidadProducto(producto: Producto) {
    this.productosComprado.forEach(p => {
      if (p.id === producto.id) {
        p.cantidad += 1;
      }
    });   
  }

  restarCantidadProducto(producto: Producto) {
    this.productosComprado.forEach(p => {
      if (p.id === producto.id) {
        p.cantidad -= 1;
      }
    });
    if (producto.cantidad === 0) {
      this.eliminarProducto(producto);
    }
  } 

  mostrarTotalProducto(producto: Producto) {
    let total = 0;
    this.productosComprado.forEach(p => { 
      if (p.id === producto.id) {
        total = p.precio * p.cantidad;
      }
    });
    return total;
  } 

  acreditarCompra(){
    this.productosComprado = [];
    this.mostrarMensajeCompra=false;
  }

  cerrarCarrito(){
    this.mostrarMensajeCompra=true;
  }


}
