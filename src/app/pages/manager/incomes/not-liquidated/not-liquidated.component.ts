import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
    this.incomesComponent.input0.nativeElement.value = '';
    if (this.incomesComponent.input1) {
      this.incomesComponent.input1.nativeElement.value = '';
    }
    this._incomeServices.searchMode = false;
    this._incomeServices.getIncomesNotLiquidated().subscribe();
  }

  postPayments(incomeId:string){
    this._paymentModalController.showModal(incomeId)
    this._paymentModalController.notification.emit()
  }

  switch(amount:number){
    this._incomeServices.fromINL+=amount;
    if(!this._incomeServices.searchMode){
      this._incomeServices.getIncomesNotLiquidated().subscribe()
    }else{
      console.log('seacrhMode');
      this.incomesComponent.search();
    }
  }
}
