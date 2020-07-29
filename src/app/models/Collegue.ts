export class Collegue {
  matricule: string;
  nom: string;
  prenom: string;
  email: string;
  dateDeNaissance: Date;
  photoUrl: string;

  constructor(matricule, nom, prenom, email, dateNaissance, photoUrl){
    this.matricule = matricule;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.dateDeNaissance = dateNaissance;
    this.photoUrl = photoUrl;
  }
}
