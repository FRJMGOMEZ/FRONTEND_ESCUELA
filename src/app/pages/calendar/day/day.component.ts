import { Component, OnInit, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarService } from '../../../providers/calendar.service';
import { CalendarModalController } from '../../../modals/calendar-modal/calendar-modal.controller';
import { FacilitiesService } from '../../../providers/facilities.service';
import { Week } from 'src/app/models/week.model';
import { Day } from 'src/app/models/day.model';
import { EventOrder, Event as EventModel } from '../../../models/event.model';
import { Subscription } from 'rxjs';
import { EventModalController } from '../../../modals/events-modal/eventsModal.controller';

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit, OnDestroy {
  @ViewChild("weekPlace") weekPlace: ElementRef;

  inProgress: boolean = true;

  notification = new EventEmitter<any>();

  weekSubscription: Subscription = null;
  daySubscription: Subscription = null;
  eventSubscription: Subscription = null;

  permanentEvents: EventModel[];

  weekId: string;
  dayId: string;
  currentWeek: Week;
  prevWeek: Date[];
  nextWeek: Date[];
  currentDay: Day;
  currentDate: string;
  facilities: any[];
  facilitieFrom: number = 0;
  cardWidth: string;
  position: number = 0;
  heightOfEventsFrame: number = 720;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public _calendarServices: CalendarService,
    private _calendarModalController: CalendarModalController,
    public _facilitieServices: FacilitiesService,
    private _modalEventController: EventModalController
  ) {}

  ngOnInit() {
    /////// Get Facilities //////
    this.getFacilities().then((facilities: any[]) => {
      this.facilities = facilities;
    });

    /////// Get permanent Events ////
    this._calendarServices
      .getPermanentEvents()
      .subscribe((events: EventModel[]) => {
        this.permanentEvents = events;
      });

    ////// Notification from event component ////
    this.notification.subscribe(res => {
      this.position = res.position + 1 || this.position;
    });

    ///// Notification from calendarModal //////
    this._calendarModalController.notification.subscribe((res: any) => {
      if (res && res.date) {
        this.postWeek(res.date, res.day);
      }
    });

    ///// Subscriptions ///////
    this.eventSubscription = this._calendarServices.events$.subscribe(
      (eventOrder: EventOrder) => {
        this.inProgress = true;

        if (eventOrder.order === "push") {
          this.currentDay[`hour${eventOrder.event.hour}`].push(
            eventOrder.event
          );
          if (eventOrder.event.permanent) {
            this.permanentEvents.push(eventOrder.event);
          }
        }
        if (eventOrder.order === "put") {
          this.currentDay[`hour${eventOrder.event.hour}`].forEach(
            (event, index) => {
              if (event._id === eventOrder.event._id) {
                this.currentDay[`hour${eventOrder.event.hour}`][index] =
                  eventOrder.event;
              }
            }
          );
          if (eventOrder.event.permanent) {
            this.permanentEvents.forEach((event, index) => {
              if (event._id === eventOrder.event._id) {
                this.permanentEvents[index] = eventOrder.event;
              }
            });
          }
        }
        if (eventOrder.order === "delete") {
          this.currentDay[`hour${eventOrder.event.hour}`] = this.currentDay[
            `hour${eventOrder.event.hour}`
          ].filter(event => {
            return event._id != eventOrder.event._id;
          });
          this.permanentEvents = this.permanentEvents.filter(event => {
            return event._id != eventOrder.event._id;
          });
        }
        if (eventOrder.order === "pull") {
          this.currentDay[`hour${eventOrder.event.hour}`] = this.currentDay[
            `hour${eventOrder.event.hour}`
          ].filter(event => {
            return event._id != eventOrder.event._id;
          });
          this.permanentEvents.forEach((event, index) => {
            if (event._id === eventOrder.event._id) {
              this.permanentEvents[index] = eventOrder.event;
            }
          });
        }
        this.init();
      }
    );

    this.weekSubscription = this._calendarServices.weeks$.subscribe(
      (week: Week) => {
        if (week) {
          this.currentWeek = week;
          this.getWeeksAroundDates();
          this._calendarServices.getDayById(this.dayId).subscribe();
        }
      }
    );

    this.daySubscription = this._calendarServices.currentDay$.subscribe(day => {
      this.currentDay = day;
      this.init();
    });

    ///////// Router //////////
    this.activatedRoute.params.subscribe(params => {
      if (params["weekId"] === this.weekId) {
        this.inProgress = true;
        this.dayId = params["day"];
        this.weekId = params["weekId"];
        this._calendarServices.getDayById(this.dayId).subscribe();
      } else {
        if (params["weekId"] === "no-week") {
          this.postWeek(new Date(Number(params["day"])));
        } else {
          this.inProgress = true;
          this.dayId = params["day"];
          this.weekId = params["weekId"];
          if (this.currentWeek) {
            this._calendarServices.getDayById(this.dayId).subscribe();
          } else {
            this._calendarServices.getWeekById(this.weekId).subscribe();
          }
        }
      }
    });
  }

  getFacilities() {
    return new Promise((resolve, reject) => {
      this._facilitieServices
        .getFacilities(this.facilitieFrom)
        .subscribe(facilities => {
          switch (this._facilitieServices.count) {
            case 6:
              facilities = facilities.slice(0, 3);
              this.facilitieFrom = this.facilitieFrom - 2;
              break;
            case 7:
            case 8:
            case 11:
            case 12:
            case 16:
            case 17:
            case 18:
              facilities = facilities.slice(0, 4);
              this.facilitieFrom = this.facilitieFrom - 1;
              break;
          }
          resolve(facilities);
        });
    });
  }
  
  switchFacilities(number: number = 0) {
    if (this.facilitieFrom + number >= 0) {
      this.inProgress = true;
      this.facilitieFrom += number;
      this.getFacilities().then((facilities: any[]) => {
        this.facilities = facilities;
        this.init();
      });
    }
  }

  postWeek(date: Date, day?: number) {
    date = new Date(date);
    date = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      1,
      0,
      0,
      0
    );
    this._calendarServices.postWeek(date).subscribe(week => {
      this.inProgress = true;
      this.currentWeek = week;
      this.getWeeksAroundDates();
      if (day >= 0) {
        this.checkWeekDay(day).then(dayId => {
          this.router.navigate(["./day", week._id, dayId]);
        });
      } else {
        this.checkWeekDay().then(dayId => {
          this.router.navigate(["./day", week._id, dayId]);
        });
      }
    });
  }

  checkWeekDay(day?: number) {
    return new Promise((resolve, reject) => {
      let dayId;
      if (day >= 0) {
        switch (day) {
          case 1:
            dayId = this.currentWeek.monday._id;
            resolve(dayId);
            break;
          case 2:
            dayId = this.currentWeek.tuesday._id;
            resolve(dayId);
            break;
          case 3:
            dayId = this.currentWeek.wednesday._id;
            resolve(dayId);
            break;
          case 4:
            dayId = this.currentWeek.thursday._id;
            resolve(dayId);
            break;
          case 5:
            dayId = this.currentWeek.friday._id;
            resolve(dayId);
            break;
          case 6:
            dayId = this.currentWeek.saturday._id;
            resolve(dayId);
            break;
          case 0:
            dayId = this.currentWeek.sunday._id;
            resolve(dayId);
            break;
          default:
            dayId = this.currentWeek.monday._id;
            resolve(dayId);
            break;
        }
      } else {
        let today = new Date();
        switch (today.getDay()) {
          case 1:
            dayId = this.currentWeek.monday._id;
            resolve(dayId);
            break;
          case 2:
            dayId = this.currentWeek.tuesday._id;
            resolve(dayId);
            break;
          case 3:
            dayId = this.currentWeek.wednesday._id;
            resolve(dayId);
            break;
          case 4:
            dayId = this.currentWeek.thursday._id;
            resolve(dayId);
            break;
          case 5:
            dayId = this.currentWeek.friday._id;
            resolve(dayId);
            break;
          case 6:
            dayId = this.currentWeek.saturday._id;
            resolve(dayId);
            break;
          case 0:
            dayId = this.currentWeek.sunday._id;
            resolve(dayId);
            break;
          default:
            dayId = this.currentWeek.monday._id;
            resolve(dayId);
            break;
        }
      }
    });
  }

  getWeeksAroundDates() {
    let WeekDate = new Date(this.currentWeek.date);
    this.prevWeek = [
      new Date(WeekDate.getTime() - 604800000),
      new Date(WeekDate.getTime() - 86400000)
    ];

    this.nextWeek = [
      new Date(WeekDate.getTime() + 604800000),
      new Date(WeekDate.getTime() + 604800000 * 2 - 86400000)
    ];
  }

  init() {
    /// Reinit the space of each facilitie////
    this.facilities.forEach(facilitie => {
      let space = this.heightOfEventsFrame;
      facilitie.space = space;
    });
    /// Reinit the initial position of the events renderization  //
    this.position = 0;
    /// Start the renderization ///
    setTimeout(() => {
      this.inProgress = false;
    });
    /// Get the width of each column ///
    setTimeout(() => {
      this.getWidth();
    });
  }

  getWidth() {
    this.cardWidth = `${Math.round(
      ((this.weekPlace.nativeElement.offsetWidth / 12) * 11) / 5
    )}px`;
  }

  showCalendarModal() {
    this._calendarModalController.showModal();
  }

  toOtherDay(dayId) {
    this.router.navigate(["./day", this.weekId, dayId]);
  }

  toOtherWeek(date: Date) {
    date = new Date(date);
    date = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes()
    );
    this._calendarServices
      .getWeekByDate(date)
      .subscribe((weeks: Week[]) => {
        let dayDate = new Date(this.currentDay.date);
        if (weeks.length == 0) {
          this.postWeek(date, dayDate.getDay());
        } else {
          this.currentWeek = weeks[0];
          this.getWeeksAroundDates();
          this.checkWeekDay(dayDate.getDay()).then(dayId => {
            this.router.navigate(["./day", this.currentWeek._id, dayId]);
          });
        }
      });
  }

  deletePermanentEvent(id: string) {
    this._calendarServices.deleteEvent(id, this.currentDay._id).subscribe();
  }

  showEventPermanentInfo(id: string) {
    this._modalEventController.notification.emit({ eventId: id });
    this._modalEventController.showModal();
  }

  ngOnDestroy() {
    this.weekSubscription.unsubscribe();
    this.daySubscription.unsubscribe();
    this.eventSubscription.unsubscribe();
  }
}


 


