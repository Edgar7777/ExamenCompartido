import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entrenador } from '../models/entrenado
r';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component implements OnInit {
  entrenador: Entrenador;
  constructor() { }
  @Output() entrenadorCreado: EventEmitter<Entrenador> = new EventEmitter<Entrenador>();
  ngOnInit() {
  }

  aplicarClase(inputNombre: string,
    inputApellido: string,
    inputFechaNacimiento: string,
    inputNumeroMedallas: int,
    inputCampeonActual: boolean
  ) {
    this.entrenador = new Entrenador();
    this.entrenador.nombreEnt = inputNombre;
    this.entrenador.apellidoEnt = inputApellido;
    this.entrenador.fechaNacimiento = inputFechaNacimiento;
    this.entrenador.numeroMedallas = inputNumeroMedallas;
    this.entrenador.campeonActual = inputCampeonActual;
    this.entrenador.imagenes = 'https://i.pinimg.com/originals/97/e1/4b/97e14b497ab16ba4980b863f5da714b5.jpg';
    this.entrenadorCreado.emit(this.entrenador);
  }


}
