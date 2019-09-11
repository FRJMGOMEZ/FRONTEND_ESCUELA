import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { CompanyComponent } from '../company.component';
import { LineChartComponent } from 'src/app/shared/line-chart/line-chart.component';
import { IncomesService } from 'src/app/providers/incomes.service';
import { Income } from 'src/app/models/income.model';



@Component({
  selector: 'app-incomes-chart',
  templateUrl: './incomes-chart.component.html',
  styleUrls: ['./incomes-chart.component.scss']
})
export class IncomesChartComponent implements OnInit {

  public labels: string[] = [];

  public data: number[] = [];

  @ViewChild('chart') chart: LineChartComponent;

constructor(public companyComponent:CompanyComponent,
            public _incomeServices:IncomesService){

}

 ngOnInit(){
   this.companyComponent.notification.subscribe((selection: string) => {
     if (selection === 'incomes') {
       this.chart.chart = null;
       this.setIncomesData();
       this.chart.setStyle('1');
     } else {
       this.chart.setStyle('0.3', 'pointer');
       this.chart.resetChart();
     }
   })
 }

  async setIncomesData() {
    this._incomeServices.search().subscribe(async () => {
      await this.companyComponent.labels.forEach((label: Date, index: number) => {
        this.data[index] = 0;
      })
      await this.companyComponent.labels.forEach((label: Date, index: number) => {
        this._incomeServices.incomesLiquidated.forEach((income: Income) => {
          if (new Date(income.date).getTime() >= label.getTime() && new Date(income.date).getTime() < this.companyComponent.labels[index + 1].getTime()) {
            this.data[index] += income.notLiquidatedAmount;
          }
        })
      })
      await this.companyComponent.labels.forEach((date: Date, index: number) => {
        this.labels[index] = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      })
      this.chart.setInfo(this.labels, this.data, 'incomes');
      this.companyComponent.labels = [];
      this.labels = [];
      this.data = [];
    })
  }

}
