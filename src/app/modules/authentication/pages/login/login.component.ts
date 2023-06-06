import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import jwt_decode from "jwt-decode";
import {io} from "socket.io-client";
import {environment} from "../../../../../environments/environment.development";

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

  private socket= io(environment.API);

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
    let user= {
      email: this.email,
      password: this.password
    }
    this.auth.login(user)
      .subscribe(
        (res:any)=> {
            localStorage.setItem('rf', res.refreshToken);
            localStorage.setItem('token',res.accessToken);
            const id: any = jwt_decode(res.accessToken);
            localStorage.setItem('id',id._id);
           console.log(res.accessToken)
            this.socket.emit('connectuser',res.accessToken,false);
            this.router.navigate(['chat', {outlets: {sideSection: ['recent-calls']}}])
        },
        (error: Error)=> {
          console.log(error)
        })
  }

}
