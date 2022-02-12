import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {User} from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient : HttpClient) { }
  public loginVerify(user:User){
    console.log(user);
    alert(user.username);

   return this.httpclient.post(environment.roleUrl+ "/api/login/token", user);
  }
  public logOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("AccessRole");
    sessionStorage.removeItem("username");
  }
}
