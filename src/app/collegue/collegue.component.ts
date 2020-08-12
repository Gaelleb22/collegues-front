import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit {

  col: Collegue;
  collegueSub: Subscription;
  modif = false;

  constructor(private _srv: DataService) {
   }

  ngOnInit(): void {
    this.collegueSub = this._srv.recupererCollegueCourant().subscribe(
      valeur => {
        this.col = valeur[0]; }
    );
  }

  modifier(): void{
    this.modif = true;
    console.log('Modification du collègue');
  }

  valider(): void{
    this.modif = false;
  }

  nouveauCollegue(): void {
    console.log('Création d\'un nouveau collègue');
  }

}
