import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Tokens} from '../../../core/models/tokens'
import {catchError, mapTo, of, tap} from "rxjs";
import {environment} from "../../../../environments/environment.development";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'accessToken'
  private readonly REFRESH_TOKEN = 'refreshToken'




  constructor(private handler$:HttpBackend, private http: HttpClient) {
  }

  //register
  register(data: {name: any, surname:any,username:any, email:any, password: any, confirm:any, phone_number: any}){
     return this.http.post(`${environment.API_URL}/user/register`, (data));
  }

  //login
  login(data: any){
    return this.http.post(`${environment.API_URL}/user/login`, (data));
  }

  isLoggedIn() {
    return !!this.getToken()
  }

  getToken(){
    return localStorage.getItem(this.JWT_TOKEN)
  }





  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.accessToken)
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken)
  }
  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN)
    localStorage.removeItem(this.REFRESH_TOKEN)
  }


  logout(){
    localStorage.clear();
  }


  refreshToken() {
    return this.http.post(`${environment.API_URL}/refresh`, {},
      {
        headers:{
          "Authorization": `Bearer ${localStorage.getItem('rf')}`
        }
      })
  }

}
