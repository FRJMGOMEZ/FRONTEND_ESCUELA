import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServices } from '../providers/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private _userServices:UserServices,
             private router:Router){}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this._userServices.userOnline.role === 'ADMIN_ROLE'){
      return true
    }else{
      this.router.navigate(['/dashboard']).then(()=>{
         console.log('LOCKED BY GUARD')
      })
      return false
    }
  }
}
