import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { matriculesMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  matriculesMock = matriculesMock;
  collegueMock = collegueMock;

  constructor(private _http: HttpClient) { }

  rechercheParNom(nom: string): Observable<Collegue>{
    return this._http.get<Collegue>('https://gaelle-collegues-api.herokuapp.com/collegues?nom=Yuki');

    /*return this._http.get<Collegue>('https://leo-collegues-api.herokuapp.com/collegues')
    .pipe(
      filter(col => col.nom === nom));*/
  }

  recupererCollegueCourant(): Observable<Collegue>{
    return this._http.get<Collegue>('https://gaelle-collegues-api.herokuapp.com/collegues?nom=Yuki');
  }
}
