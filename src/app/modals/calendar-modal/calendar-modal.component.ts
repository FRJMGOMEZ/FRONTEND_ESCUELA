import { Component} from '@angular/core';
import { CalendarModalController } from './calendar-modal.controller';
import { CalendarService } from '../../providers/calendar.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-calendar-modal",
  templateUrl: "./calendar-modal.component.html",
  styleUrls: ["./calendar-modal.component.scss"]
})
export class CalendarModalComponent {

  constructor(public _modalController:CalendarModalController,
             private _calendarServices:CalendarService,
             private router:Router) {}

  navigateToDay(date:Date){
    date = new Date(date);
    date = new Date(date.getFullYear(),date.getMonth(),date.getDate(),6,0,0,0)
    this._calendarServices.getDayByDate(date.getTime()).subscribe((res:any)=>{
      this._modalController.notification.emit()
      if(res==='no-day'){
        this._calendarServices.postWeek(date).subscribe(()=>{
          setTimeout(()=>{
            console.log(this._calendarServices.currentWeek)
            this._calendarServices.checkWeekDay(new Date(this._calendarServices.currentDay.date).getDay()).then((dayId: string) => {
              this._calendarServices.getDayById(dayId).subscribe(() => {
                this.router.navigate(['/calendar', this._calendarServices.currentWeek._id, this._calendarServices.currentDay._id]).then(() => {
                  this.hideModal()
                })
              })
            })
          },1000)
        })
      }else{
        this._calendarServices.getWeekByDay(this._calendarServices.currentDay._id,new Date(this._calendarServices.currentDay.date).getDay()).subscribe(()=>{
          this.router.navigate(['/calendar',this._calendarServices.currentWeek._id,this._calendarServices.currentDay._id]).then(()=>{
            this.hideModal()
          })
        })
      }
    })
  }
  hideModal() {
    this._modalController.hideModal()
  }
}

