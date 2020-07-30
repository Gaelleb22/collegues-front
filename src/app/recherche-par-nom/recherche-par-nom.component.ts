import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matriculesMock } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  @Input() col: Collegue;
  matriculesMock = matriculesMock;
  recherche = false;

  constructor() { }

  ngOnInit(): void {
  }

  rechercher(): void{
    this.recherche = true;
  }

}
