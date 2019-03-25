import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { Subject as SubjectModel} from '../models/subject.model';
import { ProfessorsServices } from './professor.service';
import { AlumniServices } from './alumni.service';
import { UserServices } from './user.service';


@Injectable({
    providedIn: 'root'
})
export class SubjectServices {

    headers:HttpHeaders

    subjects:SubjectModel[]

    subjectSelected: SubjectModel;

    public count:number

    constructor( private http:HttpClient,
                 private _userServices:UserServices,
                 private _professorServices:ProfessorsServices,
                 private _alumnniServices:AlumniServices) {
      this.headers = new HttpHeaders().set('token', this._userServices.token)               
                 }
     
    postSubject(subject:SubjectModel){
        let url = `${URL_SERVICES}/subject`;
        return this.http.post(url,subject,{headers:this.headers}).pipe(map((res:any)=>{
            this.count++
            if(this.subjects.length < 5){
                this.subjects.push(res.subject)
            }            
        }))
     }

    getSubjects(from:number=0,limit:number=5){
        let url = `${URL_SERVICES}/subject?from=${from}&limit=${limit}`;
        return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
            this.count = res.count;
            this.subjects = res.subjects;        
        }))
     }

     deleteSubject (id:string){
        let url = `${URL_SERVICES}/subject/${id}`
        return this.http.delete(url,{headers:this.headers}).pipe(map((res:any)=>{
            this.count--
        }))
     }

     putSubject(id:string,subject:SubjectModel){
        let url = `${URL_SERVICES}/subject/${id}`
        return this.http.put(url,subject,{headers:this.headers}).pipe(map((res:any)=>{
            this.subjectSelected = res.subject;
           this.subjects.forEach((subject,index)=>{
               if(subject._id === res.subject._id){
                   this.subjects[index]=res.subject;
               }
           })
        }))
     }

    addOrDeleteAlumni(subjectId:string,alumniId:string){
      let url = `${URL_SERVICES}/addOrDeleteAlumni/${subjectId}`;
      return this.http.put(url,{alumniId},{headers:this.headers}).pipe(map((res:any)=>{
          this.subjectSelected = res.subject;
          this.subjects.forEach((subject, index) => {
              if (subject._id === res.subject._id) {
                  this.subjects[index] = res.subject;
              }
          })
          this._alumnniServices.putAlumni(res.alumni)
      }))       
    }  

    addOrDeleteProfessor(subjectId:string,professorId: string) {
        let url = `${URL_SERVICES}/addOrDeleteProfessor/${subjectId}`;
        return this.http.put(url, { professorId }, { headers:this.headers }).pipe(map((res: any) => {
            this.subjectSelected = res.subject;
            this.subjects.forEach((subject, index) => {
                if (subject._id === res.subject._id) {
                    this.subjects[index] = res.subject;
                }
            })
            this._professorServices.putProfessor(res.professor)
        }))
    } 
}
