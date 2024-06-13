import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private _router:Router) {}

  loginPage:boolean = true;

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });

  _submitRegisterForm():void {
    console.log(this.registerForm.value);
  }

  _login():void {
    console.log(this.loginForm.value);

    // navigating to home if everything is correct
    this._router.navigate(['/home']);
  }

  changeLoginPage():void {
    this.loginPage = !this.loginPage;
  }

}
