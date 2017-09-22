import { Injectable } from '@angular/core';
import {Lista} from '../classes/listas';
@Injectable()
export class ListaService {
  lista:Lista[]=[]; // Se declara como un array de Objetos, sino marca un error con el push 

  constructor() {
    let lista1=new Lista('Compras');
    let lista2=new Lista('Regalos navidad');
    let lista3=new Lista('Cosas por hacer');

    this.lista.push(lista1);
    this.lista.push(lista2);
    this.lista.push(lista3);
  console.log("Init Services...");

 }
}
