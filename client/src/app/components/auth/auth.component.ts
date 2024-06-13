import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

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
  }

  changeLoginPage():void {
    this.loginPage = !this.loginPage;
  }

}
