import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from "sweetalert";
import { Professor, ProfessorOrder } from '../models/professor.model';
import { URL_SERVICES } from '../config/config';
import { Subject } from 'rxjs';
import { UserServices } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ProfessorsServices {

  public professorsSource = new Subject<ProfessorOrder>();
  public professors$ = this.professorsSource.asObservable()

  public count:number

  constructor(private http:HttpClient,
             private _userServices:UserServices) { 
  }

  createProfessor(professor:Professor,token:string){
    let url = `${URL_SERVICES}/professor`
    let headers = new HttpHeaders().set("token", token);
    return this.http.post(url,professor,{headers}).pipe(map((res:any)=>{
      this.count++
       swal('PROFESSOR SUCCESSFULLY CREATED',res.professor.name,'success')
       let professorOrder = new ProfessorOrder(res.professor,'post')
       this.professorsSource.next(professorOrder);
    }))
  }

  getProfessors(token?:string,from:number=0,limit:number=0) {
    let url = `${URL_SERVICES}/professor?from=${from}&limit=${limit}`
    let headers = new HttpHeaders().set('token', this._userServices.token)
    return this.http.get(url,{headers}).pipe(map((res:any)=>{
      this.count = res.count;
      res.professors.forEach((professor)=>{
        let professorOrder = new ProfessorOrder(professor,'get');
        this.professorsSource.next(professorOrder)
      })
      return res.professors
    }))
  }

  searchProfessors(input: string, token: string,from:number=0) {
    let url = `${URL_SERVICES}/search/professors/${input}?from=${from}`
    let headers = new HttpHeaders().set('token', token);
    return this.http.get(url, { headers }).pipe(map((res: any) => {
      this.count = res.count;
      res.professors.forEach((professor) => {
        let professorOrder = new ProfessorOrder(professor, 'get');
        this.professorsSource.next(professorOrder)
      })
      return res.professors
    }))
  }

  deleteProfessor(id:string,token:string){
    let url = `${URL_SERVICES}/professor/${id}`
    let headers = new HttpHeaders().set('token', token);
    return this.http.delete(url,{headers}).pipe(map((res:any)=>{
      this.count--
      swal('PROFESSOR SUCCESFULLY DELETED',res.professor.name, 'success')
      let professorOrder = new ProfessorOrder(res.professor,'delete')
      this.professorsSource.next(professorOrder)
    }))
  }

  getProfessorById(id:string,token:string){
    let url = `${URL_SERVICES}/searchById/professor/${id}`
    let headers = new HttpHeaders().set('token', token);
    return this.http.get(url,{headers}).pipe(map((res:any)=>{
      return res.professor
    }))
  }

  updateProfessor(professor:Professor){
     let professorOrder = new ProfessorOrder(professor,'update')
      this.professorsSource.next(professorOrder); 
  }
}
