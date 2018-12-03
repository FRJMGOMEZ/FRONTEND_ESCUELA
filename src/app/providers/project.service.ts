import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import swal from "sweetalert";
import { Project } from '../models/project.model';



@Injectable({
  providedIn: 'root'
})
export class ProjectServices {

  constructor(private http:HttpClient) { }

  createProject(proyect:Project,token:string){

    let url = `${URL_SERVICES}/proyecto`

    let headers = new HttpHeaders().set('token',token)

    return this.http.post(url,proyect,{headers}).pipe(map((response:any)=>{

      swal('PROYECT SUCCESFULLY CREATED',response.proyectoGuardado.nombre,'success')

     return  response.proyectoGuardado
    }))
  }

  searchProjectById(id:string,token:string){

    let url = `${URL_SERVICES}/searchById/proyecto/${id}`

    let headers = new HttpHeaders().set('token', token)

    return this.http.get(url, {headers}).pipe(map((response:any)=>{

       return response.proyecto
    }))
  }
}
