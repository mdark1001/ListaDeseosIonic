import { Component, OnInit } from '@angular/core';
import {ListaService} from '../../app/services/lista.services';

import { NavController} from 'ionic-angular';
import {AgregarComponent} from "../agregar/agregar.component";

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(
    private _listaService:ListaService,
    private navCtr : NavController
  ) {

   }

  ngOnInit() {}
  irAgregar(){
    //alert("aaaaa");
    this.navCtr.push(AgregarComponent);

  }
}
