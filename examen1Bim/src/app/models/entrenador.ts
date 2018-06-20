import {Pokemon} from './pokemon';

export class Entrenador{
  nombres: string;
  apellidos : string;
  fechaNacimiento : string;
  numeroMedallas : number;
  campeonActual : boolean;
  imagenes : string;
  pokemons : Pokemon[] = [];

}
