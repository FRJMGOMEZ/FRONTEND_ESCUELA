import { Component, OnInit} from '@angular/core';
import { EventModalController } from './eventsModal.controller';
import { UserServices } from '../../providers/user.service';
import { User } from 'src/app/models/user.model';
import { CalendarService } from '../../providers/calendar.service';
import { EventModel, EventOrder } from '../../models/event.model';
import * as _ from "underscore";
import { FacilitiesService } from '../../providers/facilities.service';
import { Day, DayOrder } from 'src/app/models/day.model';
import { Project, ProjectOrder } from 'src/app/models/project.model';
import { ProjectServices } from '../../providers/project.service';
import { Subscription } from 'rxjs';
import { FacilitieOrder } from '../../models/facilitie.model';

@Component({
  selector: "app-events-modal",
  templateUrl: "./events-modal.component.html",
  styleUrls: ["./events-modal.component.css"]
})
export class EventsModalComponent implements OnInit {
  
  userOnline: User;
  page: string = "0";
  ready: boolean = false;
  projects:Project[]=[]
  spaceAvailable: number = 12;
  event: EventModel;
  startPosition: number;
  hour: any;
  day: any;

  projectsSubscription:Subscription = null;
  daysSubscription:Subscription = null;
  eventsSubscription: Subscription = null;
  facilitieSubscription:Subscription = null;

  constructor(
    public  _modalController: EventModalController,
    private _userServices: UserServices,
    private _calendarServices: CalendarService,
    private _facilitieServices: FacilitiesService,
    public _projectServices:ProjectServices,
  ) {
    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {

    this.projectsSubscription = this._projectServices.projects$.subscribe((projectOrder:ProjectOrder)=>{
      if(projectOrder.order === 'get'){
        if(this.projects.indexOf(projectOrder.project)<0){
          this.projects.push(projectOrder.project)}
      }
    })
    this.daysSubscription=this._calendarServices.day$.subscribe((dayOrder:DayOrder) => {
      this.day = dayOrder.day;
    });
    
    this._modalController.notification.subscribe(res => {
      if (res) {
     this.facilitieSubscription=this._facilitieServices.facilities$.subscribe((facilitieOrder:FacilitieOrder)=>{
          if(facilitieOrder.order === 'getById'){
            this.event.facilitie = facilitieOrder.facilitie;
            this.page = '1';}})
      this.event = new EventModel("","",0,res.position,this.userOnline._id,null,Number(parseInt(String(res.position))),new Date(this.day.date).getDay(),false,new Date(this.day.date),null,null);
      this._facilitieServices.getFacilitieById(res.facilitieId).subscribe()
      }else{
          this.eventsSubscription = this._calendarServices.events$.subscribe((eventOrder: EventOrder) => {
            if (eventOrder.order === 'getById') {
              this.event = null;
              this.event = eventOrder.event;
              setTimeout(() => {
                this.page = "7"})}});
          this._calendarServices.getEventById(this._modalController.id).subscribe();
          }
    });
  }

  ////// PAGE 3 ///////

   async page3(back: boolean = false) {
    if (back) {
      this.event.position -= this.startPosition;
      this.startPosition = 0;
      this.page = "3";
    } else {
      let hour = this.day[`hour${parseInt(String(this.event.position))}`];
      await this.checkNextHoursSpace(hour);
      await this.checkSpaceInEventHour(hour);
      this.page = "3";
    }
  }

  private checkNextHoursSpace(hour: EventModel[]) {
    return new Promise((resolve, reject) => {
      let hours = [
        this.day.hour11,
        this.day.hour10,
        this.day.hour9,
        this.day.hour8,
        this.day.hour7,
        this.day.hour6,
        this.day.hour5,
        this.day.hour4,
        this.day.hour3,
        this.day.hour2,
        this.day.hour1,
        this.day.hour0
      ];
      let hourIndex = hours.indexOf(hour);
      hours.forEach((hour, index) => {
        if (index < hourIndex) {
          hour.forEach(event => {
            if (event.facilitie === this.event.facilitie._id) {
              this.spaceAvailable = hourIndex - index;
              resolve();
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
    });
  }

  private checkSpaceInEventHour(hour: EventModel[]) {
    return new Promise((resolve, reject) => {
      if (hour.length > 0) {
        let eventsInSamePositionAndSameFacilitie = hour.filter((event: any) => {
          return event.facilitie === this.event.facilitie._id;
        });
        eventsInSamePositionAndSameFacilitie = eventsInSamePositionAndSameFacilitie.filter(
          event => {
            return event._id != this.event._id;
          }
        );
        for (let event of eventsInSamePositionAndSameFacilitie) {
          if (event.position === this.event.position + 0.75) {
            this.spaceAvailable = 0.75;
          }
        }
        for (let event of eventsInSamePositionAndSameFacilitie) {
          if (event.position === this.event.position + 0.5) {
            this.spaceAvailable = 0.5;
          }
        }
        for (let event of eventsInSamePositionAndSameFacilitie) {
          if (event.position === this.event.position + 0.25) {
            this.spaceAvailable = 0.25;
          }
        }
        resolve();
      } else {
        resolve();
      }
    });
  }

   checkInitialStartHour() {
    return Number(this.event.position) - parseInt(String(this.event.position));
  }

  ////// PAGE 4 ///////

   page4(back: boolean = false) {
    if (back) {
      this.spaceAvailable += Number(this.hoursPrevValue);
      this.timeValue = this.spaceAvailable;
      this.minutesPrevValue = 0;
      this.hoursPrevValue = 0;
      this.event.duration = 0;
      this.page = "4";
    } else {
      this.spaceAvailable -= this.startPosition;
      this.event.duration = 0;
      this.event.position +=
        this.startPosition -
        (this.event.position - parseInt(String(this.event.position)));
      this.timeValue = this.spaceAvailable;
      this.page = "4";
    }
  }

  timeValue: number = 0;
  private minutesPrevValue: number = 0;
  private hoursPrevValue: number = 0;
  checkMinutesAvailables(value: string, type: string) {
    this.timeValue += this.minutesPrevValue;
    this.timeValue -= Number(value);
    this.minutesPrevValue = Number(value);
  }
  checkHoursAvailables(value: string) {
    this.event.duration -= this.hoursPrevValue;
    this.spaceAvailable += this.hoursPrevValue;
    this.event.duration += Number(value);
    this.spaceAvailable -= Number(value);
    this.hoursPrevValue = Number(value);
  }

 
 /////// PAGE 5 ////////

  dayWithPermanentEvents: Day[];
  availableDatesFrame: Date[] = [];
  async page5(back?:string) {
    this.event.duration +=this.spaceAvailable + this.event.duration - this.timeValue;
    if(back){
      this.weeksOfDuration = 0;
      this.noLimit = false;
      this.page = '5';
    }else{
    if (this.event.permanent) {
      this._calendarServices.checkPermanentEvents(this.event).subscribe(day => {
        if (day) {
          let ourDay = new Date(this.day.date);
          let followingDay = new Date(day.date);
          this.dayWithPermanentEvents = day;
          let milisecondsBetween = followingDay.getTime()- ourDay.getTime(); 
          let weeks= milisecondsBetween / 604800000;
          let referenceDay= new Date(ourDay);
          for(let i=0; i < weeks;i++){
            referenceDay.setTime(referenceDay.getTime() + 604800000)
            this.availableDatesFrame.push(referenceDay)
          }
          setTimeout(()=>{
            this.page = '5' 
          })       
        } else {
          this.page = '5'
        }
      });
    }else{
      this.page6()
    }
  }
  }
  public updateEndUpDate(){
    let ourDay = new Date(this.day.date);
    let endDate = new Date(ourDay.getTime() + this.weeksOfDuration * 604800000);
    return new Date(endDate)    
  }
  /////////// PAGE 6 //////////////

   page6() {
      if(this.event.permanent){
        if (this.noLimit === false) {
          if(this.weeksOfDuration === 0){
            this.event.permanent = false;
            this.page = '6';
          }else{
            let dateFrom = new Date(this.day.date);
            let limitDate = dateFrom.getTime() + this.weeksOfDuration * 604800000;
            this.event.endDate = new Date(limitDate - 604800000);
          }
      }
    }
    this.page = "6";
  }
  ////////////// POST AND PUT /////////////

   weeksOfDuration: number = 0;
   noLimit:boolean = false;

   postEvent() {     
    if(this.event.endDate){
      let limitDate = this.event.endDate.getTime() + 604800000;
        this._calendarServices.postEvent(this.event,this.day._id,limitDate).subscribe()
    }else{
      this._calendarServices.postEvent(this.event,this.day._id).subscribe()
    }   
  }
   putEvent() {
    this._calendarServices
      .putEvent(this.event._id, this.event)
      .subscribe(() => {
        this.ready = false;
      });
  }

  //////////// REINIT ////////////  

   fixEventPositionBack() {  
    let currentEvent = new EventModel(
      this.event.name,
      this.event.description,
      this.event.duration,
      this.event.hour,
      this.userOnline._id,
      this.event.facilitie,
      Number(parseInt(String(this.event.position))),
      this.event.day,
      this.event.permanent,
      this.event.startDate,
      this.event.endDate,
      this.event.project,
      this.event._id
    );

    let hours = [
      this.day.hour0,
      this.day.hour1,
      this.day.hour2,
      this.day.hour3,
      this.day.hour4,
      this.day.hour5,
      this.day.hour6,
      this.day.hour7,
      this.day.hour8,
      this.day.hour9,
      this.day.hour10,
      this.day.hour11
    ];
    let hourIndex = currentEvent.hour;
    let prevEventsInSameFacilitie = [];
    hours.forEach((day, index) => {
      if (index < hourIndex) {
        day.forEach(event => {
          if (event.facilitie === currentEvent.facilitie._id) {
            prevEventsInSameFacilitie.push(event);
          }
        });
      }
    });
    if (prevEventsInSameFacilitie.length > 0) {
      prevEventsInSameFacilitie.reverse();
      prevEventsInSameFacilitie = prevEventsInSameFacilitie.filter((event)=>{return event._id != this.event._id})
      prevEventsInSameFacilitie.forEach(async event => {
        let res = await this.fixEventPosition(event, 1);
        if (res === false) {
          let res = await this.fixEventPosition(event, 2);
          if (res === false) {
            let res = await this.fixEventPosition(event, 3);
            if (res === false) {
              let res = await this.fixEventPosition(event, 4);
              if (res === false) {
                let res = await this.fixEventPosition(event, 5);
                if (res === false) {
                  let res = await this.fixEventPosition(event, 6);
                  if (res === false) {
                    let res = await this.fixEventPosition(event, 7);
                    if (res === false) {
                      let res = await this.fixEventPosition(event, 8);
                      if (res === false) {
                        let res = await this.fixEventPosition(event, 9);
                        if (res === false) {
                          let res = await this.fixEventPosition(event, 10);
                          if (res === false) {
                            let res = await this.fixEventPosition(event, 11);
                            if (res === false) {
                              return;
                            } else {
                              currentEvent.position = event.position + event.duration;
                            }
                          } else {
                            currentEvent.position = event.position + event.duration;
                          }
                        } else {
                          currentEvent.position = event.position + event.duration;
                        }
                      } else {
                        currentEvent.position = event.position + event.duration;
                      }
                    } else {
                      currentEvent.position = event.position + event.duration;
                    }
                  } else {
                    currentEvent.position = event.position + event.duration;
                  }
                } else {
                  currentEvent.position = event.position + event.duration;
                }
              } else {
                currentEvent.position = event.position + event.duration;
              }
            } else {
              currentEvent.position = event.position + event.duration;
            }
          } else {
            currentEvent.position = event.position + event.duration;
          }
        } else {
        }
      });
    }

    let hour = this.day[`hour${parseInt(String(currentEvent.position))}`];
    hour = hour.filter(event => {
      return event.facilitie === currentEvent.facilitie._id && event._id != this.event._id

    })
    hour = _.sortBy(hour, (event: EventModel) => {
      return event.position;
    });
    hour.forEach(event => {
      if (event.position < this.event.position) {
        currentEvent.position = event.position + event.duration;
      }
    });
    this.event = currentEvent;
    this.page = "1";
  }

  private fixEventPosition(event, timeBack: number) {
    return new Promise((resolve, reject) => {
      if (event.hour === this.event.hour - timeBack) {
        if (event.duration + 1 > timeBack) {
          resolve(true);
        }
      }
      resolve(false);
    });
  }
  //////////// CLOSE ///////////
   hideModal() {
    this._modalController.hideModal();
    this.ready = false;
    this.spaceAvailable = 12;
    this.page = "0";
    this.startPosition = null;
    this.event = null;
    this.hour = null;
    this.timeValue = 0;
    this.minutesPrevValue = 0;
    this.hoursPrevValue = 0;
    this.dayWithPermanentEvents=null;
    this.availableDatesFrame = []
    this.weeksOfDuration = 0;
    this.noLimit= false;
    this.projects=[];
    if(this.eventsSubscription != null){
      this.eventsSubscription.unsubscribe()
    }
    if(this.facilitieSubscription != null){
      this.facilitieSubscription.unsubscribe()
    }
  }
}

