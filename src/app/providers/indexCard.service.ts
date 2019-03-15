import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Indexcard, IndexcardOrder } from '../models/indexcard.model';
import { URL_SERVICES } from '../config/config';
import { UserServices } from './user.service';
import { Subject } from 'rxjs';
import { AlumniServices } from './alumni.service';
import { ProfessorsServices } from './professor.service';


@Injectable({
  providedIn: 'root'
})
export class IndexcardServices {

  headers:HttpHeaders
  indexcardsSource = new Subject<IndexcardOrder>();
  indexcards$ = this.indexcardsSource.asObservable()

  constructor(private http:HttpClient,
             private _userServices:UserServices,
             private _alumniServices:AlumniServices,
             private _professorServices:ProfessorsServices) {
    this.headers = new HttpHeaders().set('token',this._userServices.token)            
              }

  postIndexcard(indexcard:Indexcard){
    let url = `${URL_SERVICES}/indexcard`
    return this.http.post(url,indexcard,{headers:this.headers}).pipe(map((res:any)=>{ 
      let indexcardOrder = new IndexcardOrder(res.indexcard, 'push')
      this.indexcardsSource.next(indexcardOrder)
    }))    
  }

  putIndexcard(indexcard:Indexcard,idIndexcard:string){
    let url = `${URL_SERVICES}/indexcard/${idIndexcard}`;
    return this.http.put(url,indexcard,{headers:this.headers}).pipe(map((res:any)=>{
      if (res.ALUMNI) {
        this._alumniServices.putAlumni(res.ALUMNI)
      } else if (res.PROFESSOR) {
        this._professorServices.putProfessor(res.PROFESSOR)
      }
    }))
}

  searchIndexcardById(id:string){  
    let url = `${URL_SERVICES}/searchIndexcardById/${id}`
    return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      let indexcardOrder = new IndexcardOrder(res.indexcard, 'getById')
      this.indexcardsSource.next(indexcardOrder)
    }))
  }
}
