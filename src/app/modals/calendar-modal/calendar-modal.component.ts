import { Component, OnInit, EventEmitter } from '@angular/core';
import { CalendarModalController } from './calendar-modal.controller';
import { CalendarService } from '../../providers/calendar.service';
import { UserServices } from '../../providers/user.service';
import { Router } from '@angular/router';



@Component({
  selector: "app-calendar-modal",
  templateUrl: "./calendar-modal.component.html",
  styleUrls: ["./calendar-modal.component.scss"]
})
export class CalendarModalComponent implements OnInit {

  token:string

  constructor(public _modalController:CalendarModalController,
             private _calendarServices:CalendarService,
             private _userServices:UserServices,
             private router:Router) {
                this.token = this._userServices.token;
             }
  frame:any 
  
  day: any
  month:any
  year: any

  referenceDay:any
  firstDate:any

  notification:EventEmitter<void>
  
  ngOnInit() {
    
    this._modalController.notification.subscribe((res)=>{

      if(!res){
      
      let calendarId = this._modalController.currentCalendarId;
      let dayId = this._modalController.dayId;

    this._calendarServices.getCalendarById(calendarId).subscribe((calendar:any)=>{
          
      if(calendar.monday._id === dayId){this.day = calendar.monday}
      if (calendar.tuesday._id === dayId) { this.day = calendar.tuesday }
      if (calendar.wednesday._id === dayId) { this.day = calendar.wednesday }
      if (calendar.thursday._id === dayId) { this.day = calendar.thursday }
      if (calendar.friday._id === dayId) { this.day = calendar.friday }
      if (calendar.saturday._id === dayId) { this.day = calendar.saturday }
      if (calendar.sunday._id === dayId) { this.day = calendar.sunday }

      this.firstDate = new Date();
      this.firstDate.setDate(this.firstDate.getDate() - (this.firstDate.getDate() - 1));   
      this.referenceDay = new Date(this.firstDate.getFullYear(),this.firstDate.getMonth(),this.firstDate.getDate());
      this.getStructure()  
      this.getMonth(new Date(this.firstDate))
    })}
    })
  }

  switchMonth(month:number){
    let newMonth = this.firstDate.getMonth()+month;
    let year = this.firstDate.getFullYear();
    let date = this.firstDate.getDate();
    this.firstDate = new Date(year,newMonth,date) 
    this.referenceDay = new Date(this.firstDate);
    this.getMonth(this.referenceDay)
    this.getStructure()
    
  }

  switchYear(year:number){
    let month = this.firstDate.getMonth();
    let newYear = this.firstDate.getFullYear()+year;
    let date = this.firstDate.getDate();
    this.firstDate = new Date(newYear, month, date)
    this.referenceDay = new Date(this.firstDate);
    this.getMonth(this.referenceDay);
    this.getStructure()
  }

 async getStructure(){
  this.frame = []

  if (this.firstDate.getDay() === 1) {

    this.frame.push(this.referenceDay)

    for (let i = 1; i <= 34; i++) {
      this.referenceDay = new Date(this.referenceDay.getFullYear(), this.referenceDay.getMonth(), this.referenceDay.getDate() + 1) 
      this.frame[i]=this.referenceDay;
  }}

  if (this.firstDate.getDay() === 2) {
  let dayBefore = new Date(this.referenceDay);

  dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() - 1);

  this.frame.push(dayBefore);

  this.frame.push(this.referenceDay);

  for (let i = 2; i <= 34; i++) {
    this.referenceDay = new Date(this.referenceDay.getFullYear(),this.referenceDay.getMonth(),this.referenceDay.getDate()+1) 
    this.frame[i] = this.referenceDay;};
  }

   if(this.firstDate.getDay() === 3){

     let dayBefore = new Date(this.referenceDay);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() - 2);

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1);

     this.frame.push(dayBefore);
   
     this.frame.push(this.referenceDay);

     for (let i = 3; i <= 34; i++) {
       this.referenceDay = new Date(this.referenceDay.getFullYear(), this.referenceDay.getMonth(), this.referenceDay.getDate() + 1)
       this.frame[i] = this.referenceDay;
     }
   }

   if (this.firstDate.getDay() === 4) {

     let dayBefore = new Date(this.referenceDay);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() - 3);

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1);

     this.frame.push(dayBefore);
     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1);

     this.frame.push(dayBefore);

     this.frame.push(this.referenceDay);

     for (let i = 4; i <= 34; i++) {
       this.referenceDay = new Date(this.referenceDay.getFullYear(), this.referenceDay.getMonth(), this.referenceDay.getDate() + 1)
       this.frame[i] = this.referenceDay;
     }
   }

   if (this.firstDate.getDay() === 5) {

     let dayBefore = new Date(this.referenceDay);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() - 4);

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(),dayBefore.getMonth(),dayBefore.getDate()+1);
 
     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate()+1)

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1)

     this.frame.push(dayBefore)

     this.frame.push(this.referenceDay);

     for (let i = 5; i <= 34; i++) {
       this.referenceDay = new Date(this.referenceDay.getFullYear(), this.referenceDay.getMonth(), this.referenceDay.getDate() + 1)
       this.frame[i] = this.referenceDay;
     }
   }

   if (this.firstDate.getDay() === 6) {
     let dayBefore = new Date(this.referenceDay);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() - 5);

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1);

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1)

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1)

     this.frame.push(dayBefore)
     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1);

     this.frame.push(dayBefore);

     this.frame.push(this.referenceDay);

     for (let i = 6; i <= 34; i++) {
       this.referenceDay = new Date(this.referenceDay.getFullYear(), this.referenceDay.getMonth(), this.referenceDay.getDate() + 1)
       this.frame[i] = this.referenceDay;
     }
   }

   if (this.firstDate.getDay() === 0) {
     let dayBefore = new Date(this.referenceDay);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() - 6);

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1);

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1)

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1)

     this.frame.push(dayBefore)
     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1);

     this.frame.push(dayBefore);

     dayBefore = new Date(dayBefore.getFullYear(), dayBefore.getMonth(), dayBefore.getDate() + 1);

     this.frame.push(dayBefore);

     this.frame.push(this.referenceDay);

     for (let i = 7; i <= 34; i++) {
       this.referenceDay = new Date(this.referenceDay.getFullYear(), this.referenceDay.getMonth(), this.referenceDay.getDate() + 1)
       this.frame[i] = this.referenceDay;
     }
   }
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

  navigateToDay(date:Date){
     //////handle errors///// continue Herrera's course
    this._calendarServices.getDayByDate(date,this.token).subscribe((day)=>{
      if(day === null){
        this._modalController.notification.emit(date)
        this._modalController.hideModal()
      }
      else{
       let date = new Date(day.date);
       this._calendarServices.getCalendarByDay(day._id,date.getDay(),this.token).subscribe((calendar:any)=>{
           this._modalController.hideModal()
         this.router.navigate(['/day', calendar._id, day._id])
       })}
    })
  }
}
