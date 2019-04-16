import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Indexcard, IndexcardOrder } from '../models/indexcard.model';
import { URL_SERVICES } from '../config/config';
import { UserServices } from './user.service';
import { Subject } from 'rxjs';
import { AlumniServices } from './alumni.service';
import { ProfessorsServices } from './professor.service';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class indexcardServices {

  indexcardsSource = new Subject<IndexcardOrder>();
  indexcards$ = this.indexcardsSource.asObservable()

  constructor(private http:HttpClient,
             private _userServices:UserServices,
             private _alumniServices:AlumniServices,
             private _professorServices:ProfessorsServices,
             private _errorHandler:ErrorHandlerService) {}

  postIndexcard(indexcard:Indexcard){
    let url = `${URL_SERVICES}indexcard`
    return this.http.post(url,indexcard,{headers:this._userServices.headers}).pipe(map((res:any)=>{ 
      let indexcardOrder = new IndexcardOrder(res.indexcard, 'post')
      this.indexcardsSource.next(indexcardOrder)
    })
    ,catchError(this._errorHandler.handleError))    
  }

  putIndexcard(indexcard:Indexcard,idindexcard:string){
    let url = `${URL_SERVICES}indexcard/${idindexcard}`;
    return this.http.put(url,indexcard,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      if (res.ALUMNI) {
        this._alumniServices.putAlumni(res.ALUMNI)
      } else if (res.PROFESSOR) {
        this._professorServices.putProfessor(res.PROFESSOR)
      }
    })
    ,catchError(this._errorHandler.handleError))
  }

  searchIndexcardById(id:string){  
    let url = `${URL_SERVICES}searchindexcardById/${id}`
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      let indexcardOrder = new IndexcardOrder(res.indexcard, 'getById')
      this.indexcardsSource.next(indexcardOrder)
    })
    ,catchError(this._errorHandler.handleError))
  }
}
