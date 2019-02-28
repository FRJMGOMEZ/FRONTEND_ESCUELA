import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from "sweetalert";

import { Alumni, AlumniOrder } from '../models/alumni.model';
import { URL_SERVICES } from '../config/config';
import { Subject } from 'rxjs';
import { UserServices } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AlumniServices {

  headers:HttpHeaders

  public alumnisSource = new Subject<AlumniOrder>();
  public alumnis$ = this.alumnisSource.asObservable()

  count:number

  constructor(private http:HttpClient,
             private _userServices:UserServices) { 

    this.headers = new HttpHeaders().set('token', this._userServices.token);
  }

  createAlumni(alumni:Alumni){
    let url = `${URL_SERVICES}/alumni`
    return this.http.post(url,alumni, {headers:this.headers}).pipe(map((res:any)=>{
       swal('ALUMNI SUCCESFULLY CREATED',res.alumni.name,'success')
       this.count++
       let alumniOrder = new AlumniOrder(res.alumni,'post')
       this.alumnisSource.next(alumniOrder);
       return
    }))
  }

  getAlumnis (from:number=0,limit:number=5)  {
      let url = `${URL_SERVICES}/alumni?from=${from}&limit=${limit}`
      return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
        this.count = res.count;
        res.alumnis.forEach(alumni => {
          let alumniOrder = new AlumniOrder(alumni,'get')
          this.alumnisSource.next(alumniOrder)      
        });
        return res.alumnis; 
      }))
  }

  searchAlumnis(input: string, from:number=0,limit:number=5){
     let url = `${URL_SERVICES}/search/alumnis/${input}?from=${from}&limit=${limit}`
     return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
       this.count = res.count
       res.alumnis.forEach(alumni => {
         let alumniOrder = new AlumniOrder(alumni,'get')
         this.alumnisSource.next(alumniOrder)
         return res.alumnis
       }); 
     }))
  }

  deleteAlumni(id:string){
    let url  = `${URL_SERVICES}/alumni/${id}`
    return this.http.delete(url,{headers:this.headers}).pipe(map((res:any)=>{
      this.count--
      swal('ALUMNI SUCCESFULLY DELETED', res.alumni.name, 'success')
      let alumiOrder = new AlumniOrder(res.alumni,'delete')
      this.alumnisSource.next(alumiOrder)
    }))
  }

  getAlumniById(id:string){
    let url = `${URL_SERVICES}/searchById/alumni/${id}`
    return this.http.get(url, { headers:this.headers }).pipe(map((res: any) => {
      return res.alumni
    }))
  }

  updateAlumni(alumni:Alumni){
    let alumniOrder = new AlumniOrder(alumni,'update')
     this.alumnisSource.next(alumniOrder)
  }
}
