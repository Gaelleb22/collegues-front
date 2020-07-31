import { Injectable } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  matriculesMock = matriculesMock;
  collegueMock = collegueMock;

  constructor() { }

  rechercheParNom(nom: string): string[]{
    return this.matriculesMock;
  }

  recupererCollegueCourant(): Collegue{
    return collegueMock;
  }
}
