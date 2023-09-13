import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';
import { Member, User } from '../models/user';
import { AuthentificationServiceService } from '../services/authentification-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  Links: Link[] = [
    { title: 'Accueil', url: '/', userLink:false },
    { title: 'Les évènements', url: '/evenements-global', userLink:false},
    { title: 'Mes évènements', url: '/evenements-perso', userLink:true},
    { title: 'Se connecter', url: '/connexion', userLink: false},

  ]

  connectedUser : Member | undefined;

  constructor(private AuthentificationServiceService : AuthentificationServiceService ){}

  ngOnInit(): void {
    // On s'abonne à notre Observable
    this.AuthentificationServiceService.$connectedUser.subscribe({
     next : (value) => {
       //Quand l'Observable change de valeur
       this.connectedUser = value;
       console.log("NEXT IN NAVBAR : ", value);
     },
    });
  }
}
