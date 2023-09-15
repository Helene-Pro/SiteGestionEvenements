import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { beforeTodayValidator } from '../validators/beforeToday.validator';
import { AuthentificationServiceService } from '../services/authentification-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  registerForm: FormGroup

  constructor(private _fb : FormBuilder, private AuthService : AuthentificationServiceService, private router: Router) {
    this.registerForm = this._fb.group({
      pseudo : [null, [Validators.required, Validators.maxLength(100)], []],
      email : [null, [Validators.required, Validators.email]],
      lastName : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)], []],
      firstName : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)]],
      birthdate : [null, [ beforeTodayValidator() ]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/)]],
    });
  }
  errorMessage: string = '';

  createUser() {
    if (this.registerForm.valid) {
      // Le formulaire est valide
      console.log("FORMULAIRE VALIDE");

      // Appelez la méthode d'inscription du service d'authentification
      this.AuthService.inscription(this.registerForm.value).subscribe(
        (response) => { // Réponse du serveur en cas de succès
          console.log('Inscription réussie', response);
          this.router.navigate(['/connexion']);

        },
        (error) => {
          console.error('Une erreur s\'est produite :', error);
          console.log('Inscription a échoué');
        }
      );
    } else {
      this.errorMessage = 'Des champs ne sont pas correctement remplis.';
      console.log(this.errorMessage); 
    }
  }
}
