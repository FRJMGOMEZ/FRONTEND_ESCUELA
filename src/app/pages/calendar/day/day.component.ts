import { Component, OnInit, ViewChild, ElementRef, EventEmitter, OnDestroy, Renderer2} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarService } from '../../../providers/calendar.service';
import { CalendarModalController } from '../../../modals/calendar-modal/calendar-modal.controller';
import { FacilitiesService } from '../../../providers/facilities.service';
import { EventModalController } from '../../../modals/events-modal/eventsModal.controller';
import { UserServices } from '../../../providers/user.service';
import Swal from "sweetalert2";
import { Subscription, timer } from 'rxjs'
import * as html2canvas from "html2canvas"
import { DemoService } from '../../../providers/demo.service';
import { SpinnerService } from '../../../providers/spinner.service';

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit, OnDestroy {

  @ViewChild('printable') printable: ElementRef;
  @ViewChild("dayPlace", { read: ElementRef }) dayPlace: ElementRef;
  @ViewChild("rowDayPlace", { read: ElementRef }) rowDayPlace: ElementRef;

  inProgress: boolean = true;

  notification = new EventEmitter<any>();

  prevWeek: Date[] = []
  nextWeek: Date[] = []

  eventSubscription: Subscription = null;
  eventsSocket: Subscription = null;
  facilitiesSocket:Subscription=null;

  facilitieFrom: number = 0;
  cardWidth: string;
  position: number = 0;
  heightOfEventsFrame: number;
  heightPerCard:number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public _modalEventController: EventModalController,
    public _userServices:UserServices,
    public _calendarServices: CalendarService,
    public _calendarModalController: CalendarModalController,
    public _facilitieServices: FacilitiesService,
    public _demoServices:DemoService,
    private _spinnerServices:SpinnerService,
    public renderer:Renderer2
  ) {}

  ngOnInit() {

    this.checkWindowSize();

    this.activatedRoute.params.subscribe(async(params)=>{
      let dayId = await params['dayId'];
      let weekId = await params['weekId'];
      if(dayId.length >0 && weekId.length > 0){
        this._facilitieServices.getFacilities(this.facilitieFrom).subscribe(() => {
          if (this._calendarServices.currentDay && this._calendarServices.currentWeek) {
            if (dayId === this._calendarServices.currentDay._id) {
                dayId = undefined;
                weekId=undefined;
                this.init()
                return
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
          }else{
            this._calendarServices.getWeekById(weekId).subscribe(()=>{
              this._calendarServices.getDayById(dayId).subscribe(()=>{
                timer().subscribe(()=>{
                  this.init()
                })
              })
            })
          }
        })
      }
    })
     ////////////////////////////////////////////////////////
    this.facilitiesSocket = this._facilitieServices.facililiteSocket().subscribe(() => {
      this.inProgress = true;
      setTimeout(() => {
        this.resetEventRenderValues()
      })
    })
    ///////////////////////////////////////////////////////
    this.notification.subscribe(res => {
      this.position = res.position + 1 || this.position;
    });
    ///////////////////////////////////////////////////////
    this._calendarModalController.notification.subscribe(()=>{
      this.inProgress = true;
      this._spinnerServices.openSpinner();
    })
    ///////////////////////////////////////////////////////
    this.eventsSocket = this._calendarServices.eventSocket().subscribe();
    ///////////////////////////////////////////////////////
    this.eventSubscription = this._calendarServices.events$.subscribe(() => {
        this.inProgress=true;
        this._spinnerServices.openSpinner();
        this._calendarServices.getDayById(this._calendarServices.currentDay._id).subscribe(()=>{
          this.init()
        })
    })
  }

  async toOtherDay(dayId) {
    this.inProgress = true;
    this._spinnerServices.openSpinner();
    this._calendarServices.currentDay = undefined;
    await this._calendarServices.getDayById(dayId).subscribe()
    this.router.navigate(["./calendar", this._calendarServices.currentWeek._id, dayId]);
  }

  toOtherWeek(date: Date) {
    this.inProgress = true;
    this._spinnerServices.openSpinner();
    this._calendarServices.currentWeek = undefined;
    date = new Date(date);
    this._calendarServices.getWeekByDate(date.getTime()).subscribe((week: any) => {
      if (week === 'no-week') {
        this._calendarServices.postWeek(date).subscribe(() => {
          this._calendarServices.checkWeekDay(new Date(this._calendarServices.currentDay.date).getDay()).then((dayId: string) => {
            this._calendarServices.getDayById(dayId).subscribe(() => {
              this.router.navigate(["./calendar", this._calendarServices.currentWeek._id, dayId]);
            })
          });
        })
      } else {
        this._calendarServices.checkWeekDay(new Date(this._calendarServices.currentDay.date).getDay(), week).then((dayId: string) => {
          this._calendarServices.getDayById(dayId).subscribe(() => {
            this.router.navigate(["./calendar", this._calendarServices.currentWeek._id, dayId]);
          })
        })
      }
    })
  }


  ////////// Init /////////
  init() {
    this._calendarServices.userIn().then(()=>{
    this.resetEventRenderValues();
    this.getWeeksAroundDates()});
  }

  checkWindowSize(){
    if (window.innerHeight > 720) {
      if(window.innerHeight > 1000){
        this.renderer.setStyle(this.rowDayPlace.nativeElement, 'height', '1040px');
        this.heightOfEventsFrame = 1040;
        this.heightPerCard = 80;

      }else{
        this.renderer.setStyle(this.rowDayPlace.nativeElement, 'height', '650px');
        this.heightOfEventsFrame = 650;
        this.heightPerCard = 50;
      }
    }else{
      this.renderer.setStyle(this.rowDayPlace.nativeElement, 'height', '520px');
      this.heightOfEventsFrame = 520;
      this.heightPerCard = 40;
    }

  }

  onResize(event:any){
    this.checkWindowSize();
    this.inProgress = true;
    this._spinnerServices.openSpinner();
    this.init()
  }

 async resetEventRenderValues(){
    await  this._facilitieServices.facilities.forEach((facilitie: any) => {
        if (facilitie.status === false) {
          this._facilitieServices.facilities = this._facilitieServices.facilities.filter((eachFacilitie) => { return eachFacilitie._id != facilitie._id })
        } else {
          let space = this.heightOfEventsFrame;
          facilitie.space = space;
        }
      });
      this.position = await 0;
      this._spinnerServices.closeSpinner();
      timer().subscribe(()=>{
        this.inProgress = false;
      })
      return
  }

  getWeeksAroundDates() {
      let weekDate = new Date(this._calendarServices.currentWeek.date);
      let date1 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() - 7, 6, 0, 0, 0);
      let date2 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() - 1, 6, 0, 0, 0);
      let date3 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() + 7, 6, 0, 0, 0);
      let date4 = new Date(weekDate.getFullYear(), weekDate.getMonth(), weekDate.getDate() + 14, -30, 0, 0, 0);
      this.prevWeek = [date1, date2];
      this.nextWeek = [date3, date4];
  }

  getWidth() {
    return `${Math.round(((this.dayPlace.nativeElement.offsetWidth / 13) * 12) / 5)}px`;
  }
                                    //////// After init ////////
  switchFacilities(number: number = 0) {
    if (this.facilitieFrom + number >= 0) {
      this.inProgress = true;
      this._spinnerServices.openSpinner();
      this._facilitieServices.facilities=[]
      this.facilitieFrom += number;
      this._facilitieServices.getFacilities(this.facilitieFrom).subscribe(() => {
        this.init()
      })
    }
  }

  showEventPermanentInfo(id: string) {
    this._modalEventController.showModal(id);
    this._modalEventController.notification.emit();
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

  snapshotCalendar() {
    html2canvas(this.printable.nativeElement).then(function(canvas) {
     window.open().document.body.appendChild(canvas);
    });
  }

  ngOnDestroy() {
    this._facilitieServices.facilities = []
    this.eventSubscription.unsubscribe();
    this.eventsSocket.unsubscribe();
    this.facilitiesSocket.unsubscribe()
  }
}





