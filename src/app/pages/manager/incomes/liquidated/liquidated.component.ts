import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IncomesService } from '../../../../providers/incomes.service';
import { IncomesComponent } from '../incomes.component';

@Component({
  selector: 'app-liquidated',
  templateUrl: './liquidated.component.html',
  styleUrls: ['./liquidated.component.scss']
})
export class LiquidatedComponent implements OnInit {


  constructor(public _incomeServices:IncomesService,
             private incomesComponent:IncomesComponent) { }

  ngOnInit() {
    this.incomesComponent.input0.nativeElement.value = '';
    if(this.incomesComponent.input1){
      this.incomesComponent.input1.nativeElement.value = '';
    }
    this._incomeServices.searchMode = false;
    this._incomeServices.getIncomesLiquidated().subscribe()
  }

  switch(amount: number) {
    this._incomeServices.fromIL+=amount;
    if (!this._incomeServices.searchMode) {
      this._incomeServices.getIncomesLiquidated().subscribe()
    } else {
      this.incomesComponent.search();
    }
  }
}
