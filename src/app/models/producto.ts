export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    imagen_descripcion: string;
    constructor(id: number, nombre: string, descripcion: string, imagen: string, imagen_descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.imagen_descripcion = imagen_descripcion;
    }   
}
