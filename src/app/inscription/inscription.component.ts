import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { beforeTodayValidator } from '../validators/beforeToday.validator';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  registerForm: FormGroup

  constructor(private _fb : FormBuilder) {
    this.registerForm = this._fb.group({
      pseudo : [null, [Validators.required, Validators.maxLength(100)], []],
      email : [null, [Validators.required, Validators.email]],
      lastName : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)], []],
      firstName : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)]],
      birthdate : [null, [ beforeTodayValidator() ]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
    });
  }
  
  createUser() {
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      console.log("FORMULAIRE VALIDE");  
    }
    else {
      this.registerForm.markAllAsTouched();
      console.log("FORMULAIRE INVALIDE");      
    }
  }
}
