import { Component, OnInit, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarService } from '../../../providers/calendar.service';
import { CalendarModalController } from '../../../modals/calendar-modal/calendar-modal.controller';
import { FacilitiesService } from '../../../providers/facilities.service';
import { Subscription } from 'rxjs';
import { EventModalController } from '../../../modals/events-modal/eventsModal.controller';
import { UserServices } from '../../../providers/user.service';
import { User } from 'src/app/models/user.model';
import Swal from "sweetalert2";

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

  weekId: string;
  dayId: string;

  prevWeek: Date[] = []
  nextWeek: Date[] = []

  currentDate: string;
  facilitieFrom: number = 0;
  cardWidth: string;
  position: number = 0;
  heightOfEventsFrame: number = 720;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _modalEventController: EventModalController,
    private _userServices:UserServices,
    public _calendarServices: CalendarService,
    public _calendarModalController: CalendarModalController,
    public _facilitieServices: FacilitiesService
  ) {

    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {

    ///////// Activated Route //////////
    this.activatedRoute.params.subscribe(params => {
      if(!params['weekId'] && !params['dayId']){
        let today = new Date();
        today = new Date(today.getFullYear(),today.getMonth(),today.getDate(),0,0,0);
        this._calendarServices.getDayByDate(today.getTime()).subscribe((res:any)=>{
          if(res=== 'no-day'){
            this._calendarServices.postWeek(today).subscribe(() => {
              setTimeout(() => {
                this._calendarServices.checkWeekDay().then(dayId => {
                  this.router.navigate(["./day", this._calendarServices.currentWeek._id, dayId]);
                });
              })
            })
          }
        })
      }else{
        this.dayId = params['dayId'];
        this.weekId = params['weekId'];
        if (this._calendarServices.currentWeek && this._calendarServices.currentDay) {
          if (this._calendarServices.currentDay._id != this.dayId && this._calendarServices.currentWeek._id != this.weekId) {
            this._calendarServices.getWeekById(this.weekId).subscribe();
          } else if (this._calendarServices.currentWeek._id === this.weekId && this._calendarServices.currentDay._id != this.dayId) {
            this._calendarServices.getDayById(this.dayId).subscribe();
          }else{
            setTimeout(()=>{
              this.init()
            })
          }
        } else {
          this._calendarServices.getWeekById(this.weekId).subscribe()
        }
      }
   });

    /////// Getting permanent Events ////
    this._calendarServices.getPermanentEvents().subscribe()

    ////// Getting Facilities /////
    this._facilitieServices.getFacilities(this.facilitieFrom).subscribe()

    ///// Subscriptions ///////
    this.weekSubscription = this._calendarServices.weeks$.subscribe((order: string) => {
      if (order === 'getById') {
        this._calendarServices.getDayById(this.dayId).subscribe();
      } else if (order === 'getByDay') {
        this.router.navigate(['./day', this._calendarServices.currentWeek._id, this._calendarServices.currentDay._id])
      } else if (order === 'getByDate') {
        this._calendarServices.checkWeekDay(new Date(this._calendarServices.currentDay.date).getDay()).then(dayId => {
          this.router.navigate(["./day", this._calendarServices.currentWeek._id, dayId]);
        });
      }
    }
    );

    this.daySubscription = this._calendarServices.day$.subscribe((order: string) => {
      if (order === 'getById') {
        this.init();
      } else if (order === 'getByDate') {
        this.inProgress=true;
        setTimeout(()=>{
          let dayOfTheWeek = new Date(this._calendarServices.currentDay.date).getDay();
          this._calendarServices.getWeekByDay(this._calendarServices.currentDay._id, dayOfTheWeek).subscribe()
        })
      }
    });

    this.eventSubscription = this._calendarServices.events$.subscribe(
      () => { 
      this.inProgress = true;
      this._calendarServices.getDayById(this._calendarServices.currentDay._id).subscribe()    
      })
    
    ////// Notification from event component ////
    this.notification.subscribe(res => {
      this.position = res.position + 1 || this.position;
    });
  }
                                                    ////////// Init /////////
  init() {
    /// Reinit the space of each facilitie////
    this.getWeeksAroundDates();
    this._facilitieServices.facilities.forEach((facilitie:any) => {
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
    let weekDate = new Date(this._calendarServices.currentWeek.date);
    let date1= new Date(weekDate.getFullYear(),weekDate.getMonth(),weekDate.getDate()-7,1,0,0,0);
    let date2 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() - 1, 1, 0, 0, 0);
    let date3 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() + 7, 1, 0, 0, 0);
    let date4 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() + 14, -23, 0, 0, 0);
    this.prevWeek = [date1,date2];
    this.nextWeek = [date3,date4];
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
      this._facilitieServices.facilities=[]
      this.facilitieFrom += number;
      this._facilitieServices.getFacilities(this.facilitieFrom).subscribe(() => {
        this.init()
      })
    }
  }

  toOtherDay(dayId) {
    this.inProgress=true;
    this.router.navigate(["./day", this._calendarServices.currentWeek._id, dayId]);
  }

  toOtherWeek(date: Date) {
    this.inProgress=true;
    setTimeout(() => {
      date = new Date(date);
      this._calendarServices.getWeekByDate(date.getTime()).subscribe((res: any) => {
        if (res === 'no-week') {
          this._calendarServices.postWeek(date).subscribe(() => {
            setTimeout(() => {
              this._calendarServices.checkWeekDay(new Date(this._calendarServices.currentDay.date).getDay()).then(dayId => {
                this.router.navigate(["./day", this._calendarServices.currentWeek._id, dayId]);
              });
            })
          })
        }
      })
    });
  }

  deletePermanentEvent(id: string) {
    Swal.fire({
      title: '¿Estás segura/o?',
      text: "El evento se eliminará del sistema y por lo tanto de cualquier día en el que esté presente",
      type: 'warning',
      showCancelButton: true,
      showCloseButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Eliminar'
    }).then((res) => {
      if (res) {
        this._calendarServices.deleteEvent(id, this._calendarServices.currentDay._id).subscribe();
      }
    })
  }
  
  showEventPermanentInfo(id: string) {
    this._modalEventController.showModal(id);
    this._modalEventController.notification.emit();
  }

  ngOnDestroy() {
    this.weekSubscription.unsubscribe();
    this.daySubscription.unsubscribe();
    this.eventSubscription.unsubscribe();
    this._calendarServices.currentDay = undefined;
    this._calendarServices.currentWeek = undefined;
    this._calendarServices.permanentEvents = [];
  }
}


 


