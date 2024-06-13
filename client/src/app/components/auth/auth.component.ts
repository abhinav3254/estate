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

  registerForms = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  _submitRegisterForm():void {
    console.log(this.registerForms.value);
  }

  changeLoginPage():void {
    this.loginPage = !this.loginPage;
  }

}
