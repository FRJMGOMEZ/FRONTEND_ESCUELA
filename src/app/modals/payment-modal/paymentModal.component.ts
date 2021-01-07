import { Component, OnInit } from '@angular/core';
import { PaymentModalController } from './payment-modal-controller.service';
import { ManagerService } from '../../providers/manager.service';
import { Income } from 'src/app/models/income.model';
import { IncomesService } from '../../providers/incomes.service';
import Swal from 'sweetalert2';
import { Assignation } from '../../models/track.model';
import { timer } from 'rxjs';
import { PaymentsService } from '../../providers/payments.service';
import { Payment } from '../../models/payment.model';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './paymentModal.component.html',
  styleUrls: ['./paymentModal.component.scss']
})
export class PaymentModalComponent implements OnInit {

  public page: string = "1";
  public income:Income
  public searchBy:string = 'track'; 
  public trackSelected:string
  public assignations:Assignation[] = [];
  public amountAssigned:number = 0;
  public cargoAssignation:Assignation

  constructor(public _modalService:PaymentModalController,
              public _managerServices:ManagerService,
              public _incomeServices:IncomesService,
              public _paymentService:PaymentsService) { }

  ngOnInit() {
    this._modalService.notification.subscribe(()=>{
      if(this._modalService.id){
       this.income =  this._incomeServices.incomes.filter((income)=>{return income._id === this._modalService.id})[0];
      }
    })
  }

  setAmountAssigned(amount:string){
    if(this.income.notLiquidatedAmount < Number(amount)){
      Swal.fire({
        text: 'Introduce una cifra menor o igual a la cantidad pendiente de liquidar por favor',
        showCloseButton:true,
        type:'info'        
      })
    }else{
      this.amountAssigned = Number(amount);
      this.page = "2";
    }
  }

  searchTrack(input:string){
    if(this.searchBy === 'album'){
        this._managerServices.searchItems(input,'albums').subscribe(()=>{
          this._managerServices.tracks = [];
        })
    }else{
        this._managerServices.searchItems(input,'tracks').subscribe(()=>{
          this._managerServices.albums = [];
        })
    }
    this.trackSelected = undefined;
    this.assignations = [];
  }

 showAssignations(){
   this.assignations=[];
  this._managerServices.getItemById(this.trackSelected,'track').subscribe(()=>{
    timer().subscribe(()=>{
      this.assignations = this._managerServices.track.assignations;
      this.getCargoAssignation()
    })
  })
  }

 getCargoAssignation(){
    timer().subscribe(async () => {
      let percent = await 100;
      await this.assignations.forEach((assignation: Assignation) => {
        percent -= assignation.percent;
      })
      this.cargoAssignation = new Assignation(undefined,percent,undefined)
    })
  }

  async generatePayments(){
    await this._paymentService.postPayments(this.trackSelected,this.amountAssigned).subscribe();
    timer(1000).subscribe(()=>{
      this.income.liquidatedAmount += this.amountAssigned;
      this.income.notLiquidatedAmount -= this.amountAssigned;
      let paymentsIds = this._paymentService.payments.map((payment: Payment) => { return payment._id });
      this._incomeServices.putIncome(this.income, paymentsIds).subscribe();
      this.page = '3';
    })    
  }
  

  buttonsStyles(type: string) {
    if (this.searchBy === 'album') {
      if (type != 'album') {
        return '0.5'
      }
    } else if (this.searchBy === 'track') {
      if (type != 'track') {
        return '0.5'
      }
    }
  }

  pageBack(){
    this.page="1";
    this.resetData();
  }
  
  hideModal(){
    this.amountAssigned = 0;
    this._modalService.hideModal();
    this.page = '1';
    this.resetData();
  }

  resetData(){
    this._managerServices.albums = [];
    this._managerServices.tracks = [];
    this._paymentService.payments=[];
    this.assignations=[];
    this.trackSelected=undefined;
    this.cargoAssignation=undefined;
  }
}
