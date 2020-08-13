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
  recherche = false;

  constructor(private _srv: DataService) { }

  ngOnInit(): void {
  }

  rechercher(): void{
    const saisie: string = (document.getElementById('input') as HTMLInputElement).value;
    if (saisie === ''){
      this.message = 'Veuillez saisir un nom';
    }
    else {
      this.matriculeSub = this._srv.rechercheParNom(saisie).subscribe(
      valeur => {
        this.message = valeur[0].matricule; },
        error => {
          this.message = 'Pas de collegue à ce nom';
        }
    );
    }
    this.recherche = true;
  }

}
