import { Component, OnInit, Input } from '@angular/core';
import {Entrenador} from "../models/entrenador";
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

@Input() entrenador : Entrenador;
  constructor() { }

  ngOnInit() {
  }

}
