import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServices } from './user.service';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Payment } from '../models/payment.model';
import { Letter } from '../models/letter.model';
import * as _ from "underscore";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  public payments:Payment[]=[]
  public paymentSearchCriteria:string = 'amount';
  public state:string = 'all';
  public searchMode:boolean = false;
  public inputs: any[] = []
  public from:number = 0;
  public count:number =0;
  public companyPayments:boolean = false;

  constructor(private http:HttpClient,
             private _userServices:UserServices) { }

  postPayments(trackId: string, amount: number) {
    let url = `${URL_SERVICES}payments/${trackId}/${amount}`
    return this.http.post(url, {}, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.payments = res.payments;
      return
    }))
  }
  
  getPayments(){
    let url = `${URL_SERVICES}payments?from=${this.from}&state=${this.state}`
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      res.payments = _.sortBy(res.payments, (payment:Payment) => {
        return payment.date
      })
      res.payments.reverse();
      this.payments = res.payments;
      this.count = res.count; 
    }))
  }

  searchPayments(from?: number,limit:number=5){
    from = from | this.from;
    let url = `${URL_SERVICES}searchPayments/${this.inputs}?from=${from}&limit=${limit}&state=${this.state}&company=${this.companyPayments}`
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.payments = res.payments;
      this.count = res.count;
    }))
  }

  sendPaymentNotification(paymentId:string,letterId:string){
    let url = `${URL_SERVICES}sendPaymentNotification/${paymentId}/${letterId}`;
    return this.http.put(url,{},{headers:this._userServices.headers}).pipe(map((res:any)=>{
      if (this.state === 'sent' || this.state === 'all') {
      this.payments.forEach((payment:Payment,index:number)=>{
          if (payment._id === res.payment._id) {
            this.payments[index] = res.payment;
          }     
      })
       }else{
         this.payments = this.payments.filter((payment:Payment)=>{return payment._id != res.payment._id})
       }
       Swal.fire({
         text:`Email enviado con exito`,
         type:'success',
         showCloseButton:true
       })
    }))
  }
}

