import { Component, OnInit } from '@angular/core';
import {Entrenador} from "./models/entrenador";
import {Pokemon} from "./models/pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  arregloEntrenador : Entrenador[];
  entrenadorCreado : Entrenador;

  ngOnInit(){
    this.arregloEntrenador=[];
  }

  guardarentrenador(event : Entrenador){
    this.arregloEntrenador.push(event);
  }

  formatearPokemon(event: Pokemon){
      this.entrenadorCreado.pokemons.push(event);
      console.log('[pokemon]: ', this.entrenadorCreado);
    }
  formatearEntrenadorCreado(event : Entrenador){
    this.entrenadorCreado=event;
  }

  public title = 'Examen';
}
