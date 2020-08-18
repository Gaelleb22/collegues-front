import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { FormsModule } from '@angular/forms';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { AproposComponent} from './pages/apropos/apropos.component';
import { DetailGalerieComponent } from './pages/detail-galerie/detail-galerie.component';

const ROUTES: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'galerie', component: GalerieComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'galerie/:matricule', component: DetailGalerieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    CreerCollegueComponent,
    MenuComponentComponent,
    AccueilComponent,
    GalerieComponent,
    AproposComponent,
    DetailGalerieComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
