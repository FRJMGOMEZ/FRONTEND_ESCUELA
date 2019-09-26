import { Component, OnInit, OnDestroy, ViewChild, ElementRef,EventEmitter, Output, Renderer2 } from '@angular/core';
import { PaymentsService } from '../../providers/payments.service';
import { DaysOfWeekPipe } from 'src/app/pipes/days-of-week.pipe';
import { IncomesService } from '../../providers/incomes.service';
import{DemoService} from '../../providers/demo.service';
import { timer } from 'rxjs';
import { MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, OnDestroy {

  public filterPipe = new DaysOfWeekPipe();

  public chartBy: string = 'weeks';

  public chartSelected: string = 'payments';

  @ViewChild("picker0") picker0: MatDatepicker<any>;
  @ViewChild("picker1") picker1: MatDatepicker<any>

  public notification = new EventEmitter<string>();

  public labels: Date[]=[]

  constructor(public _paymentServices: PaymentsService,
              public _incomeServices:IncomesService,
              public _demoServices:DemoService) { }

  async ngOnInit() {
    this._demoServices.graphsPopup();
  }

  changeSelection(type:string){
    this.chartSelected = undefined;
    timer(300).subscribe(()=>{
      this.chartSelected = type;
    })
  }

  chartByChange(){
    this.generateChart();
  }

  async generateChart(selection?: string) {
    this.labels=[];
    if(selection){this.chartSelected=selection};
      await this.checkDates();
        this.checkNumberOfDays().then(async (labelsNumber: number) => {
          await this.setLabels(labelsNumber);
          this.notification.emit(this.chartSelected);
        })
      
  }

checkDates(){
    return new Promise(async(resolve,reject)=>{
      if (!this.picker1.startAt && !this.picker0.startAt) {
        let date1 = new Date(new Date().getTime() - (86400000 * 14));
        date1 = await new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0, 0);
        switch (this.chartSelected) {
          case 'payments':
            this._paymentServices.inputs[0] = await date1.getTime();
            this._paymentServices.inputs[1] = await this._paymentServices.inputs[0] + (86400000 * 13);
            break;
          case 'incomes':
            this._incomeServices.inputs[0] = await date1.getTime();
            this._incomeServices.inputs[1] = await this._incomeServices.inputs[0] + (86400000 * 13);
            break;
        }
        resolve()
      } else {
        await this.setDates().then(()=>{
          resolve()
        })
      }
    })
    
  }
  async setDates() {
    return new Promise(async(resolve,reject)=>{
      console.log(this.picker0,this.picker1);
      if(this.chartSelected === 'incomes'){
      this._incomeServices.inputs[0] = await new Date(this.picker0.startAt).getTime();
      this._incomeServices.inputs[1] = await new Date(this.picker1.startAt).getTime();
      resolve()
    }else if(this.chartSelected === 'payments'){
      this._paymentServices.inputs[0] = await new Date(this.picker0.startAt).getTime();
      this._paymentServices.inputs[1] = await new Date(this.picker1.startAt).getTime();
      resolve()
    }
    })
  }

  checkNumberOfDays() {
    return new Promise((resolve, reject) => {
      switch(this.chartSelected){
        case 'payments':
          if (this.chartBy === 'weeks') {
            let numbersOfWeeks = Math.ceil((this._paymentServices.inputs[1] - this._paymentServices.inputs[0]) / (86400000 * 7));
            resolve(numbersOfWeeks);
          } else {
            let numberOfDays = Math.ceil((this._paymentServices.inputs[1] - this._paymentServices.inputs[0]) / 86400000);
            resolve(numberOfDays);
          }
        break;
        case 'incomes':
          if (this.chartBy === 'weeks') {
            let numbersOfWeeks = Math.ceil((this._incomeServices.inputs[1] - this._incomeServices.inputs[0]) / (86400000 * 7));
            resolve(numbersOfWeeks);
          } else {
            let numberOfDays = Math.ceil((this._incomeServices.inputs[1] - this._incomeServices.inputs[0]) / 86400000);
            resolve(numberOfDays);
          }
      }
    })
  }

  setLabels(labelsNumber: number) {
    return new Promise((resolve, reject) => {
      if(this.chartSelected === 'payments'){
        this.labels.push(new Date(this._paymentServices.inputs[0]))
      }else if (this.chartSelected === 'incomes'){
        this.labels.push(new Date(this._incomeServices.inputs[0]))
      }

      if (this.chartBy === 'days') {
        for (let i = 1; i <= labelsNumber; i++) {
          this.labels.push(new Date(this.labels[i - 1].getTime() + 86400000));
        }
        resolve()
      } else if (this.chartBy === 'weeks') {
        for (let i = 1; i <= labelsNumber; i++) {
          this.labels.push(new Date(this.labels[i - 1].getTime() + (86400000 * 7)));
        }
        resolve()
      }
    })
  }

  buttonsStyle(type: string) {
    if (type === 'payments') {
       if(this.chartSelected != 'payments' ){
         return '0.5'
       }
    } else if (type === 'incomes') {
      if (this.chartSelected != 'incomes') {
        return '0.5'
      }
    } 
  }
  

  ngOnDestroy() {
    this._incomeServices.incomeType='notLiquidated';
    this._paymentServices.paymentTypes = [];
    this._incomeServices.inputs=[];
    this._paymentServices.inputs = [];
  }
}
