import {ListaItem} from './lista-item';


export class Lista{
    nombre_lista:string;
    estatus_lista:boolean;
    items:ListaItem[];
    fecha_creacion:Date;

    constructor(nombre:string){
      this.nombre_lista=nombre;
      this.estatus_lista=false;
      this.fecha_creacion=new Date('Y-m-d H:i:s');
    }

}
