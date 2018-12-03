import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IndexCard } from '../models/indexCard.model';
import { URL_SERVICES } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class IndexCardServices {

  constructor(private http:HttpClient) { }

  createIndexCard(indexCard:IndexCard,token:string,personId:string=''){
       
    let url = `${URL_SERVICES}/ficha?id=${personId}`

    let headers = new HttpHeaders().set('token',token);

    return this.http.post(url,indexCard,{headers}).pipe(map((response:any)=>{

      if(response.alumnoActualizado){
        swal(`INDEXCARD SUCCESFULLY CREATED AND ADDED TO THE ALUMNI ${response.alumnoActualizado.nombre}`,'','success')

        return { fichaSaved: response.fichaSaved, alumno: response.alumnoActualizado };
      }

    else if (response.profesorActualizado){

        swal(`INDEXCARD SUCCESFULLY CREATED AND ADDED TO THE PROFESSOR ${response.profesorActualizado.nombre}`,'','success');

        return {fichaSaved: response.fichaSaved, profesor: response.profesorActualizado };
      }

      else{

        return  {fichaSaved:response.fichaSaved ,fichaDb:response.fichaDb}
      }
    }))    
  }

  updateIndexCard(indexCard:IndexCard,idIndexCard:string,token:string){

    let url = `${URL_SERVICES}/ficha/${idIndexCard}`;

    let headers = new HttpHeaders().set('token', token);

    return this.http.put(url,indexCard,{headers}).pipe(map((response:any)=>{

      swal(`INDEXCARD SUCCESFULLY UPDATED`, response.fichaActualizada.nombre, 'success');
       
      return response.fichaActualizada
    }))
}

  searchIndexCardById(id:string,token:string){
    
    let url = `${URL_SERVICES}/searchById/fichas/${id}`

    let headers = new HttpHeaders().set("token", token);

    return this.http.get(url,{headers}).pipe(map((response:any)=>{

      return response.fichas
    }))
  }
}
