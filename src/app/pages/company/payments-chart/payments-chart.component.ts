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

  @ViewChild('chart') chart: LineChartComponent;

  constructor(public _paymentServices: PaymentsService,
              public companyComponent: CompanyComponent) { }

  async ngOnInit() {
    this._paymentServices.state='CARGO';
    this.companyComponent.generateChart();
    this.companySubscription=this.companyComponent.notification.subscribe((selection:string) => {
      if(selection === 'payments'){
        timer().subscribe(() => {
          this.setPaymentsData();
        })
      }
    })
  }

 async setPaymentsData() {
        this._paymentServices.searchPayments().subscribe()
        await this.companyComponent.labels.forEach((label: Date, index: number) => {
          this.data[index] = 0;
        })
        this._paymentServices.getPaymentsData().subscribe(async(payments)=>{
          await this.companyComponent.labels.forEach((label: Date, index: number) => {
            payments.forEach((payment: Payment) => {
              if (new Date(payment.date).getTime() >= label.getTime() && new Date(payment.date).getTime() < this.companyComponent.labels[index + 1].getTime()) {
                this.data[index] += payment.amount;
              }
            })
          })
          this.labels = await[];
          await this.companyComponent.labels.forEach((date: Date, index: number) => {
            this.labels[index] = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
          })
          let dataLabel = await this.dataLabel();
          this.chart.setInfo(this.labels, this.data, 'payments', dataLabel);
        })
  }

  dataLabel(){
    return new Promise<string>((resolve,reject)=>{
      if (this._paymentServices.state === 'CARGO'){
        resolve('CARGO')
      }else{
        resolve('ARTISTAS')
      }
    })
  }

  moveRight(direction?: string){
    if (this.companyComponent.chartBy === 'weeks') {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = new Date(this._paymentServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = new Date(this._paymentServices.inputs[1] + 604800000);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = new Date(this._paymentServices.inputs[0] );
        this.companyComponent.picker1['_selected'] = new Date(this._paymentServices.inputs[1] - 604800000);
        this.companyComponent.generateChart();
      }
    } else {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = new Date(this._paymentServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = new Date(this._paymentServices.inputs[1] + 86400000);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = new Date(this._paymentServices.inputs[0] );
        this.companyComponent.picker1['_selected'] = new Date(this._paymentServices.inputs[1] - 86400000);
        this.companyComponent.generateChart();
      }
    }
  }

  moveLeft(direction?: string) {
    if (this.companyComponent.chartBy === 'weeks') {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = new Date(this._paymentServices.inputs[0] + 604800000);
        this.companyComponent.picker1['_selected'] = new Date(this._paymentServices.inputs[1]);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = new Date(this._paymentServices.inputs[0] - 604800000);
        this.companyComponent.picker1['_selected'] = new Date(this._paymentServices.inputs[1] );
        this.companyComponent.generateChart();
      }
    } else {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = new Date(this._paymentServices.inputs[0] + 86400000);
        this.companyComponent.picker1['_selected'] = new Date(this._paymentServices.inputs[1] );
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = new Date(this._paymentServices.inputs[0] - 86400000);
        this.companyComponent.picker1['_selected'] = new Date(this._paymentServices.inputs[1] );
        this.companyComponent.generateChart();
      }
    }
  }

  switchPage(amount: number) {
    this._paymentServices.from += amount;
    this._paymentServices.searchPayments().subscribe(); 
  }

  ngOnDestroy() {
    this._paymentServices.payments = [];
    this.companySubscription.unsubscribe();
    this._paymentServices.payments = [];
    this._paymentServices.from = 0;
    this._paymentServices.count = 0;
    this._paymentServices.state = 'all';
  }

}
