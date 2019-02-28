import { Component, OnInit} from '@angular/core';
import { CalendarModalController } from './calendar-modal.controller';
import { CalendarService } from '../../providers/calendar.service';

import { Router } from '@angular/router';
import { Week } from 'src/app/models/week.model';

@Component({
  selector: "app-calendar-modal",
  templateUrl: "./calendar-modal.component.html",
  styleUrls: ["./calendar-modal.component.scss"]
})
export class CalendarModalComponent implements OnInit {

  constructor(public _modalController:CalendarModalController,
             private _calendarServices:CalendarService,
             private router:Router) {
             }
  frame:any

  firstDate: any
  month:any
  
  ngOnInit() {
      this.firstDate = new Date();
      this.firstDate.setDate((this.firstDate.getDate()-this.firstDate.getDate()) +1 )
      this.getStructure()  
      this.getMonth(new Date(this.firstDate))
  }
  
  async getStructure() {
    this.frame = []
      for(let i=1;i<=this.firstDate.getDay();i++){
        let dayBefore = new Date(this.firstDate);
       dayBefore.setDate(dayBefore.getDate()-(this.firstDate.getDay()-i))
        this.frame.push(dayBefore)
      }
      let referenceDay = this.firstDate;
      for (let i = this.firstDate.getDay(); i <= 34; i++) {
        referenceDay= new Date(referenceDay.getFullYear(),referenceDay.getMonth(),referenceDay.getDate()+1,referenceDay.getHours(),referenceDay.getMinutes(),referenceDay.getMilliseconds())
        this.frame.push(referenceDay)
      }
    
  }

  switchMonth(month:number){
    let newMonth = this.firstDate.getMonth()+month;
    let year = this.firstDate.getFullYear();
    let date = this.firstDate.getDate();
    this.firstDate = new Date(year,newMonth,date) 
    this.getMonth(this.firstDate)
    this.getStructure()
  }

  switchYear(year:number){
    let month = this.firstDate.getMonth();
    let newYear = this.firstDate.getFullYear()+year;
    let date = this.firstDate.getDate();
    this.firstDate = new Date(newYear, month, date)
    this.getMonth(this.firstDate);
    this.getStructure()
  }

 
  hideModal(){
    this._modalController.hideModal()
  }

  getMonth(date:Date){
    switch(date.getMonth()){
      case 0 : this.month = 'Enero';
      break;
      case 1 : this.month = 'Febrero';
      break;
      case 2 : this.month = 'Marzo';
      break;
      case 3 : this.month = 'Abril';
      break;
      case 4: this.month = 'Mayo';
      break;
      case 5 : this.month = 'Junio';
      break;
      case 6 : this.month = 'Julio';
      break;
      case 7 : this.month = 'Agosto';
      break;
      case 8 : this.month = 'Septiembre';
      break;
      case 9: this.month = 'Octubre';
      break;
      case 10 : this.month = 'Noviembre';
      break;
      case 11 : this.month = 'Diciembre'
    }
  }

  ////// TO FIX ///////
  navigateToDay(date:Date){
    let dateToSearch = new Date(date.getFullYear(),date.getMonth(),date.getDate(),1,0,0,0);
    this._calendarServices.getDayByDate(dateToSearch).subscribe((day)=>{
      console.log(day)
      if(day === null){
        let dateInMilliseconds = date.getTime();
        this._modalController.notification.emit({date:dateInMilliseconds,day:date.getDay()});
        this._modalController.hideModal()
      }
      else{
        console.log('what')
       let dayOfTheWeek= new Date(day.date).getDay();
       this._calendarServices.getWeekByDay(day._id,dayOfTheWeek).subscribe((week:Week)=>{
         this.router.navigate(['/day', week._id, day._id])
         this._modalController.hideModal()
       })}
    })
  }
}

