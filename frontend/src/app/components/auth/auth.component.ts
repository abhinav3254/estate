import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isLoginMode: boolean = true;

  toggleAuthMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  signup(): void {
    console.log(this.signupForm.value);
  }

  loginSubmit(): void {
    console.log(this.loginForm.value);
  }

}
