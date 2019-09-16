import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CompanyComponent } from '../company.component';
import { LineChartComponent } from 'src/app/shared/line-chart/line-chart.component';
import { IncomesService } from 'src/app/providers/incomes.service';
import { Income } from 'src/app/models/income.model';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-incomes-chart',
  templateUrl: './incomes-chart.component.html',
  styleUrls: ['./incomes-chart.component.scss']
})
export class IncomesChartComponent implements OnInit, OnDestroy {

  public labels: string[] = [];

  public data: number[] = [];

  public companySubscription: Subscription

  @ViewChild('chart') chart: LineChartComponent;

constructor(public companyComponent:CompanyComponent,

            public _incomeServices:IncomesService){}

 ngOnInit(){
   this._incomeServices.incomeType = 'liquidated';
   this.companyComponent.generateChart()
   this.companySubscription = this.companyComponent.notification.subscribe((selection:string) => {
     if(selection === 'incomes'){
       timer().subscribe(() => {
         this.setIncomesData();
       })
     }
   })
 }

  async setIncomesData() {
  await this._incomeServices.search().subscribe()
  await this.companyComponent.labels.forEach((label: Date, index: number) => {
        this.data[index] = 0;
  })
  this._incomeServices.getIncomesData().subscribe(async(incomes)=>{
      await this.companyComponent.labels.forEach(async (label: Date, index: number) => {
        await incomes.forEach((income: Income) => {
          if (new Date(income.date).getTime() >= label.getTime() && new Date(income.date).getTime() < this.companyComponent.labels[index + 1].getTime()) {
            this.data[index] += income['amount'];
          }
        })
      })
    await this.companyComponent.labels.forEach((date: Date, index: number) => {
      this.labels[index] = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    })
    this.chart.setInfo(this.labels, this.data, 'incomes', 'CARGO');
    timer(200).subscribe(() => {

      this.clean()
    })
  });  
  }

  clean(){
    this.companyComponent.labels = [];
    this.labels = [];
    this.data = [];
  }


  kldkñlañdkaklsñ(){

  }

  moveRight(direction?: string) {
    if (this.companyComponent.chartBy === 'weeks') {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = new Date(this._incomeServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = new Date(this._incomeServices.inputs[1] + 604800000);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = new Date(this._incomeServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = new Date(this._incomeServices.inputs[1] - 604800000);
        this.companyComponent.generateChart();
      }
    } else {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = new Date(this._incomeServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = new Date(this._incomeServices.inputs[1] + 86400000);
       this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = new Date(this._incomeServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = new Date(this._incomeServices.inputs[1] - 86400000);
        this.companyComponent.generateChart();
      }
    }
  }

  moveLeft(direction?: string) {
    if (this.companyComponent.chartBy === 'weeks') {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = new Date(this._incomeServices.inputs[0] + 604800000);
        this.companyComponent.picker1['_selected'] = new Date(this._incomeServices.inputs[1]);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = new Date(this._incomeServices.inputs[0] - 604800000);
        this.companyComponent.picker1['_selected'] = new Date(this._incomeServices.inputs[1]);
        this.companyComponent.generateChart();
      }
    } else {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = new Date(this._incomeServices.inputs[0] + 86400000);
        this.companyComponent.picker1['_selected'] = new Date(this._incomeServices.inputs[1]);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = new Date(this._incomeServices.inputs[0] - 86400000);
        this.companyComponent.picker1['_selected'] = new Date(this._incomeServices.inputs[1]);
        this.companyComponent.generateChart();
      }
    }
  }

  switch(amount: number) {
    if(this._incomeServices.incomeType==='liquidated'){
      this._incomeServices.fromIL += amount;
    }else{
      this._incomeServices.fromINL += amount;
    }
    this._incomeServices.search().subscribe(); 
  }

  ngOnDestroy(){
       this._incomeServices.incomeType = 'liquidated';
       this.companySubscription.unsubscribe();
       this._incomeServices.iLCount = 0;
       this._incomeServices.iNLCount = 0;
       this._incomeServices.incomeType = '';
       this._incomeServices.incomesLiquidated = [];
       this._incomeServices.incomesNotLiquidated = [];
  }

}
