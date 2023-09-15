import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../models/user';
import { AuthentificationServiceService } from '../services/authentification-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  connectedUser : Member | undefined;

  constructor(private router: Router, private AuthentificationServiceService : AuthentificationServiceService) { }

  // aller sur pages des évènements publics
    GoToEventOnClick() {
          this.router.navigate(['/evenements-global']);
    }
  
  // aller sur sa page d'évènement perso
// aller sur sa page d'évènement perso
GoToPrivateEventOnClick() {
  this.AuthentificationServiceService.$connectedUser.subscribe({
    next: (value) => {
      this.connectedUser = value;

      if (this.connectedUser) {
        console.log("Utilisateur connecté, redirection vers la page d'événements personnels");
        this.router.navigate(['/evenements-perso']);
      } else {
        console.log("Utilisateur non connecté, redirection vers la page de connexion");
        this.router.navigate(['/connexion']);
      }
    }
  });
}




}