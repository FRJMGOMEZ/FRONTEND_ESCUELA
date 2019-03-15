import { Component, OnInit, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarService } from '../../../providers/calendar.service';
import { CalendarModalController } from '../../../modals/calendar-modal/calendar-modal.controller';
import { FacilitiesService } from '../../../providers/facilities.service';
import { Week, WeekOrder } from 'src/app/models/week.model';
import { Day, DayOrder } from 'src/app/models/day.model';
import { EventOrder, EventModel as EventModel } from '../../../models/event.model';
import { Subscription } from 'rxjs';
import { EventModalController } from '../../../modals/events-modal/eventsModal.controller';
import { UserServices } from '../../../providers/user.service';
import { User } from 'src/app/models/user.model';
import { SwalService } from '../../../providers/swal.service';
import { Facilitie, FacilitieOrder } from '../../../models/facilitie.model';

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit, OnDestroy {
  @ViewChild("weekPlace") weekPlace: ElementRef;

  userOnline:User

  inProgress: boolean = true;

  notification = new EventEmitter<any>();

  weekSubscription: Subscription = null;
  daySubscription: Subscription = null;
  eventSubscription: Subscription = null;
  facilitieSubscription:Subscription=null;

  permanentEvents: EventModel[]=[]

  weekId: string;
  dayId: string;
  currentWeek: Week;
  prevWeek: Date[] = []
  nextWeek: Date[] = []
  currentDay: Day;
  currentDate: string;
  facilities: Facilitie[]=[]
  facilitieFrom: number = 0;
  cardWidth: string;
  position: number = 0;
  heightOfEventsFrame: number = 720;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _modalEventController: EventModalController,
    private _userServices:UserServices,
    private _swalServices:SwalService,
    public _calendarServices: CalendarService,
    public _calendarModalController: CalendarModalController,
    public _facilitieServices: FacilitiesService
  ) {

    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {

    ///// Subscriptions ///////
    this.eventSubscription = this._calendarServices.events$.subscribe(
      (eventOrder: EventOrder) => {
        if (eventOrder.order === "push") {
          this.inProgress = true;
          setTimeout(()=>{
            this.currentDay[`hour${eventOrder.event.hour}`].push(
              eventOrder.event
            );
            if (eventOrder.event.permanent) {
              this.permanentEvents.push(eventOrder.event);
            }
           this.init()
          })
        }
        if (eventOrder.order === "put") {
          this.inProgress = true;
          setTimeout(()=>{
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
            this.init();
          })
        }
        if (eventOrder.order === "delete") {
          this.inProgress = true;
          setTimeout(()=>{
            this.currentDay[`hour${eventOrder.event.hour}`] = this.currentDay[
              `hour${eventOrder.event.hour}`
            ].filter(event => {
              return event._id != eventOrder.event._id;
            });
            this.permanentEvents = this.permanentEvents.filter(event => {
              return event._id != eventOrder.event._id;
            });
            this.init();
          })
        }
        if (eventOrder.order === "pull") {
          this.inProgress = true;
          setTimeout(()=>{
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
            this.init();
          })
        }
      }
    );

    this.weekSubscription = this._calendarServices.weeks$.subscribe(
      (weekOrder: WeekOrder) => {
        if (weekOrder.order === 'getById') {
          this.currentWeek = weekOrder.week;
          this._calendarServices.getDayById(this.dayId).subscribe();
        } else if (weekOrder.order === 'push') {
          this.currentWeek = weekOrder.week;
        }else if (weekOrder.order === 'getByDay'){
          this.currentWeek = weekOrder.week;
          this.router.navigate(['/day', this.currentWeek._id, this.currentDay._id])
        }else if (weekOrder.order === 'getByDate'){
          this.currentWeek = weekOrder.week;
  
          this.checkWeekDay(new Date(this.currentDay.date).getDay()).then(dayId => {
            this.router.navigate(["./day", this.currentWeek._id, dayId]);
          });
        }
      }
    );

    this.daySubscription = this._calendarServices.day$.subscribe((dayOrder:DayOrder) => {
      if(dayOrder.order === 'getById'){
        this.currentDay = dayOrder.day;
        this.init();
      }else if(dayOrder.order === 'getByDate'){
        let dayOfTheWeek = new Date(dayOrder.day.date).getDay();
        this.currentDay = dayOrder.day;
        this._calendarServices.getWeekByDay(dayOrder.day._id, dayOfTheWeek).subscribe()
      }
    });

    this.facilitieSubscription = this._facilitieServices.facilities$.subscribe((facilitieOrder: FacilitieOrder) => {
      if (facilitieOrder.order === 'get') {
        this.facilities.push(facilitieOrder.facilitie)
      }
    })
     
    ////// Upload last check////
    this.userOnline.lastCheck = new Date();
    this._userServices.putUser(this.userOnline._id, this.userOnline).subscribe()

    ////// Getting Facilities /////
    this._facilitieServices.getFacilities(this.facilitieFrom).subscribe()
   
    /////// Getting permanent Events ////
    this._calendarServices
      .getPermanentEvents()
      .subscribe((events: EventModel[]) => {
        this.permanentEvents = events;
      });

    ///// Notification from calendarModal //////
    this._calendarModalController.notification.subscribe((res: any) => {
      if (res && res.date) {
        this.inProgress = true;
        this.postWeek(res.date).then(()=>{
          setTimeout(()=>{
            this.checkWeekDay(res.day).then(dayId => {
              this.router.navigate(["./day", this.currentWeek._id, dayId]);
            });
          })
        })
      }
    });

    ////// Notification from event component ////
    this.notification.subscribe(res => {
      this.position = res.position + 1 || this.position;
    });


    ///////// Router //////////
    this.activatedRoute.params.subscribe(params => {
       this.dayId = params['day'];
       this.weekId = params['weekId'];

      if (params["weekId"] === "no-week") {
        this.postWeek(new Date(Number(params["day"]))).then(() => {
          setTimeout(() => {
            this.checkWeekDay().then(dayId => {
              this.router.navigate(["./day", this.currentWeek._id, dayId]);
            });
          })
        })
      }else{
        if (this.currentWeek && this.currentDay) {
          this.inProgress = true;
          if (this.currentDay._id != this.dayId && this.currentWeek._id != this.weekId) {
            this._calendarServices.getWeekById(params["weekId"]).subscribe();
          } else if (this.currentWeek._id === this.weekId) {
            this._calendarServices.getDayById(params['day']).subscribe();
          }
        } else {
          this.inProgress = true;
          this._calendarServices.getWeekById(this.weekId).subscribe()
        }
      }
    });
  }

  postWeek(date: Date) {
    return new Promise((resolve,reject)=>{
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
      this._calendarServices.postWeek(date).subscribe(()=>{
          resolve()
      })
    })
  }

                                                    ////////// Init /////////
  init() {
    /// Reinit the space of each facilitie////
    this.getWeeksAroundDates();
    this.facilities.forEach((facilitie:any) => {
      let space = this.heightOfEventsFrame;
      facilitie.space = space;
    });
    /// Reinit the initial position of the events renderization  //
    this.position = 0;
    /// Start the renderization ///
      this.inProgress = false;
    /// Get the width of each column ///
    setTimeout(() => {
      this.getWidth();
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

  getWidth() {
    this.cardWidth = `${Math.round(
      ((this.weekPlace.nativeElement.offsetWidth / 12) * 11) / 5
    )}px`;
  }

                                               //////// After init ////////
  switchFacilities(number: number = 0) {
    if (this.facilitieFrom + number >= 0) {
      this.inProgress = true;
      this.facilities=[]
      this.facilitieFrom += number;
      this._facilitieServices.getFacilities(this.facilitieFrom).subscribe(() => {
        this.init()
      })
    }
  }

  toOtherDay(dayId) {
    this.router.navigate(["./day", this.currentWeek._id, dayId]);
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
    this._calendarServices.getWeekByDate(date).subscribe((res:any)=>{
      if(res === 'no-week'){
        this.postWeek(date).then(() => {
          setTimeout(()=>{
            this.checkWeekDay().then(dayId => {
              this.router.navigate(["./day", this.currentWeek._id, dayId]);
            });
          })
        })
      } 
    })
  }

  deletePermanentEvent(id: string) {
    this._swalServices.confirmDelete().then((res)=>{
      if(res){
        this._calendarServices.deleteEvent(id, this.currentDay._id).subscribe();
      }
    })
  }
  
  showEventPermanentInfo(id: string) {
    this._modalEventController.showModal(id);
    this._modalEventController.notification.emit();
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

  ngOnDestroy() {
    this.weekSubscription.unsubscribe();
    this.daySubscription.unsubscribe();
    this.eventSubscription.unsubscribe();
    this.facilitieSubscription.unsubscribe();
  }
}


 


