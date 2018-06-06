import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Entrenador} from '../models/entrenador';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component implements OnInit {

  constructor() { }
@Output() entrenadorCreado: EventEmitter<Entrenador> = new EventEmitter<Entrenador>();
  ngOnInit() {
  }

  crearEntrenador() {
    const entrenador: Entrenador = new Entrenador();
    entrenador.nombres = ' ';
    entrenador.apellidos = ' ';
    entrenador.fechaNacimiento = ' ';
    entrenador.numeroMedallas = ' ';
    entrenador.campeonActual = ' ';
    console.log('[Nuevo Entrenador]: ', entrenador);
    this.entrenadorCreado.emit(entrenador);
  }

}
