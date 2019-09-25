import { Component, OnInit,ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { PaymentsService } from '../../../providers/payments.service';
import Swal from 'sweetalert2';
import { LetterService } from '../../../providers/letter.service';
import { UserServices } from '../../../providers/user.service';
import { DemoService } from '../../../providers/demo.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit, OnDestroy {

  @ViewChild('input0') input0 : ElementRef
  @ViewChild('input1') input1: ElementRef

  constructor(public _paymentServices:PaymentsService,
              public _letterServices:LetterService,
              public _userService:UserServices,
              public _demoServices:DemoService) { }

  ngOnInit() {
    //// Payments section ///
    this._letterServices.getUsers();
    this._letterServices.getLetters().subscribe()

    ///// Letter section /////
    this._paymentServices.searchMode = false;
    this._paymentServices.getPayments().subscribe();
    this._demoServices.paymentsPopup();
    this.paymentTypeChange('all');

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
          let values = this.input0.nativeElement.value.split('-');
          await values.forEach((value, index) => {
            values[index] = Number(value);
          });
          this._paymentServices.inputs[0] = await new Date(values[2], values[1] - 1, values[0]).getTime();

          let values2 = this.input1.nativeElement.value.split('-');
          await values2.forEach((value, index) => {
            values2[index] = Number(value);
          })
          this._paymentServices.inputs[1] = await new Date(values2[2], values2[1] - 1, values2[0]).getTime();

          this._paymentServices.searchPayments().subscribe();
        })
        break;
    }          
  }

  getAll() {
    this._paymentServices.getPayments().subscribe()
    this._paymentServices.searchMode = false;
    this.input0.nativeElement.value = '';
    if (this.input1) {
      this.input1.nativeElement.value = '';
    }
  }

  checkDateFormat() {
    return new Promise((resolve, reject) => {
      let regExp = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
      if (regExp.test(this.input0.nativeElement.value) && regExp.test(this.input1.nativeElement.value)) {
        resolve(true);
      } else {
        Swal.fire({
          text: 'Utiliza el formato indicado dd-mm-yyyy , gracias',
          type: 'info',
          showCloseButton: true
        })
      }
    })
  }

  buttonsStyle(type:string){
    if (type === 'all') {
      if (this._paymentServices.paymentTypes.indexOf('all')==0) {
        console.log(this._paymentServices.paymentTypes.indexOf('all'))
        return '1'
      } else {
        return '0.5'
      }
    } else if (type === 'sent') {
      if (this._paymentServices.paymentTypes.indexOf('sent') == 0) {
        return '1'
      } else {
        return '0.5'
      }

    } else if (type === 'notSent') {
      if (this._paymentServices.paymentTypes.indexOf('notSent') == 0) {
        return '1'
      } else {
        return '0.5'
      }
    } else if (type === 'CARGO') {
      if (this._paymentServices.paymentTypes.indexOf('CARGO') == 0) {
        return '1'
      } else {
        console.log('CARGO')
        return '0.5'
      }
    }
  }

  paymentTypeChange(paymentType:string){
    this._paymentServices.from = 0;
    this._paymentServices.paymentTypes = [paymentType];
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

  ngOnDestroy(){
  this._paymentServices.payments = []
  this._paymentServices.paymentSearchCriteria = 'amount';
  this._paymentServices.paymentTypes= ['all'];
  this._paymentServices.searchMode = false;
  this._paymentServices.inputs = []
  this._paymentServices.from= 0;
  this._paymentServices.count= 0;
  this._letterServices.letterSelectedId=undefined;
  this._letterServices.users= []
  this._letterServices.letters=[];
  this._letterServices.form = undefined;
  }
}
