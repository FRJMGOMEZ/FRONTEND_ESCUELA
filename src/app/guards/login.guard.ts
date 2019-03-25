import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UserServices } from '../providers/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _userServices: UserServices, public router: Router) {

  }
  canActivate(
  ): boolean {
    if (this._userServices.isLogged()) {
        return true;
    }
    else {
      console.log('LOCKED BY GUARD')
      this.router.navigate(['/login']);
      return false
    }
  }
}