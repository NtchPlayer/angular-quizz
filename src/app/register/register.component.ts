import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)])
  }, { validators: this.checkIfPasswordContainUsername })

  checkIfPasswordContainUsername (form: AbstractControl) {
    return form.value.userName && form.value.password && form.value.password.toLowerCase().includes(form.value.userName.toLowerCase()) ? { containUserName: "Votre mot de passe ne doit pas contenir votre nom d'utilisateur" } : null
  }

  register() {
    this.authService.register(this.registerForm.value)
  }
}
