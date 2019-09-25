import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CompanyComponent } from '../company.component';
import { LineChartComponent } from 'src/app/shared/line-chart/line-chart.component';
import { IncomesService } from 'src/app/providers/incomes.service';
import { Income } from 'src/app/models/income.model';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-incomes-chart',
  templateUrl: './incomes-chart.component.html',
  styleUrls: ['./incomes-chart.component.css']
})
export class IncomesChartComponent implements OnInit, OnDestroy {

  public labels: string[] = [];

  public data: number[] = [];

  public companySubscription: Subscription;

  public liquidated:boolean = true;
  public notLiquidated:boolean=true;
  public all:boolean=true;

  @ViewChild('chart') chart: LineChartComponent;

constructor(public companyComponent:CompanyComponent,

            public _incomeServices:IncomesService){}

 ngOnInit(){
   this.companySubscription = this.companyComponent.notification.subscribe((selection:string) => {
     if(selection === 'incomes'){
       this.labels = []; 
       this.setIncomesData();
     }
   })
   this.onSelection();
 }

 onSelection(){
   if(this.liquidated && this.notLiquidated){
       this._incomeServices.incomeType='all';
     this._incomeServices.from = 0;
   }else{
    if(this.all){
      this._incomeServices.incomeType='all';
    }else{
      if (!this.liquidated) {
        this._incomeServices.incomeType = "notLiquidated"
      }
      if (!this.notLiquidated) {
        this._incomeServices.incomeType = "liquidated"
      }
    }
   }
   this.companyComponent.generateChart()
 }

  async setIncomesData() {
  await this._incomeServices.searchIncomes().subscribe()

  let dataArray=[];
  let dataLabels=[];
  let dataColors=[];

    await this.companyComponent.labels.forEach((date: Date, index: number) => {
      this.labels[index] = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    })

  if(this.all){
    let data= await this.incomesDataSearch('all');
    await dataArray.push(data);
    dataLabels.push('TODOS');
    dataColors.push('red');
  }
  if(this.liquidated){
    let data = await this.incomesDataSearch('liquidated');
    await dataArray.push(data);
    dataLabels.push('INGRESOS LIQUIDADOS');
    dataColors.push('green');
  }
  if(this.notLiquidated){
    let data = await this.incomesDataSearch('notLiquidated');
    await dataArray.push(data);
    dataLabels.push('INGRESOS NO LIQUIDADOS');
    dataColors.push('blue');
  }
  let labels = this.labels;
    this.chart.setInfo(labels, dataArray,dataLabels,dataColors,'incomeChart');
  }

  incomesDataSearch(type:string){
    return new Promise<any[]>((resolve,reject)=>{
      this._incomeServices.incomeType = type;
      this._incomeServices.getIncomesChartData().subscribe(async (incomes) => {
        let data=[];
        await this.companyComponent.labels.forEach((label: Date, index: number) => {
          data[index] = 0;
        })
        await this.companyComponent.labels.forEach(async (label: Date, index: number) => {
          await incomes.forEach((income: Income) => {
            if (new Date(income.date).getTime() >= label.getTime() && new Date(income.date).getTime() < this.companyComponent.labels[index + 1].getTime()) {
              data[index] += income['amount'];
            }
          })
        })
        resolve(data);
      }); 
    })
  }

 async moveRight(direction?: string) {
    if (this.companyComponent.chartBy === 'weeks') {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = await new Date(this._incomeServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = await new Date(this._incomeServices.inputs[1] + 604800000);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = await new Date(this._incomeServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = await new Date(this._incomeServices.inputs[1] - 604800000);
        this.companyComponent.generateChart();
      }
    } else {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = await new Date(this._incomeServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = await new Date(this._incomeServices.inputs[1] + 86400000);
       this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = await new Date(this._incomeServices.inputs[0]);
        this.companyComponent.picker1['_selected'] = await new Date(this._incomeServices.inputs[1] - 86400000);
        this.companyComponent.generateChart();
      }
    }
  }

  async moveLeft(direction?: string) {
    if (this.companyComponent.chartBy === 'weeks') {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = await new Date(this._incomeServices.inputs[0] + 604800000);
        this.companyComponent.picker1['_selected'] = await new Date(this._incomeServices.inputs[1]);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = await new Date(this._incomeServices.inputs[0] - 604800000);
        this.companyComponent.picker1['_selected'] = await new Date(this._incomeServices.inputs[1]);
        this.companyComponent.generateChart();
      }
    } else {
      if (direction === 'forward') {
        this.companyComponent.picker0['_selected'] = await new Date(this._incomeServices.inputs[0] + 86400000);
        this.companyComponent.picker1['_selected'] = await new Date(this._incomeServices.inputs[1]);
        this.companyComponent.generateChart();
      } else {
        this.companyComponent.picker0['_selected'] = await new Date(this._incomeServices.inputs[0] - 86400000);
        this.companyComponent.picker1['_selected'] = await new Date(this._incomeServices.inputs[1]);
        this.companyComponent.generateChart();
      }
    }
  }

  switch(amount: number) {
    this._incomeServices.from*=amount;
    this._incomeServices.searchIncomes().subscribe(); 
  }

  ngOnDestroy(){
       this.companySubscription.unsubscribe();
       this._incomeServices.incomeType = 'liquidated';
       this._incomeServices.count = 0;
       this._incomeServices.incomes = [];
  }

}
