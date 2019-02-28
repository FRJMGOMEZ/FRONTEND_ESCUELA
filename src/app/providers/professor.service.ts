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

  headers:HttpHeaders

  public professorsSource = new Subject<ProfessorOrder>();
  public professors$ = this.professorsSource.asObservable()

  public count:number

  constructor(private http:HttpClient,
             private _userServices:UserServices) { 
   this.headers = new HttpHeaders().set('token', this._userServices.token)
            }

  createProfessor(professor:Professor){
    let url = `${URL_SERVICES}/professor`
    return this.http.post(url,professor,{headers:this.headers}).pipe(map((res:any)=>{
      this.count++
       swal('PROFESSOR SUCCESSFULLY CREATED',res.professor.name,'success')
       let professorOrder = new ProfessorOrder(res.professor,'post')
       this.professorsSource.next(professorOrder);
    }))
  }

  getProfessors(from:number=0,limit:number=0) {
    let url = `${URL_SERVICES}/professor?from=${from}&limit=${limit}`
    return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      this.count = res.count;
      res.professors.forEach((professor)=>{
        let professorOrder = new ProfessorOrder(professor,'get');
        this.professorsSource.next(professorOrder)
      })
      return res.professors
    }))
  }

  searchProfessors(input: string,from:number=0) {
    let url = `${URL_SERVICES}/search/professors/${input}?from=${from}`
    return this.http.get(url, { headers:this.headers }).pipe(map((res: any) => {
      this.count = res.count;
      res.professors.forEach((professor) => {
        let professorOrder = new ProfessorOrder(professor, 'get');
        this.professorsSource.next(professorOrder)
      })
      return res.professors
    }))
  }

  deleteProfessor(id:string){
    let url = `${URL_SERVICES}/professor/${id}`
    return this.http.delete(url,{headers:this.headers}).pipe(map((res:any)=>{
      this.count--
      swal('PROFESSOR SUCCESFULLY DELETED',res.professor.name, 'success')
      let professorOrder = new ProfessorOrder(res.professor,'delete')
      this.professorsSource.next(professorOrder)
    }))
  }

  getProfessorById(id:string){
    let url = `${URL_SERVICES}/searchById/professor/${id}`
    return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      return res.professor
    }))
  }

  updateProfessor(professor:Professor){
     let professorOrder = new ProfessorOrder(professor,'update')
      this.professorsSource.next(professorOrder); 
  }
}
