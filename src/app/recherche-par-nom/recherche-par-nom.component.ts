import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  matricule: string;
  matriculeSub: Subscription;
  recherche = false;

  constructor(private _srv: DataService) { }

  /*ngOnInit(): void {
    this.matriculeSub = this._srv.rechercheParNom('Oddet').subscribe(
      valeur => {
        this.matricule = valeur[0].matricule; }
    );
  }*/

  ngOnInit(): void {
    this.matriculeSub = this._srv.rechercheParNom('Oddet').subscribe(
      valeur => {
        this.matricule = valeur[0].matricule; }
    );
  }

  rechercher(): void{
    this.recherche = true;
  }

}
