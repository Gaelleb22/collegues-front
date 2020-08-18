import { Photo } from './../../models/Photo';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  listePhotos: Photo[];
  photoSub: Subscription;

  constructor(private _srv: DataService) { }

  ngOnInit(): void {
    this.photoSub = this._srv.recupererPhotos().subscribe(
      valeur => {
        this.listePhotos = valeur;
      }
    );
  }


}
