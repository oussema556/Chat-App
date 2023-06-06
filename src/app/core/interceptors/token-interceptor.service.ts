import {Injectable, Injector} from '@angular/core';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from "rxjs";
import {AuthService} from "../../modules/authentication/services/auth.service";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  private isRefreshing = false
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  constructor(private _authService: AuthService, private router$: Router) {
  }



  intercept(request: any, next: any) {
    let token = localStorage.getItem('token');
    let authReq = this.addTokenHeader(request, token);
    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
          if (err.error.message==="Refresh token malformed"){
            this._authService.logout();
          }else if (err.error.message === "ERROR_AC_EXP") {
            console.log(err)
            return this.handleRefreshToken(request, next);
          }
          return throwError(err);
        }
      )
    )
  }

  handleRefreshToken(request: HttpRequest<any>, next: HttpHandler) {
    return this._authService.refreshToken().pipe(
      switchMap((data: any) => {
        localStorage.setItem('rf', data.refresh_token);
        localStorage.setItem('token', data.access_token);
        return next.handle(this.addTokenHeader(request, data.access_token))
      }),
      catchError((error: any) => {
        localStorage.clear();
        this.router$.navigateByUrl('/login');
        return throwError(error)
      })
    );
  }


  addTokenHeader(request: HttpRequest<any>, token: any) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
