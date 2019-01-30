
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModalController } from '../../../modals/events-modal/eventsModal.controller';
import { CalendarComponent } from '../calendar.component';
import { CalendarService } from '../../../providers/calendar.service';
import { CalendarModalController } from '../../../modals/calendar-modal/calendar-modal.controller';

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {

  @ViewChild("calendarPlace") calendarPlace: ElementRef;

  currentDay: any;
  calendarId: string;

  cardWidth: string;

  inProgress: boolean = false;

  position:number = 0

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public calendarComponent: CalendarComponent,
    private _calendarServices: CalendarService,
    private _calendarModalController: CalendarModalController,
    private _eventModalController:EventModalController
  ) {}

  ngOnInit() {
    this.inProgress = true;

    this.activatedRoute.params.subscribe(params => {
      this.currentDay = params["day"];
      this.calendarId = params["calendarId"];

      if (this.calendarId === "no-calendar") {
        this.calendarComponent
          .postCalendar(new Date())
          .then((calendar: any) => {
            this._calendarServices.calendarsSource.next(calendar);

            let day = new Date();
            let dayId;

            switch (day.getDay()) {
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
            }
            this.router.navigate(["/day", calendar._id, dayId]);
          });
      } else {
        this.calendarComponent.getCalendar(this.calendarId).then(() => {
          this.calendarComponent.checkCalendars().then(calendars => {
            this.inProgress = false;
            this.render();
          });
        });
      }
    });

    this._eventModalController.notification.subscribe((res)=>{
      if(!res){
        this.calendarComponent.getDay(this.currentDay).then(()=>{
          this.position = 0;
          this.render()
        })
      }
    })

    this._calendarModalController.notification.subscribe(res => {
      if (res) {
        let date = res;
        this.calendarComponent
          .postCalendar(new Date(date))
          .then((calendar: any) => {
            this._calendarServices.calendarsSource.next(calendar);
            let day = new Date();
            let dayId;

            switch (day.getDay()) {
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
              case 7:
                dayId = calendar.sunday._id;
                break;
            }
            this.router.navigate(["/day", calendar._id, dayId]);
          });
      }
    });

      this.calendarComponent.notification.subscribe((res)=>{
          if (res.position === this.position) { this.position += 1 }
      })
  }

  async render() {
    await this.calendarComponent.getDay(this.currentDay);
    await this.calendarComponent.getFacilities();
    this.getWidth();
  }

  getWidth() {
    this.cardWidth = `${Math.round(
      ((this.calendarPlace.nativeElement.offsetWidth / 12) * 11) /
        (this.calendarComponent.facilities.length + 1)
    )}px`;
  }

  async toOtherDay(day) {
    this.inProgress = true;
    this.position = 0;
    this.router.navigate(["./day", this.calendarId, day]);
  }

  async toOtherWeek(calendarId: any) {
    this.inProgress = true;
    this.position = 0;
    let res = await this.calendarComponent.navigateToCalendar(calendarId);
    let dayId = res["day"];
    this.router.navigate(["/day", calendarId, dayId]);
  }

  showCalendarModal() {
    this._calendarModalController.showModal(this.calendarId, this.currentDay);
  }

}

