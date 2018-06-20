import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entrenador } from "../models/entrenador";
import { Pokemon } from "../models/pokemon";

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css']
})
export class Input2Component implements OnInit {

  @Input() entrenador : Entrenador;
  pokemon: Pokemon;

  @Output() pokemonInsertado : EventEmitter<Pokemon> = new
    EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

  leerDatos(numPok: number, nombPok: string, poderEsp1: string, poderEsp2: string, fechaCapt: string, nivelPokemon: number, idEntrenador: number) {
    this.pokemon.numeroPokemon = numPok;
    this.pokemon.nombrePokemon = nombPok;
    this.pokemon.poderEspecialUno = poderEsp1;
    this.pokemon.poderEspecialDos = poderEsp2;
    this.pokemon.fechaCaptura = fechaCapt;
    this.pokemon.nivel = nivelPokemon;
    this.pokemon.entrenadorId = idEntrenador;
    //console.log('POR ENVIAR: ', this.pokemon);
    this.pokemonInsertado.emit(this.pokemon);
    this.pokemon = new Pokemon();
  }

}
