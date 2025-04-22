export class Noticia {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    descipcion_imagen: string;

    constructor(id: number, titulo: string, descripcion: string, imagen: string, descipcion_imagen: string) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.descipcion_imagen = descipcion_imagen;
    }
}
