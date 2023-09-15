import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationServiceService } from '../services/authentification-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  registerForm: FormGroup

  constructor(private _fb: FormBuilder, private AuthService: AuthentificationServiceService, private router: Router) {
    this.registerForm = this._fb.group({
      identifier: [null, [Validators.required, Validators.maxLength(100)], []],
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
  errorMessage: string = '';

  Connexion() {
    if (this.registerForm.valid) {
      const identifierControl = this.registerForm.get('identifier');
      const passwordControl = this.registerForm.get('password');
  
      // Vérifiez si les contrôles du formulaire ne sont pas null
      if (identifierControl && passwordControl) {
        const identifier = identifierControl.value;
        const password = passwordControl.value;
  
        this.AuthService.Connexion(identifier, password).subscribe({
          next: (response) => {
            if (response) {
              console.log('Authentifié avec succès');
              this.router.navigate(['/evenements-perso']);

            }
          },
          error: (error) => {
            console.error('Une erreur s\'est produite :', error);
          }
        }
        );
      }
    } else {
      this.errorMessage = 'Identifiant ou mot de passe incorrect.';
      console.log(this.errorMessage);     }
  }


}  
