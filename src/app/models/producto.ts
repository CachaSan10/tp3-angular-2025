export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    imagen: string;
    imagen_descripcion: string;
    
    constructor(id: number, nombre: string, descripcion: string, precio: number, cantidad: number, imagen: string, imagen_descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.imagen_descripcion = imagen_descripcion;
    }   
}
