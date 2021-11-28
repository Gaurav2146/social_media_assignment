import { Injectable } from '@angular/core';
import {  Router, CanActivateChild, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean{
    if(localStorage.getItem('sdasd923hd9dwe'))
    {
      return true;
    }
    else
    {
      this.router.navigate(['']);
      return false;
    }
  }
}
