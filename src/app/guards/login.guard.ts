import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UserServices } from '../providers/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _userServices: UserServices, public router: Router) {

  }
  canActivate(
  ): Observable<boolean> {
   return this._userServices.checkToken()
}
}