import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PaymentsService } from '../../../providers/payments.service';
import Swal from 'sweetalert2';
import { LetterService } from '../../../providers/letter.service';
import { UserServices } from '../../../providers/user.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  @ViewChild('input0') input0 : ElementRef
  @ViewChild('input1') input1: ElementRef

  constructor(public _paymentServices:PaymentsService,
              public _letterServices:LetterService,
              public _userService:UserServices) { }

  ngOnInit() {
    this._paymentServices.searchMode=false;
    this._paymentServices.getPayments().subscribe();
    this._letterServices.getUsers();
  }

  searchPayment(){
    this._paymentServices.searchMode=true;
    switch (this._paymentServices.paymentSearchCriteria) {
      case 'artist':
        this._paymentServices.inputs[0] = this.input0.nativeElement.value;
        this._paymentServices.searchPayments().subscribe()
        break;
      case 'amount':
        this._paymentServices.inputs[0] = String(this.input0.nativeElement.value);
        this._paymentServices.inputs[1] = String(this.input1.nativeElement.value);
        this._paymentServices.searchPayments().subscribe();
        break;
      case 'date':
        this.checkDateFormat().then(async () => {
          let values = this.input0.nativeElement.value.split('/');
          await values.forEach((value, index) => {
            values[index] = Number(value);
          });
          this._paymentServices.inputs[0] = await new Date(values[2], values[1] - 1, values[0]).getTime();

          let values2 = this.input1.nativeElement.value.split('/');
          await values2.forEach((value, index) => {
            values2[index] = Number(value);
          })
          this._paymentServices.inputs[1] = await new Date(values2[2], values2[1] - 1, values2[0]).getTime();

          this._paymentServices.searchPayments().subscribe();
        })
        break;
    }          
  }

  checkDateFormat() {
    return new Promise((resolve, reject) => {
      let regExp = new RegExp('^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$');
      if (regExp.test(this.input0.nativeElement.value) && regExp.test(this.input1.nativeElement.value)) {
        resolve(true);
      } else {
        Swal.fire({
          text: 'Utiliza el formato indicado dd/mm/yyyy , gracias',
          type: 'info',
          showCloseButton: true
        })
      }
    })
  }

  buttonsStyle(type:string){
    if(type === 'all'){
      if (this._paymentServices.state === 'sent' || this._paymentServices.state === 'notSent' ){
        return '0.5'
      }
    }else if(type === 'sent'){
      if (this._paymentServices.state === 'all' || this._paymentServices.state === 'notSent') {
        return '0.5'
      }

    }else if (type === 'notSent'){
      if (this._paymentServices.state === 'sent' || this._paymentServices.state === 'all') {
        return '0.5'
      }
    }
  }

  stateChange(state:string){
    this._paymentServices.state = state;
    if(this._paymentServices.searchMode){
      this.searchPayment();
    }else{
      this._paymentServices.getPayments().subscribe()
    }
  }

  switchPage(amount:number){
    this._paymentServices.from += amount;
    if (!this._paymentServices.searchMode) {
      this._paymentServices.getPayments().subscribe()
    } else {
      this.searchPayment();
    }
  }

  getAll(){
    this._paymentServices.getPayments().subscribe()
    this._paymentServices.searchMode=false;
    this.input0.nativeElement.value = '';
    if(this.input1){
      this.input1.nativeElement.value = '';
    }
  }

}
