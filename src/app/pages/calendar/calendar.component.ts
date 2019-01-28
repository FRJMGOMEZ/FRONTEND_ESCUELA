import { Component} from '@angular/core';
import { CalendarService } from '../../providers/calendar.service';
import { UserServices } from '../../providers/user.service';
import { FacilitiesService } from '../../providers/facilities.service';
import * as _ from "underscore";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"]
})
export class CalendarComponent  {
  
  token: string;

  currentCalendar:any;
  week:any[];
  currentDate:string

  calendars:any[]=[null,null,null,null];

  constructor(
    private _facilitieServices:FacilitiesService,
    private _calendarServices: CalendarService,
    private _userServices: UserServices
  
  ) {
    this.token = this._userServices.token;   
  }

  postCalendar(calendarDay: Date) {
    return new Promise((resolve, reject) => {
      let observable;
      switch (calendarDay.getDay()) {
        case 1: observable = this._calendarServices.postDaysOfTheWeek(calendarDay, this.token);
          break;
        case 2: calendarDay.setDate(calendarDay.getDate() - 1); observable = this._calendarServices.postDaysOfTheWeek(calendarDay, this.token);
          break;
        case 3: calendarDay.setDate(calendarDay.getDate() - 2); observable = this._calendarServices.postDaysOfTheWeek(calendarDay, this.token);
          break;
        case 4: calendarDay.setDate(calendarDay.getDate() - 3); observable = this._calendarServices.postDaysOfTheWeek(calendarDay, this.token);
          break;
        case 5: calendarDay.setDate(calendarDay.getDate() - 4); observable = this._calendarServices.postDaysOfTheWeek(calendarDay, this.token);
          break;
        case 6: calendarDay.setDate(calendarDay.getDate() - 5); observable = this._calendarServices.postDaysOfTheWeek(calendarDay, this.token);
          break;
        case 0: calendarDay.setDate(calendarDay.getDate() - 6); observable = this._calendarServices.postDaysOfTheWeek(calendarDay, this.token);
          break;
      }
      observable.subscribe((week) => {
        let days = []
        week.forEach(day => { days.push(day._id) });
        this._calendarServices.postCalendar(days, this.token).subscribe((calendar) => {
          resolve(calendar)
        })
      })
    })
  }   

  getCalendar(id: string) {
    return new Promise((resolve, reject) => {
      this._calendarServices
        .getCalendarById(id, this.token)
        .subscribe((calendar) => {
          this.currentCalendar = calendar;
          this.getWeek(calendar).then(() => {
            resolve()
          })
        })
    })
  }

  getWeek(calendar:any) {
    return new Promise((resolve, reject) => {
      this.week = [{ date: new Date(calendar.monday.date), id: calendar.monday._id },
      { date: new Date(calendar.tuesday.date), id: calendar.tuesday._id },
      { date: new Date(calendar.wednesday.date), id: calendar.wednesday._id },
      { date: new Date(calendar.thursday.date), id: calendar.thursday._id },
      { date: new Date(calendar.friday.date), id: calendar.friday._id },
      { date: new Date(calendar.saturday.date), id: calendar.saturday._id },
      { date: new Date(calendar.sunday.date), id: calendar.sunday._id },
      ];
      resolve()
    })
  }

  async checkCalendars() {
      this.calendars=[null,null,null,null];
      await this.sortPrevCalendars()
      await this.sortNextCalendars()
      await this.checkCalendarPosition(0);
      await this.checkCalendarPosition(1);
      await this.checkCalendarPosition(2);
      await this.checkCalendarPosition(3);
      return   
  }

  checkCalendarPosition(position: number) {
    return new Promise((resolve, reject) => {
      if (this.calendars[position] === null && this.calendars[position]!=this.currentCalendar) {
        let days;
        switch (position) {
          case 0:
            days = -14;
            break;
          case 1:
            days = -7;
            break;
          case 2:
            days = 7;
            break;
          case 3:
            days = 14;
           break;
        } 
        let ref = new Date(this.currentCalendar.monday.date)
        ref.setDate(ref.getDate() + days);
          this.postCalendar(ref).then(calendar => {
            this.calendars[position] = calendar; 
            resolve();
          })   
      } else {
        resolve()
      }
    })
  }

  sortPrevCalendars() {
    return new Promise((resolve, reject) => {
      this._calendarServices.getCalendars(this.token).subscribe((calendars) => {
        let calendarsBefore = calendars.filter((calendar)=>{return calendar.tuesday.date < this.currentCalendar.tuesday.date})
        calendarsBefore = _.sortBy(calendarsBefore, (calendar:any) => { return [new Date(calendar.monday.date).getTime()]}) 
        if(calendarsBefore === undefined ){resolve()}
        else if (calendarsBefore.length === 1){this.calendars[1]=calendarsBefore[0];resolve()}
        else{
          calendarsBefore.forEach((calendar)=>{
            if (new Date(this.currentCalendar.tuesday.date).getTime() - new Date(calendar.tuesday.date).getTime()<1512000000 ){
              this.calendars[1] = calendar;
            }
          })
          calendarsBefore.forEach((calendar) => {
     
            if(calendar != this.calendars[1]&& !this.calendars[0] && new Date(this.currentCalendar.tuesday.date).getTime() - new Date(calendar.tuesday.date).getTime()<1512000000 ){this.calendars[0]=calendar}
          })
          resolve()
        }
      })
    })
  }

  sortNextCalendars(){
    return new Promise((resolve,reject)=>{
      this._calendarServices.getCalendars(this.token).subscribe((calendars) => {
        let calendarsAfter = calendars.filter((calendar)=>{return calendar.wednesday.date > this.currentCalendar.wednesday.date })
        calendarsAfter = _.sortBy(calendarsAfter,(calendar:any)=>{ return [new Date(calendar.monday.date).getTime()]})
        calendarsAfter.reverse()
        if(calendarsAfter.length === undefined){resolve()}
        else if(calendarsAfter.length === 1){
          this.calendars[2] = calendarsAfter[0];resolve()
        }else{
          calendarsAfter.forEach((calendar)=>{
            if (new Date(calendar.tuesday.date).getTime()-new Date(this.currentCalendar.tuesday.date).getTime()<1512000000){
            this.calendars[2] = calendar;}
          })
          calendarsAfter.forEach((calendar) => {
            if (calendar != this.calendars[2] && new Date(calendar.tuesday.date).getTime() - new Date(this.currentCalendar.tuesday.date).getTime()<1512000000) { this.calendars[3] = calendar }
          })         
        }
        resolve()
    })
  })}

  navigateToCalendar(id: string) {
    return new Promise((resolve, reject) => {
      let calendar = this.calendars.filter((calendar) => {
       return calendar._id === id
      })
      this.getWeek(calendar[0]).then(() => {
        let today;
        this.week.forEach((day) => {
          if (day.date.getDate() === new Date().getDate() && day.date.getMonth() === new Date().getMonth() && day.date.getFullYear() === new Date().getFullYear()) {
            today = day;
          }
        })
        if (today) {
          let newDate = new Date(this.currentCalendar.monday.date);
          this._calendarServices.getDayByDate(newDate,this.token).subscribe((day)=>{
          })
          resolve({ day: today.id })
        } else {
          resolve({ day: this.week[0].id })
        }
      })
    })
  } 
     
  getDay(id:string) {
    return new Promise((resolve, reject) => {
      this._calendarServices
        .getDayById(id, this.token)
        .subscribe(day => {
          this.currentDate;
          switch(new Date(day.date).getDay()){
            case 1: this.currentDate = `Lunes ${new Date(day.date).getDate()}/${new Date(day.date).getMonth() + 1}/${new Date(day.date).getFullYear()}`;
            break;
            case 2: this.currentDate = `Martes ${new Date(day.date).getDate()}/${new Date(day.date).getMonth() + 1}/${new Date(day.date).getFullYear()} `;
              break;
            case 3: this.currentDate = `Miércoles ${new Date(day.date).getDate()}/${new Date(day.date).getMonth() + 1}/${new Date(day.date).getFullYear()} `;
              break;
            case 4: this.currentDate = `Jueves ${new Date(day.date).getDate()}/${new Date(day.date).getMonth() + 1}/${new Date(day.date).getFullYear()} `;
              break;
            case 5: this.currentDate = `Viernes ${new Date(day.date).getDate()}/${new Date(day.date).getMonth() + 1}/${new Date(day.date).getFullYear()} `;
              break;
            case 6: this.currentDate = `Sábado ${new Date(day.date).getDate()}/${new Date(day.date).getMonth() + 1}/${new Date(day.date).getFullYear()} `;
              break;
            case 0: this.currentDate = `Domingo ${new Date(day.date).getDate()}/${new Date(day.date).getMonth() + 1}/${new Date(day.date).getFullYear()} `;
              break;
          }
          let hours = [
            day["0"],
            day["1"],
            day["2"],
            day["3"],
            day["4"],
            day["5"],
            day["6"],
            day["7"],
            day["8"],
            day["9"],
            day["10"],
            day["11"]
          ]; resolve({hours})
        })
    })
  }

  getFacilities() {
    return new Promise((resolve, reject) => {
      this._facilitieServices.getFacilities(this.token).subscribe(facilities => {
        if (facilities) {
          facilities.forEach(facilitie => {
            let space = 720;
            facilitie.space = space;
          });
          resolve({facilities});
        }
      });
    })
  } 
}
