import { Collegue } from '../models/Collegue';

export const collegueMock: Collegue = new Collegue();
collegueMock.matricule = 'A0056';
collegueMock.nom = 'Yuki';
collegueMock.prenoms = 'Shiro';
collegueMock.email = 'shiro.yuki@mail.jp';
collegueMock.dateDeNaissance = new Date('2014-12-31');
collegueMock.photoUrl = './assets/renard.JPG';
