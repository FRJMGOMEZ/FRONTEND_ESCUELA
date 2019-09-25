import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentsService } from 'src/app/providers/payments.service';
import { Payment } from 'src/app/models/payment.model';
import { CompanyComponent } from '../company.component';
import { LineChartComponent } from '../../../shared/line-chart/line-chart.component';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-payments-chart',
  templateUrl: './payments-chart.component.html',
  styleUrls: ['./payments-chart.component.scss']
})
export class PaymentsChartComponent implements OnInit {

  public labels: string[] = [];

  public data: number[] = [];

  public companySubscription : Subscription;

  public liquidated:boolean=true;
  public notLiquidated:boolean=true;
  public CARGO:boolean=true;
  public all:boolean=true;

  public showTable: boolean = false;

  @ViewChild('chart') chart: LineChartComponent;

  constructor(public _paymentServices: PaymentsService,
              public companyComponent: CompanyComponent) { }

  ngOnInit() {
    this.companySubscription=this.companyComponent.notification.subscribe((selection:string) => {
      if(selection === 'payments'){
        this.labels = [];
        timer().subscribe(() => {
          this.setPaymentsData();
         
        })
      }
    })
    this.onSelection();
  }

  onSelection(){
    this._paymentServices.from = 0;

    if(this.CARGO || this.liquidated || this.notLiquidated || this.all){
      this.setpaymentTypes();
      this.companyComponent.generateChart()
    }else{
      this._paymentServices.paymentTypes = [];
      this.companyComponent.generateChart();
    }       
  }

  setpaymentTypes(){
    if (this.CARGO) {
      this._paymentServices.paymentTypes.push('CARGO');
    } else {
      this._paymentServices.paymentTypes = this._paymentServices.paymentTypes.filter((paymentTypes: string) => { return paymentTypes != 'CARGO' });
    }
    if (this.liquidated) {
      this._paymentServices.paymentTypes.push('sent');
    } else {
      this._paymentServices.paymentTypes = this._paymentServices.paymentTypes.filter((paymentTypes: string) => { return paymentTypes != 'sent' });
    }
    if (this.notLiquidated) {
      this._paymentServices.paymentTypes.push('notSent');
    } else {
      this._paymentServices.paymentTypes = this._paymentServices.paymentTypes.filter((paymentTypes: string) => { return paymentTypes != 'notSent' });
    }
    if (this.all) {
      this._paymentServices.paymentTypes = ['all'];
    } else {
      this._paymentServices.paymentTypes = this._paymentServices.paymentTypes.filter((paymentTypes: string) => { return paymentTypes != 'all' });
    }
  }


 async setPaymentsData() {
   if(this._paymentServices.paymentTypes.length > 0){
     this._paymentServices.searchPayments().subscribe(()=>{
       this.showTable = true;
     });
   }else{
     this._paymentServices.payments=[];
   }

   await this.companyComponent.labels.forEach((date: Date, index: number) => {
     this.labels[index] = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
   })

   let dataArray = [];
   let dataLabels = [];
   let dataColors = [];

   if (this.all) {
     let data = await this.paymentsDataSearch('all');
     await dataArray.push(data);
     dataLabels.push('TODOS');
     dataColors.push('red');
   }
   if (this.liquidated) {
     let data = await this.paymentsDataSearch('sent');
     await dataArray.push(data);
     dataLabels.push('ARTISTAS LIQUIDADAS');
     dataColors.push('green');
   }
   if (this.notLiquidated) {
     let data = await this.paymentsDataSearch('notSent');
     await dataArray.push(data);
     dataLabels.push('ARTISTAS NO LIQUIDADAS');
     dataColors.push('blue');
   }
   if (this.CARGO) {
     let data = await this.paymentsDataSearch('CARGO');
     await dataArray.push(data);
     dataLabels.push('CARGO');
     dataColors.push('orange');
   }
    let labels = this.labels;
    this.chart.setInfo(labels,dataArray, dataLabels,dataColors,'payments');
     this.setpaymentTypes()    
}

  async paymentsDataSearch(paymentTypes:string){
    return new Promise((resolve,reject)=>{
      this._paymentServices.paymentTypes=[paymentTypes];
      this._paymentServices.getPaymentsChartData().subscribe(async (payments) => {
        let data = []
        await this.companyComponent.labels.forEach((label: Date, index: number) => {
          data[index] = 0;
        })
        await this.companyComponent.labels.forEach((label: Date, index: number) => {
          payments.forEach((payment: Payment) => {
            if (new Date(payment.date).getTime() >= label.getTime() && new Date(payment.date).getTime() < this.companyComponent.labels[index + 1].getTime()) {
              data[index] += payment.amount;
            }
          })
        })
        resolve(data)
      })
    })        
  }
  

 async moveRight(direction?: string){
    if (this.companyComponent.chartBy === 'weeks') {
      if (direction === 'forward') {
        this.companyComponent.picker0.startAt = await new Date(this._paymentServices.inputs[0]);
        this.companyComponent.picker1.startAt = await new Date(this._paymentServices.inputs[1] + 604800000);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0.startAt = await new Date(this._paymentServices.inputs[0] );
        this.companyComponent.picker1.startAt = await new Date(this._paymentServices.inputs[1] - 604800000);
        this.companyComponent.generateChart();
      }
    } else {
      if (direction === 'forward') {
        this.companyComponent.picker0.startAt = await new Date(this._paymentServices.inputs[0]);
        this.companyComponent.picker1.startAt = await new Date(this._paymentServices.inputs[1] + 86400000);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0.startAt = await new Date(this._paymentServices.inputs[0] );
        this.companyComponent.picker1.startAt = await new Date(this._paymentServices.inputs[1] - 86400000);
        this.companyComponent.generateChart();
      }
    }
  }

 async moveLeft(direction?: string) {
    if (this.companyComponent.chartBy === 'weeks') {
      if (direction === 'forward') {
        this.companyComponent.picker0.startAt = await new Date(this._paymentServices.inputs[0] + 604800000);
        this.companyComponent.picker1.startAt = await new Date(this._paymentServices.inputs[1]);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0.startAt = await new Date(this._paymentServices.inputs[0] - 604800000);
        this.companyComponent.picker1.startAt = await new Date(this._paymentServices.inputs[1] );
        this.companyComponent.generateChart();
      }
    } else {
      if (direction === 'forward') {
        this.companyComponent.picker0.startAt = await new Date(this._paymentServices.inputs[0] + 86400000);
        this.companyComponent.picker1.startAt = await new Date(this._paymentServices.inputs[1] );
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0.startAt = await new Date(this._paymentServices.inputs[0] - 86400000);
        this.companyComponent.picker1.startAt = await new Date(this._paymentServices.inputs[1] );
        this.companyComponent.generateChart();
      }
    }
  }

  switchPage(amount: number) {
    this._paymentServices.from += amount;
    this._paymentServices.searchPayments().subscribe(); 
  }

  ngOnDestroy() {
    this.companySubscription.unsubscribe();
    this._paymentServices.payments = [];
    this._paymentServices.count = 0;
    this._paymentServices.from = 0;
  }

}
