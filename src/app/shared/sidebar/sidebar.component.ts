import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { CalendarService } from '../../providers/calendar.service';
import { Router } from '@angular/router';
import { Week } from 'src/app/models/week.model';
import { Subscription } from 'rxjs';
import { WeekOrder } from '../../models/week.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentWeek:Week
  today:string

  weekSubscription:Subscription = null;

  constructor(public _userServices:UserServices,
              private _calendarServices:CalendarService,
              private route:Router) {}

  ngOnInit() { 
  
  }

 toLastWeek(){

   this.weekSubscription = this._calendarServices.weeks$.subscribe((weekOrder: WeekOrder) => {
     if (weekOrder.order === 'getByDate') {
       this.currentWeek = weekOrder.week;
       this.route.navigate(['/day', this.currentWeek._id, this.currentWeek[this.today]._id]).then(()=>{
         this.weekSubscription.unsubscribe()
       })
     }
   })

     let today = new Date()
     let weekDate;
    switch (today.getDay()) {
     case 1: weekDate = new Date(); this.today = 'monday';
       break;
     case 2: weekDate = today.setDate(today.getDate() - 1); this.today = 'tuesday';
       break;
     case 3: weekDate = today.setDate(today.getDate() - 2); this.today = 'wednesday';
       break;
     case 4: weekDate = today.setDate(today.getDate() - 3); this.today = 'thursday';
       break;
     case 5: weekDate = today.setDate(today.getDate() - 4); this.today = 'friday';
       break;
     case 6: weekDate = today.setDate(today.getDate() - 5); this.today = 'saturday';
       break;
     case 0: weekDate = today.setDate(today.getDate() - 6); this.today = 'sunday';
       break;
   }
   weekDate = new Date(weekDate);
   weekDate = new Date(weekDate.getFullYear(),weekDate.getMonth(),weekDate.getDate(),1,0,0,0);
   weekDate = weekDate.getTime()

   this._calendarServices.getWeekByDate(new Date(weekDate)).subscribe((res:any)=>{
     console.log(res);
       if(res === 'no-week'){
         let date = new Date(
         );
         let dateInMiliseconds = date.getTime()
         this.route.navigate(['/day', 'no-week', dateInMiliseconds]).then(()=>{
           this.weekSubscription.unsubscribe()
         })
       }
   })   
  }

  ngOnDestroy(): void {}
}