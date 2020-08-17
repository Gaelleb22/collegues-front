import { NouveauCollegue } from './../models/NouveauCollegue';
import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  nouveauCol: NouveauCollegue = new NouveauCollegue();

  constructor(private _srv: DataService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  submit(): void{
    console.log(this.nouveauCol);
    this._srv.creerNouveauCollegue(this.nouveauCol);
  }

  nouveauCollegue(): void {
    console.log('Création d\'un nouveau collègue');
  }

  // modal
  open(content): void {
    this.modalService.open(content);
  }

}
