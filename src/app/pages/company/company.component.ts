import { Component, OnInit, OnDestroy, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { PaymentsService } from '../../providers/payments.service';
import { DaysOfWeekPipe } from 'src/app/pipes/days-of-week.pipe';
import { IncomesService } from '../../providers/incomes.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, OnDestroy {

  public filterPipe = new DaysOfWeekPipe();

  public chartBy: string = 'days';

  public chartSelected: string = 'payments';


  @ViewChild("picker0") picker0: ElementRef;
  @ViewChild("picker1") picker1: ElementRef;

  public notification = new EventEmitter<string>();

  public labels: Date[]=[]

  constructor(public _paymentServices: PaymentsService,
              public _incomeServices:IncomesService) { }

  async ngOnInit() {
    this._paymentServices.state = 'CARGO';
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
    if(selection){this.chartSelected=selection};
    this.labels = [];
    timer().subscribe(async()=>{
      await this.checkDates();
      this.checkNumberOfDays().then(async (labelsNumber: number) => {
        await this.setLabels(labelsNumber);
        console.log('emit');
        this.notification.emit(this.chartSelected);
      })
    })
  }

  async checkDates(){
    if (!this.picker1['_selected'] && !this.picker0['_selected']) {
      let date1 = await this.filterPipe.transform(new Date());
      date1 = await new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0, 0);
      switch(this.chartSelected){
        case 'payments':
          this._paymentServices.inputs[0] = await date1.getTime();
          this._paymentServices.inputs[1] = await this._paymentServices.inputs[0] + (86400000 * 7);
          this.picker0['_selected'] = await new Date(date1);
          this.picker1['_selected'] = await new Date(this._paymentServices.inputs[0] + (86400000 * 7));
          break;
       case 'incomes':
          this._incomeServices.inputs[0] = await date1.getTime();
          this._incomeServices.inputs[1] = await this._incomeServices.inputs[0] + (86400000 * 7);
          this.picker0['_selected'] = await new Date(date1);
          this.picker1['_selected'] = await new Date(this._incomeServices.inputs[0] + (86400000 * 7));
          break;
      }
      return
    } else {
      await this.setDates();
      return
    }
  }

  async setDates() {
    if(this.chartSelected === 'incomes'){
      this._incomeServices.inputs[0] = await new Date(this.picker0['_selected']).getTime();
      this._incomeServices.inputs[1] = await new Date(this.picker1['_selected']).getTime();
      return
    }else if(this.chartSelected === 'payments'){
      this._paymentServices.inputs[0] = await new Date(this.picker0['_selected']).getTime();
      this._paymentServices.inputs[1] = await new Date(this.picker1['_selected']).getTime();
      return
    }
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
    this._incomeServices.inputs=[];
    this._paymentServices.inputs = [];
  }
}
