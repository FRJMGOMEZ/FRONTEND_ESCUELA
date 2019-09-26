import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {

  constructor(private http:HttpClient) { }

getVisitors(){
  let url = `${URL_SERVICES}visitors`;
  return this.http.get(url).pipe(map((res:any)=>{
    return res.visitors;
  }))
}
}
