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

    // Création d'un BehaviorSubject pour suivre l'utilisateur connecté
  private _$connectedUser : BehaviorSubject< Member | undefined> = new BehaviorSubject< Member | undefined>(this.getUser());
    // Création d'un Observable à partir du BehaviorSubject pour permettre aux autres composants de s'abonner
  $connectedUser : Observable< Member | undefined> = this._$connectedUser.asObservable();

    // Déclaration d'une variable pour stocker l'utilisateur actuellement connecté
  private user: Member | undefined;

  //! PARTIE CONNEXION
    // Méthode pour obtenir l'utilisateur actuellement connecté
  getUser() : Member | undefined {
    //Si y'en a un, on renvoie le User sinon undefined
    return (this.user)
  }

//!version DEMO
  Connexion(identifier: string, password: string): Observable<Member | undefined> {
        // Appel de la méthode CheckConnexion pour vérifier l'authentification
    this.CheckConnexion(identifier, password).subscribe({
      next: (connect) => { //connect c'est les infos qu'on reçoit au format member
        // Mise à jour de l'utilisateur actuellement connecté
        this._$connectedUser.next(connect.member); // change valeur du user, donc grâce au behaviorSubject les autres éléments abonnées le sauront et enclenche évènement
        // Stockage du jeton d'authentification dans le stockage local (localStorage)
        localStorage.setItem('token', connect.token)
      },
      error: (error) => {
        // Gestion des erreurs en cas d'échec de la connexion
        console.log("ya une erreur",this._$connectedUser.error(error))
      }
    }) 
      // Retour de l'Observable pour permettre aux composants de s'abonner
    return (this.$connectedUser)
  }

  // Vérification de l'authentification de l'utilisateur en envoyant une requête POST à l'API
  CheckConnexion(identifier: string, password: string): Observable<User> {
      // Création d'un objet avec les informations de connexion
    const ConnexionInfo = { identifier, password };
    // Envoi d'une requête HTTP POST à l'API de connexion
    return this.HttpClient.post<User>(this._connexionApi, ConnexionInfo);
  }



    //! PARTIE INSCRIPTION
   // pas de local storage car on créer un user
   inscription(newUser: Member): Observable<Member | undefined> {
    // Envoi d'une requête HTTP POST à l'API d'inscription
    return this.HttpClient.post<Member>(this._inscriptionApi, newUser);
  }
    
  
  

}
