export class Boleto {
    id: number;
    dni: string;
    precio: number;
    categoriaTurista: string;
    fechaCompra: Date;
    email: string;

    constructor(id:number, dni:string,precio:number ,categoriaTurista: string, fechaCompra: Date, email:string){
        this.id = id;
        this.dni = dni;
        this.precio = precio;
        this.categoriaTurista = categoriaTurista;
        this.fechaCompra = fechaCompra;
        this.email = email;
    }

}
