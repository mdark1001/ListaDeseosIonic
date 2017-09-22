import { Component, OnInit } from '@angular/core';
import {ListaService} from '../../app/services/lista.services';
@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(
    private _listaService:ListaService
  ) {

   }

  ngOnInit() {}
}
