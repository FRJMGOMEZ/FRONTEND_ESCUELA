import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from "sweetalert";


import { URL_SERVICES } from '../config/config';
import { Subject } from '../models/subject.model';


@Injectable({
    providedIn: 'root'
})
export class SubjectServices {


    constructor( private http:HttpClient) {
     }

     createSubject(subject:Subject,token:string){

        let url = `${URL_SERVICES}/materia`;

        let headers = new HttpHeaders().set('token',token)

        return this.http.post(url,subject,{headers}).pipe(map(()=>{

        swal('SUBJECT SUCCESFULLY CREATED',subject.nombre,'success')
        }))
     }

    getSubjects(token:string,desde:number=0,limite: number = 5){

        let url = `${URL_SERVICES}/materia?desde=${desde}&limite=${limite}`;

        let headers = new HttpHeaders().set('token', token)

        return this.http.get(url, {headers}).pipe(map((response:any)=>{

            return response.materias            
        }))
     }

     searchSubjects(input:string,desde:number=0,limite:number=5){

         let url = `${URL_SERVICES}/search/materias/${input}?desde=${desde}&limite=${limite}`
        
        return this.http.get(url).pipe(map((response:any)=>{
         
            return response.materias

        }))
     }

     deleteSubject (id:string,token:string){

        let url = `${URL_SERVICES}/materia/${id}`

        let headers = new HttpHeaders().set('token', token)

        return this.http.delete(url,{headers}).pipe(map((response:any)=>{

            swal('SUBJECT SUCCESFULLY DELETED', response.materiaBorrada.nombre, 'success')

        }))
     }

     updateSubject(id:string,subject:Subject,token:string){

        let url = `${URL_SERVICES}/materia/${id}`

        let headers = new HttpHeaders().set("token", token);

        return this.http.put(url,subject,{headers}).pipe(map((response:any)=>{

            return response.materiaGuardada
        }))
     }

    addOrDeleteAlumni(subjectId:string,alumno:string,token){

      let url = `${URL_SERVICES}/anadirOEliminarAlumno/${subjectId}`;

      let headers = new HttpHeaders().set('token', token)

      return this.http.put(url,{alumno},{headers})
       
    }  

    addOrDeleteProfessor(subjectId: string, profesor: string, token) {

        let url = `${URL_SERVICES}/anadirOEliminarProfesor/${subjectId}`;

        let headers = new HttpHeaders().set('token', token)

        return this.http.put(url, { profesor }, { headers })
    } 

    getSubjectsBydId(id:string,token:string){

        let url = `${URL_SERVICES}/materias/${id}`

        let headers = new HttpHeaders().set('token', token)

        return this.http.get(url,{headers})
    }
}
