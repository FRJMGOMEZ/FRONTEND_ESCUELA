import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from "sweetalert";

import { Alumni } from '../models/alumni.model';
import { URL_SERVICES } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class AlumniServices {

  constructor(private http:HttpClient) { }

  createAlumni (alumni:Alumni,token){

    let url = `${URL_SERVICES}/alumno`

    let headers = new HttpHeaders().set('token', token);

    return this.http.post(url,alumni, {headers}).pipe(map((response:any)=>{

       swal('ALUMNI SUCCESFULLY CREATED',response.alumnoGuardado.nombre,'success')

      return response.alumnoGuardado
    }))
  }

  getAlumnis (token:string,from:number=0,limit:number=5)  {

      let url = `${URL_SERVICES}/alumno?desde=${from}&limite=${limit}`

      let headers = new HttpHeaders().set('token',token);

      return this.http.get(url,{headers}).pipe(map((response:any)=>{

        return response.alumnos
        
      }))
  }

  searchAlumnis (input:string,from:number,token:string){

     let url = `${URL_SERVICES}/search/alumnos/${input}?desde=${from}`

     let headers = new HttpHeaders().set('token', token);

     return this.http.get(url,{headers}).pipe(map((response:any)=>{

      return response.alumnos
     }))
  }

  updateAlumnis(alumni:Alumni,id:string,token:string){

    let url = `${URL_SERVICES}/alumno/${id}`;

    let headers = new HttpHeaders().set("token", token);

    return this.http.put(url,alumni,{headers}).pipe(map((response:any)=>{

      swal('ALUMNI SUCCESFULLY UPDATED',response.alumnoGuardado.nombre, 'success')
    }))
  }

  deleteAlumni(id:string,token:string){
  
    let url  = `${URL_SERVICES}/alumno/${id}`

    let headers = new HttpHeaders().set("token", token);

    return this.http.delete(url,{headers}).pipe(map((response:any)=>{

      swal('ALUMNI SUCCESFULLY DELETED', response.alumnoBorrado.nombre, 'success')
    }))
  }
}
