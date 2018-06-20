import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entrenador } from '../models/entrenador';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component implements OnInit {
  entrenador: Entrenador;
@Output() entrenadorCreado: EventEmitter<Entrenador> = new EventEmitter<Entrenador>();
  constructor() { }

  ngOnInit() {
  }

  aplicarClase(inputNombre: string,
    inputApellido: string,
    inputFechaNacimiento: string,
    inputNumeroMedallas: number,
    inputCampeonActual: boolean
  ) {
    this.entrenador = new Entrenador();
    this.entrenador.nombres = inputNombre;
    this.entrenador.apellidos = inputApellido;
    this.entrenador.fechaNacimiento = inputFechaNacimiento;
    this.entrenador.numeroMedallas = inputNumeroMedallas;
    this.entrenador.campeonActual = inputCampeonActual;
    this.entrenador.imagenes = 'https://vignette.wikia.nocookie.net/es.pokemon/images/7/7b/Icono_Pok%C3%A9mon_Duel.png';
    this.entrenadorCreado.emit(this.entrenador);
  }


}
