import { Component, OnInit } from '@angular/core';
import { IncomeModalController } from './incomesModalController.service';
import { Debitor } from '../../models/debitor.modal';
import { Income } from 'src/app/models/income.model';
import { IncomesService } from '../../providers/incomes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-income-modal',
  templateUrl: './income-modal.component.html',
  styleUrls: ['./income-modal.component.scss']
})
export class IncomeModalComponent implements OnInit {

  public debitor:Debitor
  public income:Income

  constructor(public _modalService:IncomeModalController,
              public _incomeServices:IncomesService) {}

  ngOnInit() {
    this._modalService.notification.subscribe(()=>{ 
      if(this._modalService.id){
        let income = this._incomeServices.incomesLiquidated.filter((income: Income) => { return income._id === this._modalService.id })[0]
         || this._incomeServices.incomesNotLiquidated.filter((income: Income) => { return income._id === this._modalService.id })[0] 
        this.income = new Income(income.notLiquidatedAmount,income.debitor,income.date);
        this.debitor = this.income.debitor;
      }else{
        this.income = new Income(null,undefined,null,null,'',[])
        this.debitor = new Debitor(undefined,undefined);   
      }
        this._incomeServices.getDebitors().subscribe()
      
    });
  }

  postIncome(){
    if(!this.income.notLiquidatedAmount ){
      Swal.fire({
        text:'Por favor completa los dos campos requeridos de cantidad y de origen del ingreso',
        showCloseButton:true,        
      })
    }else{
      let debitor;
      if(this.debitor._id){
         debitor = this._incomeServices.debitors.filter((eachDebitor)=>{return eachDebitor._id === this.debitor._id})[0];
      }else{
        debitor = this.debitor;
      }
      this._incomeServices.postIncome(this.income,debitor).subscribe(()=>{
        this.hideModal()
      })
    }
  }

  putIncome(){
    this.income.debitor = this.debitor;
  }

  hideModal(){
    this._incomeServices.debitors=[];
    this._modalService.hideModal()
  }

}
