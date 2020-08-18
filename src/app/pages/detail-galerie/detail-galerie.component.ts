import { Subscription } from 'rxjs';
import { Photo } from './../../models/Photo';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Collegue } from 'src/app/models/Collegue';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-galerie',
  templateUrl: './detail-galerie.component.html',
  styleUrls: ['./detail-galerie.component.css']
})
export class DetailGalerieComponent implements OnInit {

  matricule: string;
  collegue: Collegue;
  modif = false;

  constructor(private route: ActivatedRoute, private _srv: DataService) {
    this.matricule = route.snapshot.paramMap.get('matricule');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const matricule = params.get('matricule');
    });
    this._srv.recupererCollegueCourant(this.matricule).subscribe(
      valeur => this.collegue = valeur[0]
    );

  }

  modifier(): void{
    this.modif = true;
    console.log('Modification du collègue');
  }

  valider(): void{
    this.modif = false;
  }

}
