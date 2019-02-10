import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { Subject } from 'rxjs';
import { Subject as SubjectModel, SubjectOrder } from '../models/subject.model';
import { ProfessorsServices } from './professor.service';
import { AlumniServices } from './alumni.service';


@Injectable({
    providedIn: 'root'
})
export class SubjectServices {

    public subjectsSource = new Subject<SubjectOrder>();
    public subjects$ = this.subjectsSource.asObservable()
    constructor( private http:HttpClient,
                 private _professorServices:ProfessorsServices,
                 private _alumnniServices:AlumniServices) {}
     
    createSubject(subject:SubjectModel,token:string){
        let url = `${URL_SERVICES}/subject`;
        let headers = new HttpHeaders().set('token',token)
        return this.http.post(url,subject,{headers}).pipe(map((res:any)=>{
           let subjectOrder = new SubjectOrder(res.subject,'post');
           this.subjectsSource.next(subjectOrder)
           return res.subject
        }))
     }

    getSubjects(token:string,from:number=0,limit:number=5){
        let url = `${URL_SERVICES}/subject?from=${from}&limit=${limit}`;
        let headers = new HttpHeaders().set('token', token)
        return this.http.get(url, {headers}).pipe(map((res:any)=>{
            res.subjects.forEach(subject => {
                let subjectOrder = new SubjectOrder(subject,'get')
                this.subjectsSource.next(subjectOrder)
            });
            return res.subjects;           
        }))
     }

     deleteSubject (id:string,token:string){
        let url = `${URL_SERVICES}/subject/${id}`
        let headers = new HttpHeaders().set('token', token)
        return this.http.delete(url,{headers}).pipe(map((res:any)=>{
            let subjectOrder = new SubjectOrder(res.subject, 'delete')
            this.subjectsSource.next(subjectOrder)
        }))
     }

     updateSubject(id:string,subject:SubjectModel,token:string){
        let url = `${URL_SERVICES}/subject/${id}`
        let headers = new HttpHeaders().set("token", token);
        return this.http.put(url,subject,{headers}).pipe(map((res:any)=>{
            let subjectOrder = new SubjectOrder(res.subject, 'update')
            this.subjectsSource.next(subjectOrder)
            return res.subject
        }))
     }

    addOrDeleteAlumni(subjectId:string,alumniId:string,token){
      let url = `${URL_SERVICES}/addOrDeleteAlumni/${subjectId}`;
      let headers = new HttpHeaders().set('token', token)
      return this.http.put(url,{alumniId},{headers}).pipe(map((res:any)=>{
          let subjectOrder = new SubjectOrder(res.subject,'update')
          this.subjectsSource.next(subjectOrder)
          this._alumnniServices.updateAlumni(res.alumni)
          return res.subject
      }))       
    }  

    addOrDeleteProfessor(subjectId:string,professorId: string, token:string) {
        let url = `${URL_SERVICES}/addOrDeleteProfessor/${subjectId}`;
        let headers = new HttpHeaders().set('token', token)
        return this.http.put(url, { professorId }, { headers }).pipe(map((res: any) => {
            let subjectOrder = new SubjectOrder(res.subject, 'update')
            this.subjectsSource.next(subjectOrder)
            this._professorServices.updateProfessor(res.professor)
            return res.subject
        }))
    } 

    getSubjectById(id:string,token:string){
        let url = `${URL_SERVICES}/searchById/subject/${id}`
        let headers = new HttpHeaders().set('token', token)
        return this.http.get(url,{headers}).pipe(map((res:any)=>{
            return res.subject
        }))
    }
}
