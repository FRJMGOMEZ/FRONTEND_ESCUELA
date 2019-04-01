import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Alumni} from '../models/alumni.model';
import { URL_SERVICES } from '../config/config';
import { UserServices } from './user.service';
import { ErrorHandlerService } from './error-handler.service';



@Injectable({
  providedIn: 'root'
})
export class AlumniServices {

  alumnis:Alumni[]=[]

  count:number

  constructor(private http:HttpClient,
             private _userServices:UserServices,
             private errorHandler:ErrorHandlerService) { 
  }

  getAlumnis(from: number = 0, limit: number = 5) {
    let url = `${URL_SERVICES}/alumni?from=${from}&limit=${limit}`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.count = res.count;
      this.alumnis = res.alumnis;
    }))
  }

  postAlumni(alumni:Alumni){
    let url = `${URL_SERVICES}/alumni`
    return this.http.post(url,alumni, {headers:this._userServices.headers})
    .pipe(map((res:any)=>{
      this.count++
      if(this.alumnis.length < 5){
       this.alumnis.push(res.alumni)
      }
    })
    ,catchError(this.errorHandler.handleError)
    )
  }

  searchAlumnis(input: string, from:number=0,limit:number=5){
     let url = `${URL_SERVICES}/search/alumnis/${input}?from=${from}&limit=${limit}`
     return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
       this.count = res.count;
       this.alumnis = res.alumnis; 
     }))
  }

  deleteAlumni(id:string){
    let url  = `${URL_SERVICES}/alumni/${id}`
    return this.http.delete(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.count--
    }))
  }

  putAlumni(alumniUpdated:Alumni){
    this.alumnis.forEach((alumni,index)=>{
      if(alumni._id === alumniUpdated._id){
        this.alumnis[index]= alumniUpdated;
      }
    })
  }
}
