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

     return  {project:response.proyectoGuardado,user:response.usuarioActualizado}
    }))
  }

  searchProjectById(id:string,token:string){

    let url = `${URL_SERVICES}/searchById/proyecto/${id}`

    let headers = new HttpHeaders().set('token', token)

    return this.http.get(url, {headers}).pipe(map((response:any)=>{

       return response.proyecto
    }))
  }


  addOrRemoveUser(projectId:string,participanteId:string,token:string){

    let url = `${URL_SERVICES}/anadirOExpulsarParticipante/${projectId}`

    let body = {participante:participanteId};

    let headers = new HttpHeaders().set("token", token);

    return this.http.put(url,body,{headers}).pipe(map((res:any)=>{

      return res.usuarioActualizado
    }))
  }

  addOrRemoveAdmin(projectId:string,userId:string,token:string){

    let url = `${URL_SERVICES}/anadirEliminarAdmin/${projectId}`;

    let body = {participante:userId};

    let headers = new HttpHeaders().set("token", token);

    return this.http.put(url,body,{headers}).pipe(map((res:any)=>{

      return res.proyectoGuardado
    }))

  }

  updateProject(id:string,project:Project,token:string){

    let url = `${URL_SERVICES}/proyecto/${id}`

    let headers = new HttpHeaders().set("token", token);

    return this.http.put(url,project,{headers}).pipe(map((res:any)=>{

      return res.proyectoActualizado

    }))
  }

  changeStatus(id:string,token:string){

    let url = `${URL_SERVICES}/cambiarEstado/${id}`

    let headers = new HttpHeaders().set("token", token);

    return this.http.put(url,{headers}).pipe(map((res:any)=>{

      return res.proyectoGuardado
    }))
  }
}
