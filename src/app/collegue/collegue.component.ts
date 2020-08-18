import { CreerCollegueComponent } from './../creer-collegue/creer-collegue.component';
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
    this.collegueSub = this._srv.sabonnerACollegueSelect().subscribe(
      collegue => this.col = collegue
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
