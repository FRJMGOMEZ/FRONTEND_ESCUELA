import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Facilitie, FacilitieOrder } from '../models/facilitie.model';
import { Subject } from 'rxjs';
import { UserServices } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  facilities:Facilitie[]=[]

  count:number

  facilitiesSource = new Subject<FacilitieOrder>();
  facilities$ = this.facilitiesSource.asObservable()

  constructor(private http:HttpClient,
              private _userServices:UserServices) {
   }

   getFacilities(token?:string,from:number=0,limit:number=5){
    let url = `${URL_SERVICES}/facilities?from=${from}&limit=${limit}`
    let myToken = token || this._userServices.token;
    let headers = new HttpHeaders().set('token',myToken)
    return this.http.get(url,{headers}).pipe(map((res:any)=>{
      this.count = res.count;
      res.facilities.forEach((facilitie:Facilitie)=>{
        
        let facilitieOrder = new FacilitieOrder(facilitie,'get')
        this.facilitiesSource.next(facilitieOrder)
      })
      return res.facilities
    }))
   }

   postFacilitie(facilitie:Facilitie,token:string){
     let url = `${URL_SERVICES}/facilitie`;
     let headers = new HttpHeaders().set('token', token)
     return this.http.post(url,facilitie,{headers}).pipe(map((res:any)=>{
       this.count++
       let facilitieOrder = new FacilitieOrder(res.facilitie,'post')
       this.facilitiesSource.next(facilitieOrder)
     }))
   }

   putFacilitie(id:string,facilitie:Facilitie,token:string){
     let url = `${URL_SERVICES}/facilitie/${id}`;
     let headers = new HttpHeaders().set('token', token)
     return this.http.put(url, facilitie, { headers }).pipe(map((res: any) => {
       let facilitieOrder = new FacilitieOrder(res.facilitie,'update')
       this.facilitiesSource.next(facilitieOrder)
     }))
   }

   getFacilitieById(id:String,token:string){
     let url = `${URL_SERVICES}/searchById/facilitie/${id}`;
     let headers = new HttpHeaders().set('token', token)
     return this.http.get(url,{headers}).pipe(map((res:any)=>{
      return res.facilitie
     }))
  }

  deleteFacilitie(id:string,token:string){
    let url = `${URL_SERVICES}/facilitie/${id}`;
    let headers = new HttpHeaders().set('token', token)
    return this.http.delete(url, { headers }).pipe(map((res: any) => {
      this.count--
      let facilitieOrder = new FacilitieOrder(res.facilitie,'delete')
      this.facilitiesSource.next(facilitieOrder)
    }))
  }
}
