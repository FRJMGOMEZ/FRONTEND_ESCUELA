import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map, catchError } from 'rxjs/operators';
import { Facilitie, FacilitieOrder} from '../models/facilitie.model';
import { UserServices } from './user.service';
import { ErrorHandlerService } from './error-handler.service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  facilities:Facilitie[]=[]

  count:number

  constructor(private http:HttpClient,
              private _userServices:UserServices,
              private errorHandler:ErrorHandlerService,
              private socket:Socket) {      
   }

   emitFacilitie(facilitieOrder:FacilitieOrder){
      this.socket.emit('facilitie',facilitieOrder)
   }

   facililiteSocket(){
     return this.socket.fromEvent('facilitie').pipe(map((facilitieOrder:FacilitieOrder)=>{
       if(facilitieOrder.order === 'post'){
         if(this.facilities.length < 5){
           this.facilities.push(facilitieOrder.facilitie)
         }
       }else if (facilitieOrder.order === 'put'){
         this.facilities.forEach((facilite,index)=>{
           if(facilitieOrder.facilitie._id === facilite._id){
             this.facilities[index]=facilitieOrder.facilitie;
           }
         })
       }else if (facilitieOrder.order === 'delete'){
         this.facilities.filter((facilite)=>{return facilite._id != facilitieOrder.facilitie._id})
       }
     }))
   }

   getFacilities(from:number=0,limit:number=5){
    let url = `${URL_SERVICES}facilities?from=${from}&limit=${limit}`
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.count = res.count;
      this.facilities = res.facilities;
    }))
   }

   postFacilitie(facilitie:Facilitie){
     let url = `${URL_SERVICES}facilitie`;
     return this.http.post(url,facilitie,{headers:this._userServices.headers}).pipe(map((res:any)=>{
       this.count++
       if(this.facilities.length < 5){
         this.facilities.push(res.facilitie)
       }
       let facilitieOrder = new FacilitieOrder(res.facilitie, 'post')
       this.emitFacilitie(facilitieOrder)
     })
     ,catchError(this.errorHandler.handleError))
   }

   putFacilitie(id:string,facilitie:Facilitie){
     let url = `${URL_SERVICES}facilitie/${id}`;
     return this.http.put(url, facilitie, { headers:this._userServices.headers }).pipe(map((res: any) => {
       this.facilities.forEach((facilitie,index)=>{
         if(facilitie._id === res.facilitie._id){
           this.facilities[index]= res.facilitie;
           let facilitieOrder = new FacilitieOrder(res.facilitie, 'put')
           this.emitFacilitie(facilitieOrder)
         }
       })
     })
     ,catchError(this.errorHandler.handleError))
   }

  deleteFacilitie(id:string){
    let url = `${URL_SERVICES}facilitie/${id}`;
    return this.http.delete(url, { headers:this._userServices.headers }).pipe(map((res:any) => {
      this.count--
      let facilitieOrder = new FacilitieOrder(res.facilitie, 'delete')
      this.emitFacilitie(facilitieOrder)
    })
    ,catchError(this.errorHandler.handleError)
    )
  }
}
