import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot):boolean{
      //check role: currentRole vs expectedRole
      const expectedRole = next.data.role;
      const currentRole = localStorage.getItem('AccessRole');
      if(currentRole !== expectedRole)
      {
        this.router.navigateByUrl('login');
        return false;
      }
      return true;

    }
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
  }
  

