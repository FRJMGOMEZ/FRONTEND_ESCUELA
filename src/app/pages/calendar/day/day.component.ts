import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarComponent } from '../calendar.component';
import { CalendarService } from '../../../providers/calendar.service';
import { CalendarModalController } from '../../../modals/calendar-modal/calendar-modal.controller';
import { FacilitiesService } from '../../../providers/facilities.service';
import { Facilitie } from 'src/app/models/facilitie.model';
import { Calendar } from 'src/app/models/calendar.model';
import { Day } from 'src/app/models/day.model';

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {
  
  @ViewChild("calendarPlace") calendarPlace: ElementRef;
  
  notification = new EventEmitter<any>();

  calendarId: string;
  dayId: string;
  currentCalendar: Calendar;
  prevCalendar: Date[];
  nextCalendar: Date[];
  currentDay: Day;
  currentDate: string;
  facilities: Facilitie[];
  facilitieFrom:number=0
  cardWidth: string;
  inProgress: boolean = true;
  position:number


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public calendarComponent: CalendarComponent,
    public _calendarServices: CalendarService,
    private _calendarModalController: CalendarModalController,
    public _facilitieServices: FacilitiesService,
  ) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      if (params["calendarId"] === this.calendarId) {
        this.dayId = params["day"];
        this.calendarId = params["calendarId"];
        this._calendarServices.getDayById(this.dayId).subscribe()

      } else {
        if (params["calendarId"] === "no-calendar") {
          this.getCalendarByDate(new Date())
        } else {
          this.dayId = params["day"];
          this.calendarId = params["calendarId"];
          if(!this.currentCalendar){
            this._calendarServices.getCalendarById(this.calendarId).subscribe(()=>{
              this.getCalendarsAround()
            })
          }else{
            this.getCalendarsAround()
          }
          this._calendarServices.getDayById(this.dayId).subscribe()
          }
        }
    });

    this._calendarServices.events$.subscribe(()=>{
      this._calendarServices.getDayById(this.dayId).subscribe()
    })

    this._calendarServices.calendars$.subscribe((calendar: Calendar) => {
      this.currentCalendar = calendar;
    });
    
    this._calendarServices.currentDay$.subscribe(day => {   
      this.facilities = null;
      this.position = null
      this.currentDay = day;
      this.reinit().then(()=>{})
    });
   
    this.notification.subscribe(res => {
      this.position = res.position + 1 || this.position;
    });
  }


  getCalendarByDate(date: Date) {
    this.currentCalendar = null;
    this._calendarServices.getCalendarByDate(date).subscribe((res) => {
      if (!this.currentCalendar) {
        this._calendarServices.postDaysOfTheWeek(date).subscribe(() => {
          this._calendarServices.postCalendar().subscribe(calendar => {
            console.log(this.currentCalendar)
            let today = new Date();
            let dayId;
            switch (today.getDay()) {
              case 1:
                dayId = calendar.monday._id;
                break;
              case 2:
                dayId = calendar.tuesday._id;
                break;
              case 3:
                dayId = calendar.wednesday._id;
                break;
              case 4:
                dayId = calendar.thursday._id;
                break;
              case 5:
                dayId = calendar.friday._id;
                break;
              case 6:
                dayId = calendar.saturday._id;
                break;
              case 0:
                dayId = calendar.sunday._id;
                break;
              default: dayId = calendar.monday._id
            }
            this.router.navigate(["/day", calendar._id, dayId]);
          });
        });
      } else {
        this.router.navigate([
          "./day",
          this.currentCalendar._id,
          this.currentCalendar.monday._id
        ]);
      }
    })
  }

  getWidth() {
    this.cardWidth = `${Math.round(
      ((this.calendarPlace.nativeElement.offsetWidth / 12) * 11) /
        (this.facilities.length + 1)
    )}px`;
  }

  
  reinit(number:number=0) {
    return new Promise((resolve, reject) => {
      if (this.facilitieFrom + number >= 0) {
        this.facilitieFrom += number;
      }
      this.facilities = null;
      /////Repartir facilities////
      this._facilitieServices.getFacilities(null,this.facilitieFrom).subscribe(facilities => {
        if (facilities) {
          facilities.forEach(facilitie => {
            let space = 720;
            facilitie.space = space;
          });
          this.facilities = facilities;
          this.getWidth()
          this.inProgress = false;
          this.position = 0;
          this.getCurrentDate()
          resolve();
        }
      });
    });
  }

  getCalendarsAround() {
    let calendarDate = new Date(this.currentCalendar.date);
    this.prevCalendar = [
      new Date(calendarDate.getTime() - 518400000),
      new Date(calendarDate.getTime() - 172800000)
    ];
    this.nextCalendar = [
      new Date(calendarDate.getTime() + 518400000),
      new Date(calendarDate.getTime() + 518400000 * 2)
    ];
  }

  getCurrentDate(){
    switch (new Date(this.currentDay.date).getDay()) {
      case 1:
        this.currentDate = `Lunes ${new Date(this.currentDay.date).getDate()}/${new Date(
          this.currentDay.date
        ).getMonth() + 1}/${new Date(this.currentDay.date).getFullYear()}`;
        break;
      case 2:
        this.currentDate = `Martes ${new Date(this.currentDay.date).getDate()}/${new Date(
          this.currentDay.date
        ).getMonth() + 1}/${new Date(this.currentDay.date).getFullYear()} `;
        break;
      case 3:
        this.currentDate = `Miércoles ${new Date(
          this.currentDay.date
        ).getDate()}/${new Date(this.currentDay.date).getMonth() + 1}/${new Date(
          this.currentDay.date
        ).getFullYear()} `;
        break;
      case 4:
        this.currentDate = `Jueves ${new Date(this.currentDay.date).getDate()}/${new Date(
          this.currentDay.date
        ).getMonth() + 1}/${new Date(this.currentDay.date).getFullYear()} `;
        break;
      case 5:
        this.currentDate = `Viernes ${new Date(
          this.currentDay.date
        ).getDate()}/${new Date(this.currentDay.date).getMonth() + 1}/${new Date(
          this.currentDay.date
        ).getFullYear()} `;
        break;
      case 6:
        this.currentDate = `Sábado ${new Date(this.currentDay.date).getDate()}/${new Date(
          this.currentDay.date
        ).getMonth() + 1}/${new Date(this.currentDay.date).getFullYear()} `;
        break;
      case 0:
        this.currentDate = `Domingo ${new Date(
          this.currentDay.date
        ).getDate()}/${new Date(this.currentDay.date).getMonth() + 1}/${new Date(
          this.currentDay.date
        ).getFullYear()} `;
        break;
    }
  }

  showCalendarModal() {
    this._calendarModalController.showModal(this.calendarId, this.dayId);
  }

  async toOtherDay(dayId) {
    this.router.navigate(["./day", this.calendarId, dayId]);
  }

  async toOtherWeek(date: Date) {
    this.getCalendarByDate(date);
    };

}


 


