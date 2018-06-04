import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';                 //api

import { AppComponent } from './app.component';
import { Input1Component } from './input1/input1.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BotonesComponent } from './botones/botones.component';
import { Input2Component } from './input2/input2.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    CarouselComponent,
    BotonesComponent,
    Input2Component,
    TarjetaComponent,
    TablaComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
