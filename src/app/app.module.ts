import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import {PendientesComponent} from '../pages/pendientes/pendientes.component';
import {TerminadosComponent} from '../pages/terminados/terminados.component';
//Services

import {ListaService} from '../app/services/lista.services';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AgregarComponent} from "../pages/agregar/agregar.component";
import {placeholderPipe} from "./pipes/placeholder.pipe";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    placeholderPipe,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
