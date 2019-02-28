import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Indexcard } from '../models/indexcard.model';
import { URL_SERVICES } from '../config/config';
import { UserServices } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class IndexcardServices {

  headers:HttpHeaders

  constructor(private http:HttpClient,
             private _userServices:UserServices) {
    this.headers = new HttpHeaders().set('token',this._userServices.token)            
              }

  createIndexcard(indexcard:Indexcard){
    let url = `${URL_SERVICES}/indexcard`
    return this.http.post(url,indexcard,{headers:this.headers}).pipe(map((res:any)=>{  
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

  updateIndexcard(indexcard:Indexcard,idIndexcard:string){
    let url = `${URL_SERVICES}/indexcard/${idIndexcard}`;
    return this.http.put(url,indexcard,{headers:this.headers}).pipe(map((res:any)=>{
      if(res.item){
        return { indexcard: res.indexcard, item: res.item }
      }else{
        return { indexcard: res.indexcard};
      }
    }))
}

  searchIndexcardById(id:string){  
    let url = `${URL_SERVICES}/searchById/indexcard/${id}`
    return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      return res.indexcard
    }))
  }
}
