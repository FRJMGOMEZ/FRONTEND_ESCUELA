import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from "sweetalert";

import { Professor } from '../models/professor.model';
import { URL_SERVICES } from '../config/config';





@Injectable({
  providedIn: 'root'
})
export class ProfessorsServices {

  constructor(private http:HttpClient) { 

  }

  createProfessor(professor:Professor,token:string){

    let url = `${URL_SERVICES}/profesor`
    
    let headers = new HttpHeaders().set("token", token);

    return this.http.post(url,professor,{headers}).pipe(map((response:any)=>{

       swal('PROFESSOR SUCCESSFULLY CREATED',response.profesorGuardado.nombre,'success')

       return response.profesorGuardado
    }))
  }

  getProfessors(token:string) {

    let url = `${URL_SERVICES}/profesor`

    let headers = new HttpHeaders().set('token', token)

    return this.http.get(url,{headers}).pipe(map((response:any)=>{

      return response.profesores
    }))
  }

  searchProfessors(input: string, token: string) {

    let url = `${URL_SERVICES}/search/profesores/${input}`

    let headers = new HttpHeaders().set('token', token);

    return this.http.get(url, { headers }).pipe(map((response: any) => {

      return response.profesores
    }))
  }

  updateProfessor(professor:Professor,id:string,token:string){

    let url = `${URL_SERVICES}/profesor/${id}`;

    let headers = new HttpHeaders().set("token", token);

    return this.http.put(url, professor, { headers }).pipe(map((response:any)=>{

      swal('PROFESSOR SUCCESFULLY UPDATED',response.profesorActualizado.nombre,'success')
    }))
  }

  deleteProfessor(id:string,token:string){
   
    let url = `${URL_SERVICES}/profesor/${id}`

    let headers = new HttpHeaders().set('token', token);

    return this.http.delete(url,{headers}).pipe(map((response:any)=>{

      swal('PROFESSOR SUCCESFULLY DELETED',response.profesorBorrado.nombre, 'success')
    }))

  }
}
