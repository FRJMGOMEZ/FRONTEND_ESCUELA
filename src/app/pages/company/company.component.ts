import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { PaymentsService } from '../../providers/payments.service';
import { DaysOfWeekPipe } from 'src/app/pipes/days-of-week.pipe';
import { IncomesService } from '../../providers/incomes.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, OnDestroy {

  @Input()picker:any

  public filterPipe = new DaysOfWeekPipe();

  public chartBy: string = "days";

  public chartSelected: string = 'payments';

  @ViewChild("input0") input0: ElementRef;
  @ViewChild("input1") input1: ElementRef;

  public notification = new EventEmitter<string>();

  public labels: Date[]=[]

  constructor(public _paymentServices: PaymentsService,
              public _incomeServices:IncomesService) { }

  async ngOnInit() {
    this._paymentServices.companyPayments = true;
  }

  changeSelection(type:string){
    this.chartSelected=type;
  }

  async generateChart(selection?: string) {
    if(selection){this.chartSelected=selection};
    this.labels = [];
    if (!this.input0.nativeElement.value && !this.input1.nativeElement.value) {
      let date1 = await this.filterPipe.transform(new Date());
      date1 = await new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0, 0);
      this._paymentServices.inputs[0] = await date1.getTime();
      this._paymentServices.inputs[1] = await this._paymentServices.inputs[0] + (86400000 * 7);
    } else {
      await this.setDates();
    }
    this.checkNumberOfDays().then(async (labelsNumber: number) => {
       await this.setLabels(labelsNumber);
       this.notification.emit(this.chartSelected);
    })
  }

  async setDates() {
    let values = this.input0.nativeElement.value.split('/');
    await values.forEach((value, index) => {
      values[index] = Number(value);
    });
    let values2 = this.input1.nativeElement.value.split('/');
    await values2.forEach((value, index) => {
      values2[index] = Number(value);
    })
    if(this.chartSelected === 'incomes'){
     
    }else if(this.chartSelected === 'payments'){
      this._incomeServices.inputs[0] = await new Date(values[2], values[1] - 1, values[0]).getTime();
      this._incomeServices.inputs[1] = await new Date(values2[2], values2[1] - 1, values2[0]).getTime();
    }
  }

  checkNumberOfDays() {
    return new Promise((resolve, reject) => {
      if ((this._paymentServices.inputs[1] - this._paymentServices.inputs[0]) / 86400000 > 14) {
        this.chartBy = 'weeks';
        let numbersOfWeeks = Math.ceil((this._paymentServices.inputs[1] - this._paymentServices.inputs[0]) / (86400000 * 7));
        resolve(numbersOfWeeks);
      } else {
        this.chartBy = 'days';
        let numberOfDays = Math.ceil((this._paymentServices.inputs[1] - this._paymentServices.inputs[0]) / 86400000);
        resolve(numberOfDays);
      }
    })
  }

  setLabels(labelsNumber: number) {
    return new Promise((resolve, reject) => {
      this.labels.push(new Date(this._paymentServices.inputs[0]))
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
    } else if (type === 'projects') {
      if (this.chartSelected != 'projects') {
        return '0.5'
      }
    }else if (type === 'events'){
      if(this.chartSelected != 'events'){
        return '0.5'
      }
    }
  }

  ngOnDestroy() {
    this._paymentServices.inputs = [];
    this._paymentServices.companyPayments = false;
  }
}
