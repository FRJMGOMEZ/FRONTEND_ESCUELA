import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Indexcard } from '../models/indexcard.model';
import { URL_SERVICES } from '../config/config';
import { UserServices } from './user.service';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class IndexcardServices {

  constructor(private http:HttpClient,
             private _userServices:UserServices,
             private _errorHandler:ErrorHandlerService) {}

  postIndexcard(indexcard:Indexcard){
    let url = `${URL_SERVICES}indexcard`
    
    return this.http.post(url,indexcard,{headers:this._userServices.headers}).pipe(map((res:any)=>{ 
      return res.indexcard
    })
    ,catchError(this._errorHandler.handleError))    

    
  }

  putIndexcard(indexcard:Indexcard,idIndexcard:string){
    let url = `${URL_SERVICES}indexcard/${idIndexcard}`;
    return this.http.put(url,indexcard,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      return res.indexcard
    })
    ,catchError(this._errorHandler.handleError))
  }

  searchindexcardById(id:string){  
    let url = `${URL_SERVICES}searchindexcardById/${id}`
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      return res.indexcard
    })
    ,catchError(this._errorHandler.handleError))
  }
}
