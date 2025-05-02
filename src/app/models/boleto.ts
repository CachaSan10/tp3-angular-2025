export class Boleto {
    id: number;
    dni: string;
    precioReal:number;
    precio: number;
    categoriaTurista: string;
    fechaCompra: Date;
    email: string;

    constructor(id:number, dni:string,precioReal:number  ,precio:number ,categoriaTurista: string, fechaCompra: Date, email:string){
        this.id = id;
        this.dni = dni;
        this.precioReal = precioReal;
        this.precio = precio;
        this.categoriaTurista = categoriaTurista;
        this.fechaCompra = fechaCompra;
        this.email = email;
    }

}
