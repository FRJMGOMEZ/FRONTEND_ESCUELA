import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServices } from './user.service';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Payment } from '../models/payment.model';

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

}

