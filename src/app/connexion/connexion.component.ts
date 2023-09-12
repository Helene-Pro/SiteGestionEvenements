import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationServiceService } from '../services/authentification-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  registerForm: FormGroup

  constructor(private _fb: FormBuilder, private AuthService: AuthentificationServiceService) {
    this.registerForm = this._fb.group({
      pseudo: [null, [Validators.required, Validators.maxLength(100)], []],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
    });
  }
  //* c'est juste pour tester en console
  //* connectedUser() {
  //*   if(this.registerForm.valid) {
  //*     console.log(this.registerForm.value);
  //*     console.log("FORMULAIRE VALIDE");
  //*   }
  //*   else {
  //*     this.registerForm.markAllAsTouched();
  //*     console.log("FORMULAIRE INVALIDE");
  //*   }
  //* }
  Connexion() { //!Comprendre ce pavé
    //! Changer identifier et password pour le login dans swager pour voir si ça se 
    //!co bien mais je sais pas si c'est à faire maintenant ou si il faut faire 
    //!d'autres étapes 
    if (this.registerForm.valid) {
      const pseudoControl = this.registerForm.get('pseudo');
      const passwordControl = this.registerForm.get('password');
  
      // Vérifiez si les contrôles du formulaire ne sont pas null
      if (pseudoControl && passwordControl) {
        const pseudo = pseudoControl.value;
        const password = passwordControl.value;
  
        this.AuthService.CheckConnexion(pseudo, password).subscribe( //! PK c'est barré ???
          (response) => {
            // Gérer la réponse de l'API ici
            if (response.authenticated) {
              // L'utilisateur est authentifié, rediriger ou effectuer une action appropriée
              console.log('Authentifié avec succès');
            } else {
              // L'utilisateur n'est pas authentifié, afficher un message d'erreur
              console.error('Échec de l\'authentification');
            }
          },
          (error) => {
            // Gérer les erreurs ici
            console.error('Une erreur s\'est produite :', error);
          }
        );
      }
    } else {
      console.log('FORMULAIRE INVALIDE');
    }
  }
}  
