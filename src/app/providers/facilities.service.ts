import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private http:HttpClient) {
   }

   getFacilities(token){

    let url = `${URL_SERVICES}/instalacion`

    let headers = new HttpHeaders().set('token',token)

    return this.http.get(url,{headers}).pipe(map((res:any)=>{

      return res.instalacionesDb
    }))
   }
}
