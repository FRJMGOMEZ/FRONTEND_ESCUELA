import { Component, OnInit} from '@angular/core';
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
    this._incomeServices.from = 0;
    this._incomeServices.getIncomes().subscribe()
  }

  switch(amount: number) {
    this._incomeServices.from+=amount;
    if (this._incomeServices.lastSearchCriteria === undefined) {
      this._incomeServices.getIncomes().subscribe()
    } else {
      this.incomesComponent.search()
    }
  }
}
