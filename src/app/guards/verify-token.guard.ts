import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServices } from '../providers/user.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyTokenGuard implements CanActivate {
  
  constructor(private _userServices:UserServices,
            private router:Router){

  }
 canActivate(): Promise<boolean> | boolean {
    let token = this._userServices.token;
    let payload = JSON.parse(atob(token.split('.')[1]))
    let expired = this.expired(payload.exp)
    if(expired){
      this.router.navigate(['/login'])
      return false
    }
   return this.verifyUpdate(payload.exp)
  }

  expired(dateExp:number){
     let now = new Date().getTime()/1000;
     if(dateExp<now){
       return true
     }else{
       false
     }
  }

  verifyUpdate(dateExp:number):Promise<boolean>{
    return new Promise((resolve,reject)=>{
       let tokenExp = new Date(dateExp*1000);
       let now = new Date();
       now = new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes()+now.getTimezoneOffset())
       now.setTime(now.getTime()+ 3600000 * 10)
       if(tokenExp.getTime()<now.getTime()){
         this._userServices.updateToken().subscribe((res:boolean)=>{
           if(res){
             resolve(true);
           }else{
             this.router.navigate(['/login']).then(()=>{
               reject(false)
             })
           }
         })
       }else{
         resolve(true)
       }
    })
  }
}
