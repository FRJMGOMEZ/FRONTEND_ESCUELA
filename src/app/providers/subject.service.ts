import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { Subject } from 'rxjs';
import { Subject as SubjectModel, SubjectOrder } from '../models/subject.model';
import { ProfessorsServices } from './professor.service';
import { AlumniServices } from './alumni.service';
import { UserServices } from './user.service';


@Injectable({
    providedIn: 'root'
})
export class SubjectServices {

    headers:HttpHeaders

    public subjectsSource = new Subject<SubjectOrder>();
    public subjects$ = this.subjectsSource.asObservable();

    public count:number

    constructor( private http:HttpClient,
                 private _userServices:UserServices,
                 private _professorServices:ProfessorsServices,
                 private _alumnniServices:AlumniServices) {
      this.headers = new HttpHeaders().set('token', this._userServices.token)               
                 }
     
    createSubject(subject:SubjectModel){
        let url = `${URL_SERVICES}/subject`;
        return this.http.post(url,subject,{headers:this.headers}).pipe(map((res:any)=>{
            this.count++
           let subjectOrder = new SubjectOrder(res.subject,'post');
           this.subjectsSource.next(subjectOrder)
           return res.subject
        }))
     }

    getSubjects(from:number=0,limit:number=5){
        let url = `${URL_SERVICES}/subject?from=${from}&limit=${limit}`;
        return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
            this.count = res.count;
            res.subjects.forEach(subject => {
                let subjectOrder = new SubjectOrder(subject,'get')
                this.subjectsSource.next(subjectOrder)
            });
            return res.subjects;           
        }))
     }

     deleteSubject (id:string){
        let url = `${URL_SERVICES}/subject/${id}`
        return this.http.delete(url,{headers:this.headers}).pipe(map((res:any)=>{
            this.count--
            let subjectOrder = new SubjectOrder(res.subject, 'delete')
            this.subjectsSource.next(subjectOrder)
        }))
     }

     updateSubject(id:string,subject:SubjectModel){
        let url = `${URL_SERVICES}/subject/${id}`
        return this.http.put(url,subject,{headers:this.headers}).pipe(map((res:any)=>{
            let subjectOrder = new SubjectOrder(res.subject, 'update')
            this.subjectsSource.next(subjectOrder)
            return res.subject
        }))
     }

    addOrDeleteAlumni(subjectId:string,alumniId:string){
      let url = `${URL_SERVICES}/addOrDeleteAlumni/${subjectId}`;
      return this.http.put(url,{alumniId},{headers:this.headers}).pipe(map((res:any)=>{
          let subjectOrder = new SubjectOrder(res.subject,'update')
          this.subjectsSource.next(subjectOrder)
          this._alumnniServices.updateAlumni(res.alumni)
          return res.subject
      }))       
    }  

    addOrDeleteProfessor(subjectId:string,professorId: string) {
        let url = `${URL_SERVICES}/addOrDeleteProfessor/${subjectId}`;
        return this.http.put(url, { professorId }, { headers:this.headers }).pipe(map((res: any) => {
            let subjectOrder = new SubjectOrder(res.subject, 'update')
            this.subjectsSource.next(subjectOrder)
            this._professorServices.updateProfessor(res.professor)
            return res.subject
        }))
    } 

    getSubjectById(id:string){
        let url = `${URL_SERVICES}/searchById/subject/${id}`
        return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
            return res.subject
        }))
    }
}
