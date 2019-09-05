import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentsService } from 'src/app/providers/payments.service';
import { Payment } from 'src/app/models/payment.model';
import { CompanyComponent } from '../company.component';
import { LineChartComponent } from '../../../../shared/line-chart/line-chart.component';

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
    this.chart.setStyle('0.3')
    this.companyComponent.notification.subscribe((selection: string) => {
      if (selection === 'payments') {
        this.chart.chart = null;
        this.setPaymentsData();
        this.chart.setStyle('1');
      } else {
        this.chart.setStyle('0.3', 'pointer');
        this.chart.resetChart();
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
      this.companyComponent.labels = [];
      this.labels = [];
      this.data = [];
    })
  }

  ngOnDestroy() {
    this._paymentServices.payments = [];
  }

}
