import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.compoent.html'
})
export class AgregarComponent implements OnInit{
  nombreLkista:string;
  constructor(public navCtrl: NavController) {
    this.nombreLkista='';
  }


  ngOnInit(){}

}
