import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepting..");
     //token variable
   let token =sessionStorage.getItem('JwtTOKEN');
   if(sessionStorage.getItem('username')&& sessionStorage.getItem('JwtTOKEN')){
    console.log(token);
    request= request.clone(
      {
        //setHeaders
        setHeaders:{
         Authorization :"Bearer " +  token
        }
      }
    )
  }
    return next.handle(request);
  }
}

