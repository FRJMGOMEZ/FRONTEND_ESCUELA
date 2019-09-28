import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { UserServices } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {

  constructor(private http:HttpClient,
              private _userServices:UserServices) { }

getVisitors(){
  let url = `${URL_SERVICES}visitors`;
  return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res:any)=>{
    return res.visitors;
  }))
}
}
