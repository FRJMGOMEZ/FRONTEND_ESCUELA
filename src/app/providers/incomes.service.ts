import { Injectable } from '@angular/core';
import { Debitor } from '../models/debitor.modal';
import { Income } from '../models/income.model';
import { HttpClient } from '@angular/common/http';
import { UserServices } from './user.service';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {

  public debitors:Debitor[]=[];

  public incomes:Income[]=[];
  public from: number= 0;
  public count:number=0;

  public inputs:any[]=[]

  public incomeType: string;

  public searchCriteria: string;
  public lastSearchCriteria: string;

  constructor(private http:HttpClient,
              private _userServices:UserServices) {}

  postIncome(income:Income,debitor?:Debitor){
    let url = `${URL_SERVICES}income`;
    return this.http.post(url,{income,debitor},{headers:this._userServices.headers}).pipe(map((res:any)=>{
          if(this.incomes.length < 5){
              this.incomes.push(res.income);
            }
    }))
  };

  putIncome(income:Income,paymentIds:string[]=[]){
    let url = `${URL_SERVICES}income`;
     return this.http.put(url,{income,paymentIds},{headers:this._userServices.headers}).pipe(map((res:any)=>{
      let income = res.income;
           this.incomes.forEach((everyIncome, index) => {
             if (everyIncome._id === income._id) {
               this.incomes[index] = income;
               return
             }
           })              
    }))
  }

  getIncomes(limit:number=5){ 
    this.lastSearchCriteria=undefined;
    this.searchCriteria=undefined;
    let url = `${URL_SERVICES}incomes?incomeType=${this.incomeType}&from=${this.from}&limit=${limit}`; 
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.incomes = res.incomes;
      this.count = res.count;
    }))
  }

  getDebitors(){
    let url =  `${URL_SERVICES}debitors`;
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.debitors = res.debitors;
    }))
  }

   searchIncomes(limit:number = 5){
    if (this.searchCriteria != this.lastSearchCriteria) {
         this.from = 0;
    }
    this.lastSearchCriteria = this.searchCriteria; 
    let url = `${URL_SERVICES}searchIncomes/${this.inputs}/${this.incomeType}?from=${this.from}&limit=${limit}`;
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.incomes=res.incomes;
      this.count = res.count;
    }))
  }

  getIncomesChartData(){
    let url = `${URL_SERVICES}getIncomesData/${this.inputs}/${this.incomeType}`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      return res.data
    }))

  }
  
}

