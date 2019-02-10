import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Facilitie } from '../models/facilitie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  facilities:Facilitie[]=[]

  facilitiesSource = new Subject<Facilitie[]>();
  facilities$ = this.facilitiesSource.asObservable()

  constructor(private http:HttpClient) {
   }

   getFacilities(token:string,from:number=0,limit:number=5){
    let url = `${URL_SERVICES}/facilities?from=${from}&limit=${limit}`
    let headers = new HttpHeaders().set('token',token)
    return this.http.get(url,{headers}).pipe(map((res:any)=>{
       this.facilities = res.facilities;
       this.facilitiesSource.next(this.facilities)
      //return res.facilities
    }))
   }

   postFacilitie(facilitie:Facilitie,token:string){
     let url = `${URL_SERVICES}/facilitie`;
     let headers = new HttpHeaders().set('token', token)
     return this.http.post(url,facilitie,{headers}).pipe(map((res:any)=>{
       if(this.facilities.length >= 5){
          return
       }else{
         this.facilities.push(res.facilitie)
       }
     }))
   }

   putFacilitie(id:string,facilitie:Facilitie,token:string){
     let url = `${URL_SERVICES}/facilitie/${id}`;
     let headers = new HttpHeaders().set('token', token)
     return this.http.put(url, facilitie, { headers }).pipe(map((res: any) => {
       this.facilities.forEach((facilitie,index)=>{
         if(facilitie._id===res.facilitie._id){
            this.facilities[index] = res.facilitie;
           this.facilitiesSource.next(this.facilities)
         }
       })
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
      this.facilities = this.facilities.filter((facilitie) => { return facilitie._id != res.facilitie._id })
      this.facilitiesSource.next(this.facilities)
    }))
  }
}
