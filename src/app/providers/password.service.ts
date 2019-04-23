import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { catchError, map } from 'rxjs/operators';
import { UserServices } from './user.service';
import { ErrorHandlerService } from './error-handler.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  constructor(private http:HttpClient,
              private _userServices:UserServices,
              private _errorHandler:ErrorHandlerService) { }

changePassword(password1: string, password2: string) {
  let url = `${URL_SERVICES}changePassword/${password1}/${password2}`
  return this.http.put(url, {}, { headers: this._userServices.headers }).pipe(
    catchError(this._errorHandler.handleError)
  )
}

forgotPassword(email: string){
  let url = `${URL_SERVICES}forgotPassword/${email}`
  return this.http.put(url, {}).pipe(map((res:any)=>{
     if(res.message){
       Swal.fire({
         text:`SIMULACIÓN VERSIÓN DEMO // ${res.message} // GUARDA EL CÓDIGO RECIBIDO PARA RESETEAR EL PASSWORD`,
         showCloseButton:true,
         type:'info'
       })
     }
  })
    ,catchError(this._errorHandler.handleError))
}

checkResetCode(userMail: string, resetCode: string) {
  let url = `${URL_SERVICES}checkResetCode/${userMail}/${resetCode}`
  return this.http.put(url, {}).pipe(map((res:any)=>{
      if(res.message){
        return res.message
      }
  })
    ,catchError(this._errorHandler.handleError))
}

setNewPassword(resetCode: string, password: string, email: string){
  let url = `${URL_SERVICES}setNewPassword/${email}/${resetCode}/${password}`
  return this.http.put(url, {}).pipe(
    catchError(this._errorHandler.handleError)
  )
}

}