import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { matriculesMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  subjectCollegueSelectionne = new Subject<Collegue>();

  constructor(private _http: HttpClient) { }

  rechercheParNom(nom: string): Observable<Collegue>{
    return this._http.get<Collegue>(`https://gaelle-collegues-api.herokuapp.com/collegues?nom=${nom}`);
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue>{
    return this._http.get<Collegue>(`https://gaelle-collegues-api.herokuapp.com/${matricule}`);
  }

  selectionner(collegueselect: Collegue): void {
    this.subjectCollegueSelectionne.next(collegueselect);
  }

  sabonnerACollegueSelect(): Observable<Collegue> {
    return this.subjectCollegueSelectionne.asObservable();
  }
}
