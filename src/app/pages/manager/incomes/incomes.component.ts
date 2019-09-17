import { Component, ElementRef, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { IncomeModalController } from 'src/app/modals/income-modal/incomesModalController.service';
import { IncomesService } from '../../../providers/incomes.service';
import Swal from 'sweetalert2';
import { DemoService } from '../../../providers/demo.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent implements OnDestroy,OnInit {

  @ViewChild("input0") input0: ElementRef;
  @ViewChild("input1") input1: ElementRef;

  constructor(private _incomeModalController:IncomeModalController,
              public _incomeServices:IncomesService,
              public _demoServices:DemoService) { }

  ngOnInit(){
    this._demoServices.incomesPopup();
  }            

  postIncome(){
    this._incomeModalController.showModal();
    this._incomeModalController.notification.emit();
  }

  async search() {
   switch (this._incomeServices.searchCriteria) {
      case 'origin':
        this._incomeServices.inputs[0] = this.input0.nativeElement.value;
        this._incomeServices.search().subscribe()
        break;
      case 'amount':
        this._incomeServices.inputs[0] = String(this.input0.nativeElement.value);
        this._incomeServices.inputs[1] = String(this.input1.nativeElement.value);
        this._incomeServices.search().subscribe();
        break;
      case 'date':
        this.checkDateFormat().then(async()=>{
          let values = this.input0.nativeElement.value.split('-');
          await values.forEach((value, index) => {
            values[index] = Number(value);
          });
          this._incomeServices.inputs[0] = await new Date(values[2], values[1] - 1, values[0]).getTime();

          let values2 = this.input1.nativeElement.value.split('-');
          await values2.forEach((value, index) => {
            values2[index] = Number(value);
          })
          this._incomeServices.inputs[1] = await new Date(values2[2], values2[1] - 1, values2[0]).getTime();

          this._incomeServices.search().subscribe();
        })
      
        break;
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

  buttonsStyles(type:string){
    if(this._incomeServices.incomeType === ''){
      this._incomeServices.searchCriteria='origin';
      if(type === 'notLiquidated'){
        timer(300).subscribe(() => {
          this._incomeServices.incomeType = 'notLiquidated';
        })
        return '1';
      }else{
        timer(300).subscribe(() => {
          this._incomeServices.incomeType = 'notLiquidated';
        })
        return '0.5'
      }
    }else{
      if (type === 'liquidated') {
        if (this._incomeServices.incomeType != 'liquidated') {
          return '0.5'
        }
      } else {
        if (this._incomeServices.incomeType != 'notLiquidated') {
          return '0.5'
        } else {
          return '1';
        }
      }

    }
  }

  ngOnDestroy(){
    this._incomeServices.searchMode=false;
    this._incomeServices.incomeType = '';
    this._incomeServices.incomesLiquidated=[];
    this._incomeServices.incomesNotLiquidated=[];
    this._incomeServices.fromIL = 0;
    this._incomeServices.fromINL =0;
    this._incomeServices.searchCriteria='';
    this._incomeServices.lastSearchCriteria='';
  }
}
