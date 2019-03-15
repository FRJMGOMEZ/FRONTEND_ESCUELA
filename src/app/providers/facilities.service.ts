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

  token:string
  headers:HttpHeaders

  facilities:Facilitie[]=[]

  count:number

  facilitiesSource = new Subject<FacilitieOrder>();
  facilities$ = this.facilitiesSource.asObservable()

  constructor(private http:HttpClient,
              private _userServices:UserServices) {
    this.token = this._userServices.token;
    this.headers = new HttpHeaders().set('token', this.token)        
   }

   ////// Detectar problema /////
   getFacilities(from:number=0,limit:number=5){
    let url = `${URL_SERVICES}/facilities?from=${from}&limit=${limit}`
    return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      this.count = res.count;
      res.facilities.forEach((facilitie:Facilitie)=>{
        let facilitieOrder = new FacilitieOrder(facilitie,'get')
        this.facilitiesSource.next(facilitieOrder)
      })
    }))
   }

   postFacilitie(facilitie:Facilitie){
     let url = `${URL_SERVICES}/facilitie`;
     return this.http.post(url,facilitie,{headers:this.headers}).pipe(map((res:any)=>{
       this.count++
       let facilitieOrder = new FacilitieOrder(res.facilitie,'post')
       this.facilitiesSource.next(facilitieOrder)
     }))
   }

   putFacilitie(id:string,facilitie:Facilitie){
     let url = `${URL_SERVICES}/facilitie/${id}`;
     return this.http.put(url, facilitie, { headers:this.headers }).pipe(map((res: any) => {
       let facilitieOrder = new FacilitieOrder(res.facilitie,'put')
       this.facilitiesSource.next(facilitieOrder)
     }))
   }

   getFacilitieById(id:String){
     let url = `${URL_SERVICES}/searchById/facilitie/${id}`;
     return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      let facilitieOrder = new FacilitieOrder(res.facilitie,'getById')
      this.facilitiesSource.next(facilitieOrder)
     }))
  }

  deleteFacilitie(id:string){
    let url = `${URL_SERVICES}/facilitie/${id}`;
    return this.http.delete(url, { headers:this.headers }).pipe(map((res: any) => {
      this.count--
      let facilitieOrder = new FacilitieOrder(res.facilitie,'delete')
      this.facilitiesSource.next(facilitieOrder)
    }))
  }
}
