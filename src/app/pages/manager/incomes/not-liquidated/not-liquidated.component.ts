import { Component, OnInit } from '@angular/core';
import { IncomesService } from '../../../../providers/incomes.service';
import { PaymentModalController } from '../../../../modals/payment-modal/paymentModalController.service';
import { IncomesComponent } from '../incomes.component';

@Component({
  selector: 'app-not-liquidated',
  templateUrl: './not-liquidated.component.html',
  styleUrls: ['./not-liquidated.component.scss']
})
export class NotLiquidatedComponent implements OnInit {

  constructor(public _incomeServices:IncomesService,
             public _paymentModalController:PaymentModalController,
             public incomesComponent:IncomesComponent) { }

  ngOnInit() {
    this._incomeServices.from = 0;
    this._incomeServices.getIncomes().subscribe();
  }

  postPayments(incomeId:string){
    this._paymentModalController.showModal(incomeId)
    this._paymentModalController.notification.emit()
  }

  switch(amount:number){
    this._incomeServices.from+=amount;
    if(this._incomeServices.lastSearchCriteria === undefined){
      this._incomeServices.getIncomes().subscribe()
    }else{
      this.incomesComponent.search();
    }
  }
}
