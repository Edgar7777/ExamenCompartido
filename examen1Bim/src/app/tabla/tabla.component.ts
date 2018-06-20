import { Component, OnInit, Input} from '@angular/core';
import {Pokemon} from "../models/pokemon";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() pokemons : Pokemon[];

  ngOnInit() {
  }

}
