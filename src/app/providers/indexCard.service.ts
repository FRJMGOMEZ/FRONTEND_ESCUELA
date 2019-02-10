import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Indexcard } from '../models/indexcard.model';
import { URL_SERVICES } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class IndexcardServices {

  constructor(private http:HttpClient) { }

  createIndexcard(indexcard:Indexcard,token:string){
    let url = `${URL_SERVICES}/indexcard`
    let headers = new HttpHeaders().set('token',token);
    return this.http.post(url,indexcard,{headers}).pipe(map((res:any)=>{  
      if(res.alumni){
        swal(`indexcard SUCCESFULLY CREATED AND ADDED TO THE ALUMNI ${res.alumni.name}`,'','success')
        return
      }
    else if (res.professor){
        swal(`indexcard SUCCESFULLY CREATED AND ADDED TO THE PROFESSOR ${res.professor.name}`,'','success');
        return 
    }else return {indexcard:res.indexcard}
    }))    
  }

  updateIndexcard(indexcard:Indexcard,idIndexcard:string,token:string){
    let url = `${URL_SERVICES}/indexcard/${idIndexcard}`;
    let headers = new HttpHeaders().set('token', token);
    return this.http.put(url,indexcard,{headers}).pipe(map((res:any)=>{
      return {indexcard:res.indexcard,item:res.item}
    }))
}

  searchIndexcardById(id:string,token:string){
    
    let url = `${URL_SERVICES}/searchById/indexcard/${id}`
    let headers = new HttpHeaders().set("token", token);
    return this.http.get(url,{headers}).pipe(map((res:any)=>{
      return res.indexcard
    }))
  }
}
