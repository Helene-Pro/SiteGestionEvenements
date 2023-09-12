import { Component } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  Links: Link[] = [
    { title: 'Accueil', url: '/' },
    { title: 'Les évènements', url: '', },
    { title: 'Se connecter', url: '/connexion', },
  ]

}
