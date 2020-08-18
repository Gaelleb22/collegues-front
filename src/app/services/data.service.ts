import { Photo } from './../models/Photo';
import { NouveauCollegue } from './../models/NouveauCollegue';
import { Collegue } from './../models/Collegue';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, JsonpClientBackend, HttpErrorResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  subjectCollegueSelectionne = new Subject<Collegue>();
  subjectMatriculeSelectionne = new Subject<string>();

  constructor(private _http: HttpClient) { }

  rechercheParNom(nom: string): Observable<Collegue>{
    return this._http.get<Collegue>(`https://gaelle-collegues-api.herokuapp.com/collegues?nom=${nom}`);
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue>{
    return this._http.get<Collegue>(`https://gaelle-collegues-api.herokuapp.com/collegues/${matricule}`);
  }

  recupererPhotos(): Observable<Photo[]>{
    return this._http.get<Photo[]>(`https://gaelle-collegues-api.herokuapp.com/collegues/photos`);
  }

  creerNouveauCollegue(collegue: NouveauCollegue): void{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // envoie de la requête
    this._http.post('https://gaelle-collegues-api.herokuapp.com/',
    JSON.stringify(collegue),
    httpOptions
    ).subscribe((data: any) => {
      console.log(data);
    }, (error: HttpErrorResponse) => {
      console.log('error', error);
      alert('Veuillez remplir tous les champs');
    });
  }

  selectionner(collegueselect: Collegue): void {
    this.subjectCollegueSelectionne.next(collegueselect);
  }

  sabonnerACollegueSelect(): Observable<Collegue> {
    return this.subjectCollegueSelectionne.asObservable();
  }

}
