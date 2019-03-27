import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Facilitie} from '../models/facilitie.model';
import { UserServices } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  facilities:Facilitie[]=[]

  count:number

  constructor(private http:HttpClient,
              private _userServices:UserServices) {      
   }

   ////// Detectar problema /////
   getFacilities(from:number=0,limit:number=5){
    let url = `${URL_SERVICES}/facilities?from=${from}&limit=${limit}`
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.count = res.count;
      this.facilities = res.facilities;
    }))
   }

   postFacilitie(facilitie:Facilitie){
     let url = `${URL_SERVICES}/facilitie`;
     return this.http.post(url,facilitie,{headers:this._userServices.headers}).pipe(map((res:any)=>{
       this.count++
       if(this.facilities.length < 5){
         this.facilities.push(res.facilitie)
       }
     }))
   }

   putFacilitie(id:string,facilitie:Facilitie){
     let url = `${URL_SERVICES}/facilitie/${id}`;
     return this.http.put(url, facilitie, { headers:this._userServices.headers }).pipe(map((res: any) => {
       this.facilities.forEach((facilitie,index)=>{
         if(facilitie._id === res.facilitie._id){
           this.facilities[index]= res.facilitie;
         }
       })
     }))
   }

  deleteFacilitie(id:string){
    let url = `${URL_SERVICES}/facilitie/${id}`;
    return this.http.delete(url, { headers:this._userServices.headers }).pipe(map((res: any) => {
      this.count--
    }))
  }
}
