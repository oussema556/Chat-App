import { Component } from '@angular/core';
import {AuthService} from "../../../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  fieldTextType:boolean = false
  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private auth: AuthService, private router: Router){
  }

  get email() {
    return this.loginForm.get('email')?.value;
  }
  get password() {
    return this.loginForm.get('password')?.value
  }
  toggleFieldTextType(){
    this.fieldTextType=!this.fieldTextType
  }

  loginUser() {
    let user: {email: any, password: any}= {
      email: this.email,
      password: this.password
    }
    this.auth.login(user)
      .subscribe(
        (res)=> {
          if(res) {
            console.log(res)
          }
        },
        (error: Error)=> {
          console.log(error)
        })
  }

}
