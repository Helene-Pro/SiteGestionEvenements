import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, connect } from 'rxjs';
import { Member, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {

  // mettre les deux api : celle de connexion et celle d'inscription
  private _connexionApi: string = 'https://localhost:7245/api/Auth/Login';
  private _inscriptionApi: string = 'https://localhost:7245/api/Auth/Register'

  constructor(private HttpClient: HttpClient) { }

  private _$connectedUser : BehaviorSubject< Member | undefined> = new BehaviorSubject< Member | undefined>(this.getUser());
  
  $connectedUser : Observable< Member | undefined> = this._$connectedUser.asObservable();

  private user: Member | undefined;

  //! PARTIE CONNEXION
  getUser() : Member | undefined {
    //Si y'en a un, on renvoie le User sinon undefined
    return (this.user)
  }

//!version DEMO
  Connexion(identifier: string, password: string): Observable<Member|undefined> {
    this.CheckConnexion(identifier, password).subscribe({
      next: (connect) => { //connect c'est les infos qu'on reçoit au format member
        this._$connectedUser.next(connect.member); // change valeur du user, donc grâce au behaviorSubject les autres éléments abonnées le sauront et enclenche évènement
        localStorage.setItem('token', connect.token)
      },
      error: (error) => {
        console.log("ya une erreur",this._$connectedUser.error(error))
      }
    }) 
    return (this.$connectedUser)
  }

  // Vérifier l'authentification de l'utilisateur
  CheckConnexion(identifier: string, password: string): Observable<User> {
    const ConnexionInfo = { identifier, password };
  //  Envoi requête à l'API
    return this.HttpClient.post<User>(this._connexionApi, ConnexionInfo);
  }
}
