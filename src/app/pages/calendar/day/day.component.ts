import { Component, OnInit, ViewChild, ElementRef, EventEmitter, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarService } from '../../../providers/calendar.service';
import { CalendarModalController } from '../../../modals/calendar-modal/calendar-modal.controller';
import { FacilitiesService } from '../../../providers/facilities.service';
import { EventModalController } from '../../../modals/events-modal/eventsModal.controller';
import { UserServices } from '../../../providers/user.service';
import Swal from "sweetalert2";
import { Subscription } from 'rxjs'
import * as html2canvas from "html2canvas"


@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit, OnDestroy {

  @ViewChild("dayPlace") dayPlace: ElementRef;
  @ViewChild('printable') printable:ElementRef;

  inProgress: boolean = true;

  notification = new EventEmitter<any>();

  prevWeek: Date[] = []
  nextWeek: Date[] = []

  eventSubscription: Subscription = null;
  eventsSocket: Subscription = null;

  facilitieFrom: number = 0;
  cardWidth: string;
  position: number = 0;
  heightOfEventsFrame: number = 720;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _modalEventController: EventModalController,
    public _userServices:UserServices,
    public _calendarServices: CalendarService,
    public _calendarModalController: CalendarModalController,
    public _facilitieServices: FacilitiesService
  ) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params)=>{
      let dayId = params['dayId'];
      let weekId = params['weekId'];
      if(dayId.length >0 && weekId.length > 0){
        this._facilitieServices.getFacilities(this.facilitieFrom).subscribe(() => {
          if (this._calendarServices.currentDay && this._calendarServices.currentWeek) {
            if (dayId === this._calendarServices.currentDay._id) {
              setTimeout(() => {
                dayId = undefined;
                weekId=undefined;
                this.init()
                return
              })
            } else {
              if (weekId === this._calendarServices.currentWeek._id) {
                this._calendarServices.getDayById(dayId).subscribe(() => {
                  dayId = undefined;
                  weekId = undefined;
                  this.init()
                  return
                })
              } else {
                this._calendarServices.getWeekById(weekId).subscribe(() => {
                  this._calendarServices.checkWeekDay(this._calendarServices.currentDay.date.getDay()).then((dayId: string) => {
                    this._calendarServices.getDayById(dayId).subscribe(() => {
                      dayId = undefined;
                      weekId = undefined;
                      this.init()
                      return
                    })
                  })
                })
              }
            }
          } else {
            this._calendarServices.getWeekById(weekId).subscribe(() => {
              this._calendarServices.getDayById(dayId).subscribe(() => {
                dayId = undefined;
                weekId = undefined;
                this.init()
                return
              })
            })
          }
        })
      }
    })

    this.notification.subscribe(res => {
      this.position = res.position + 1 || this.position;
    });

    this._calendarModalController.notification.subscribe(()=>{
      this.inProgress = true;
    })

    this.eventsSocket = this._calendarServices.eventSocket().subscribe()
    
    this.eventSubscription = this._calendarServices.events$.subscribe(
      () => {
        this.inProgress=true;
        this._calendarServices.getDayById(this._calendarServices.currentDay._id).subscribe(()=>{
          this.init()
        })
    })
  }
                                                    
  
  ////////// Init /////////
  init() {
    this._calendarServices.userIn().then(()=>{
      /// Reinit the space of each facilitie////
      this.getWeeksAroundDates();
      this._facilitieServices.facilities.forEach((facilitie: any) => {
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

    })
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
      ((this.dayPlace.nativeElement.offsetWidth / 12) * 11) / 5
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

 async toOtherDay(dayId) {
    this.inProgress=true;
    await this._calendarServices.getDayById(dayId).subscribe()
    this.router.navigate(["./calendar", this._calendarServices.currentWeek._id, dayId]);    
  }

  toOtherWeek(date: Date) {
    this.inProgress=true;
      date = new Date(date);
      this._calendarServices.getWeekByDate(date.getTime()).subscribe((res: any) => {
        if (res === 'no-week') {
          this._calendarServices.postWeek(date).subscribe(() => {
              this._calendarServices.checkWeekDay(new Date(this._calendarServices.currentDay.date).getDay()).then((dayId:string) => {
                  this._calendarServices.getDayById(dayId).subscribe(()=>{
                    this.router.navigate(["./calendar", this._calendarServices.currentWeek._id, dayId]);
                  })
              });
          })
        }else{
          this._calendarServices.checkWeekDay(new Date(this._calendarServices.currentDay.date).getDay()).then((dayId:string)=>{
            this._calendarServices.getDayById(dayId).subscribe(()=>{
              this.router.navigate(["./calendar", this._calendarServices.currentWeek._id, dayId]);
            })
          })
        }
      })
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
        this._calendarServices.deleteEvent(id).subscribe();
      }
    })
  }
  
  showEventPermanentInfo(id: string) {
    this._modalEventController.showModal(id);
    this._modalEventController.notification.emit();
  }

  snapshotCalendar() {
    html2canvas(this.printable.nativeElement).then(function(canvas) {
     window.open().document.body.appendChild(canvas);
    });
  }

  ngOnDestroy() {

    this._facilitieServices.facilities = [] 
    this.eventSubscription.unsubscribe();
    this.eventsSocket.unsubscribe();
  }
}


 


