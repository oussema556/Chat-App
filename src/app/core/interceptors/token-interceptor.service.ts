import {Injectable, Injector} from '@angular/core';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from "rxjs";
import {AuthService} from "../services/auth/auth.service";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  private isRefreshing = false
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  constructor(private injector: Injector, private authService: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.getToken()) {
      request = this.addToken(request, this.authService.getToken())
    }
    return next.handle(request).pipe(catchError(error =>{
      if(error instanceof HttpErrorResponse && error.status === 401){
        return this.handle401Error(request, next);
      } else{
        return throwError(error);
      }
    }))
  }
  private addToken(request: HttpRequest<any>, token: any){
    return request.clone({
      setHeaders: {
        'Authorization': `JWT ${token}`
      }})
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.access);
          return next.handle(this.addToken(request, token.access));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token !=null ),
        take(1),
        switchMap(access => {
          return next.handle(this.addToken(request, access));
        }));
    }
  }
}
