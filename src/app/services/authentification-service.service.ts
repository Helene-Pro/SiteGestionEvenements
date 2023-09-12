import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {

  // mettre les deux api : celle de connexion et celle d'inscription
  private _connexionApi: string = 'https://localhost:7245/api/Auth/Login';
  private _inscriptionApi: string = 'https://localhost:7245/api/Auth/Register'

  constructor(private HttpClient: HttpClient) { }

  //! CONNEXION
  // Vérifier l'authentification de l'utilisateur
  CheckConnexion(username: string, password: string): Observable<any> {
    const ConnexionInfo = { username, password };
    // Envoi requête à l'API
    return this.HttpClient.post(this._connexionApi, ConnexionInfo);
  }
}
