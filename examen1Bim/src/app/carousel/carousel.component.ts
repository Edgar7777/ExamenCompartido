import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Entrenador } from "../models/entrenador";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() listaEntrenadores: Entrenador[];
  imagen='https://data.whicdn.com/images/91413611/large.jpg';

    ngOnInit() {
  }
}
