import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  matriculesMock = this._srv.rechercheParNom('nom');
  recherche = false;

  constructor(private _srv: DataService) { }

  ngOnInit(): void {
  }

  rechercher(): void{
    this.recherche = true;
  }

}
