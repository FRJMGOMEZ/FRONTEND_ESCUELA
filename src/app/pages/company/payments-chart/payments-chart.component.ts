import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentsService } from 'src/app/providers/payments.service';
import { Payment } from 'src/app/models/payment.model';
import { CompanyComponent } from '../company.component';
import { LineChartComponent } from '../../../shared/line-chart/line-chart.component';

@Component({
  selector: 'app-payments-chart',
  templateUrl: './payments-chart.component.html',
  styleUrls: ['./payments-chart.component.scss']
})
export class PaymentsChartComponent implements OnInit {

  public labels: string[] = [];

  public data: number[] = [];

  @ViewChild('chart') chart: LineChartComponent;

  constructor(public _paymentServices: PaymentsService,
    public companyComponent: CompanyComponent) { }

  async ngOnInit() {
    this.companyComponent.generateChart();
    this.companyComponent.notification.subscribe((selection: string) => {
      if(selection === 'payments'){
        this.setPaymentsData();
        this.chart.setStyle('1');
      }
    })
  }

  async setPaymentsData() {
    this._paymentServices.searchPayments().subscribe(async () => {
      await this.companyComponent.labels.forEach((label: Date, index: number) => {
        this.data[index] = 0;
      })
      await this.companyComponent.labels.forEach((label: Date, index: number) => {
        this._paymentServices.payments.forEach((payment: Payment) => {
          if (new Date(payment.date).getTime() >= label.getTime() && new Date(payment.date).getTime() < this.companyComponent.labels[index + 1].getTime()) {
            this.data[index] += payment.amount;
          }
        })
      })
      await this.companyComponent.labels.forEach((date: Date, index: number) => {
        this.labels[index] = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      })
      this.chart.setInfo(this.labels, this.data,'payments');
    })
  }

 async setDates(plus:number,less:number){
    let values = this.companyComponent.input0.nativeElement.value.split('/');
    await values.forEach((value, index) => {
      values[index] = Number(value);
    });
    let values2 = this.companyComponent.input1.nativeElement.value.split('/');
    await values2.forEach((value, index) => {
      values2[index] = Number(value);
    })
    if(this.companyComponent.chartBy === 'days'){
      this._paymentServices.inputs[0] = await new Date(values[2], values[1] - 1, values[0]).getTime() + 86400000;
      this._paymentServices.inputs[1] = await new Date(values2[2], values2[1] - 1, values2[0]).getTime() + 86400000;
    }else{
      this._paymentServices.inputs[0] = await new Date(values[2], values[1] - 1, values[0]).getTime() + 604800000;
      this._paymentServices.inputs[1] = await new Date(values2[2], values2[1] - 1, values2[0]).getTime() + 604800000;
    }
  }

  ngOnDestroy() {
    this._paymentServices.payments = [];
  }

}
