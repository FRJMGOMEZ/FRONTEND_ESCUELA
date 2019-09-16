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

  public incomesLiquidated: Income[]=[];
  public fromIL:number=0;
  public iLCount:number = 0

  public incomesNotLiquidated: Income[]=[];
  public fromINL:number=0;
  public iNLCount:number=0

  public inputs:any[]=[]

  public incomeType: string = '';

  public searchMode:boolean=false;

  public searchCriteria: string = '';
  public lastSearchCriteria: string = '';

  constructor(private http:HttpClient,
              private _userServices:UserServices) {
                console.log('instanced');
               }

  postIncome(income:Income,debitor?:Debitor){
    let url = `${URL_SERVICES}income`;
    return this.http.post(url,{income,debitor},{headers:this._userServices.headers}).pipe(map((res:any)=>{
          if(this.incomesNotLiquidated.length < 5){
              this.incomesNotLiquidated.push(res.income);
            }
    }))
  };

  putIncome(income:Income,paymentIds:string[]=[]){
    let url = `${URL_SERVICES}income`;
     return this.http.put(url,{income,paymentIds},{headers:this._userServices.headers}).pipe(map((res:any)=>{
      let income = res.income;
         if(income.notLiquidatedAmount > 0){
           this.incomesNotLiquidated.forEach((everyIncome, index) => {
             if (everyIncome._id === income._id) {
               this.incomesNotLiquidated[index] = income;
               return
             }
           })
         }else{
           if(this.incomesLiquidated.length <= 5){
             this.incomesLiquidated.push(income);
           }
           this.incomesNotLiquidated = this.incomesNotLiquidated.filter((eachIncome:Income)=>{return eachIncome._id === income._id})
         }                
    }))
  }

  getIncomesLiquidated(){
    let url = `${URL_SERVICES}incomesLiquidated?from=${this.fromIL}&limit=5`
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.incomesLiquidated = res.incomes;
      this.iLCount = res.count;
    }))
  }

  getIncomesNotLiquidated(){
    let url = `${URL_SERVICES}incomesNotLiquidated?from=${this.fromINL}&limit=5`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res:any)=>{
      console.log(res.incomes);
      this.incomesNotLiquidated = res.incomes;
      this.iNLCount = res.count;
    }))
  }

  getDebitors(){
    let url =  `${URL_SERVICES}debitors`;
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.debitors = res.debitors;
    }))
  }

   search(){
     if(this.searchMode!){
        this.fromIL=0;
        this.fromINL=0;      
     }else{
       if (this.searchCriteria != this.lastSearchCriteria) {
         this.fromINL = 0;
         this.fromINL = 0;
       }
     }

    this.lastSearchCriteria = this.searchCriteria; 
    this.searchMode=true;
    let from =this.fromINL ? this.incomeType === 'notLiquidated' : this.fromIL;
    let url = `${URL_SERVICES}searchIncomes/${this.inputs}/${this.incomeType}?from=${from}&limit=5`;
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      console.log(res.incomes);
      if(this.incomeType === 'liquidated'){
        this.iLCount=res.count;
        this.incomesLiquidated = res.incomes;
      }else{
        this.incomesNotLiquidated = res.incomes;
        this.iNLCount= res.count;
      }
    }))
  }

  getIncomesData(){
    let url = `${URL_SERVICES}getIncomesData/${this.inputs}/${this.incomeType}`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      return res.data
    }))

  }
  
}

