import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Entrenador} from "../models/entrenador";


@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  @Input() listaEntrenadores : Entrenador[];
  @Output() entrenadorCreado : EventEmitter<Entrenador> = new EventEmitter<Entrenador>();
  constructor() { }

  ngOnInit() {

  }
  seleccionarEntrenador(entrenador){
    this.entrenadorCreado.emit(entrenador);
  }

}
