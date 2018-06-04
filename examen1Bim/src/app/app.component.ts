import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img1='http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg';
  img2='http://fress.co/wp-content/uploads/2014/08/maj4.jpg';
  imgtbl='https://www.aulaclic.es/excel-2016/graficos/ej_tabla_dinamica_2016.png';
  esEstreno = false;

  public title = 'Spoiler CTM';

  arregloPeliculasProximamente = [
    {
      descripcionPelicula: 'Imagen de los botones en carousel',
      nombrePelicula: 'Carousel',
      esEstreno: false,
      urlImagen: 'https://i0.wp.com/angularscript.com/wp-content/uploads/2015/01/Lazy-Loading-Image-Carousel-With-AngularJS.jpg'

    },
    {
      descripcionPelicula: 'Inputs1',
      nombrePelicula: 'datos',
      esEstreno: false,
      urlImagen: 'https://i.stack.imgur.com/14uO7.png'
    },

  ]

  arregloPeliculasProximamente1 = [
    {
      descripcionPelicula: 'Input2',
      nombrePelicula: 'datos de datos',
      esEstreno: false,
      urlImagen: 'https://i.stack.imgur.com/ylRvk.png'

    },
    {
      descripcionPelicula: 'Tarjeta',
      nombrePelicula: 'Tarjeta',
      esEstreno: false,
      urlImagen: 'https://i.pinimg.com/736x/3a/d8/cb/3ad8cbf13f80b1410cc924c522866871--posts.jpg'
    },

  ]

  arregloPeliculasEstreno = [

    {
      nombrePelicula: 'Boton 1',
      esEstreno: true,
      urlImagen: ''

    },
    {
      nombrePelicula: 'Boton 2',
      esEstreno: true,
      urlImagen: ''

    },
    {
      nombrePelicula: 'Boton 3',
      esEstreno: true,
      urlImagen: ''

    },
    {
      nombrePelicula: 'Boton 4',
      esEstreno: true,
      urlImagen: ''

    },

  ]

  arregloPeliculasEstreno1 = [

    {
      nombrePelicula: 'Boton 5',
      esEstreno: true,
      urlImagen: ''

    },
    {
      nombrePelicula: 'Boton 6',
      esEstreno: true,
      urlImagen: ''

    },
    {
      nombrePelicula: 'Boton 7',
      esEstreno: true,
      urlImagen: ''

    },
    {
      nombrePelicula: 'Boton 8',
      esEstreno: true,
      urlImagen: ''

    },

  ]

  textoEstreno: string;
  claseEstreno: string;
}
