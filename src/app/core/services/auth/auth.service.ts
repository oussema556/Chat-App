import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tokens} from '../../models/tokens'
import {catchError, mapTo, of, tap} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'accessToken'
  private readonly REFRESH_TOKEN = 'refreshToken'
  private loggedUser: any;
  private loginUrl = "http://localhost:5000/api/login"
  private registerUrl = "http://localhost:5000/api/register"
  private refreshTokenUrl = "http://localhost:5000/register"


  constructor(private http: HttpClient) { }

  //register
  register(data: {first_name: any, last_name:any, email:any, password: any, confirm:any, phone_number: any}){
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.registerUrl, (data), {headers: headers})
  }
  //login
  login(data: {email:any, password: any}){
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    console.log("kalemna l login")
    return this.http.post(this.loginUrl, (data), {headers: headers})
      .pipe(
        tap((tokens: any)=> this.doLoginUser(data.email, tokens)),
        mapTo(true),
        catchError(err => {
          return of(false)
        })
      )
  }

  isLoggedIn() {
    return !!this.getToken()
  }

  // refreshToken() {
  //   return this.http.post<any>(this.refreshTokenUrl, {
  //     'refresh':
  //   })
  // }
  //token
  getToken(){
    return localStorage.getItem(this.JWT_TOKEN)
  }

  private doLoginUser(email: any, tokens: Tokens) {
    this.loggedUser =email;
    this.storeTokens(tokens)
  }

  private doLogoutUser() {
    this.loggedUser =null;
    this.removeTokens()
  }
  private storeJwtToken(accessToken: string) {
    localStorage.setItem(this.JWT_TOKEN, accessToken)
  }
  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.accessToken)
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken)
  }
  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN)
    localStorage.removeItem(this.REFRESH_TOKEN)
  }


}
