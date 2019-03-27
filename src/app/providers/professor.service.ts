import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Professor } from '../models/professor.model';
import { URL_SERVICES } from '../config/config';
import { UserServices } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ProfessorsServices {

  professors:Professor[]
  public count:number

  constructor(private http:HttpClient,
             private _userServices:UserServices) { 
            }

  postProfessor(professor:Professor){
    let url = `${URL_SERVICES}/professor`
    return this.http.post(url,professor,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.count++
       if(this.professors.length < 5){
         this.professors.push(res.professor)
       }
    }))
  }

  getProfessors(from:number=0,limit:number=0) {
    let url = `${URL_SERVICES}/professor?from=${from}&limit=${limit}`
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.count = res.count;
      this.professors = res.professors;
    }))
  }

  searchProfessors(input: string,from:number=0) {
    let url = `${URL_SERVICES}/search/professors/${input}?from=${from}`
    return this.http.get(url, { headers:this._userServices.headers }).pipe(map((res: any) => {
      this.count = res.count;
      this.professors = res.professors;
    }))
  }

  deleteProfessor(id:string){
    let url = `${URL_SERVICES}/professor/${id}`
    return this.http.delete(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.count--
    }))
  }

   putProfessor(professorUpdated:Professor){
      this.professors.forEach((professor,index)=>{
        if(professor._id === professorUpdated._id){
             this.professors[index] = professorUpdated
        }
      }) 
  }
}
