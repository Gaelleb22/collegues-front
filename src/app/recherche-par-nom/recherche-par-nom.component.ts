import { Collegue } from './../models/Collegue';
import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  message: string;
  matriculeSub: Subscription;
  collegue: Collegue;
  recherche = false;

  constructor(private _srv: DataService) { }

  ngOnInit(): void {
  }

  rechercher(): void{
    const saisie: string = (document.getElementById('input') as HTMLInputElement).value;
    if (saisie === ''){
      this.collegue = null;
      this.message = 'Veuillez saisir un nom';
    }
    else {
      this.matriculeSub = this._srv.rechercheParNom(saisie).subscribe(
      valeur => {
        this.collegue = valeur[0];
        this.message = null;
      },
        error => {
          this.collegue = null;
          this.message = 'Pas de collegue à ce nom';
        }
    );
    }
    this.recherche = true;
  }

  select(collegue: Collegue): void {
    this._srv.selectionner(collegue);
  }

}
