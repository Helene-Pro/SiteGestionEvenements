import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EvenementsGlobalComponent } from './evenements/evenements-global/evenements-global.component';
import { EvenementsPersoComponent } from './evenements/evenements-perso/evenements-perso.component';

const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "accueil", redirectTo: "/" },
  { path: "connexion", component: ConnexionComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "evenements-global", component: EvenementsGlobalComponent },
  {path : "evenements-perso", component: EvenementsPersoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
