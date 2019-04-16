import { Component, OnInit} from '@angular/core';
import { EventModalController } from './eventsModal.controller';
import { UserServices } from '../../providers/user.service';
import { User } from 'src/app/models/user.model';
import { CalendarService } from '../../providers/calendar.service';
import { EventModel, EventOrder } from '../../models/event.model';
import * as _ from "underscore";
import { Day} from 'src/app/models/day.model';
import { ProjectServices } from '../../providers/project.service';
import { Subscription } from 'rxjs';
import { FacilitiesService } from '../../providers/facilities.service';
import { Facilitie } from 'src/app/models/facilitie.model';


@Component({
  selector: "app-events-modal",
  templateUrl: "./events-modal.component.html",
  styleUrls: ["./events-modal.component.css"]
})
export class EventsModalComponent implements OnInit {

  editMode:boolean=false;
  createMode:boolean=false;
  modifyMode:boolean=false;
  
  userOnline: User;
  page: string = "0";
  spaceAvailable: number 
  event: EventModel;
  facilitie:Facilitie;

  eventsSubscription: Subscription = null;

  constructor(
    public  _modalController: EventModalController,
    public _userServices: UserServices,
    public _calendarServices: CalendarService,
    public _projectServices:ProjectServices,
    private _facilitieServices:FacilitiesService
  ) {
    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {

    this._modalController.notification.subscribe(res => {
      if (this._projectServices.projects.length === 0) {
        this._projectServices.getProjects().subscribe()
      }
      if (res) {    
      this.event = new EventModel("","",0,res.position,this.userOnline._id,res.facilitieId,Number(parseInt(String(res.position))),new Date(this._calendarServices.currentDay.date).getDay(),false,new Date(this._calendarServices.currentDay.date),null,null);
      this.facilitie = this._facilitieServices.facilities.filter((facilite) => { return facilite._id === this.event.facilitie })[0];
      this.page = '1'; 
      this.createMode = true;
      this.editMode=false;
      this.modifyMode=false;
        this.eventsSubscription = this._calendarServices.events$.subscribe((eventOrder: EventOrder) => {
          if(eventOrder){
            if (eventOrder.order === 'post') {
              this.resetValues().then(async() => {
                this.editMode = true;
                this.createMode=false;
                this.modifyMode=false;
                this.event = await eventOrder.event;
                  this.page = '7'
              })
            }
          }
        })
      }else{
        this._calendarServices.getEventById(this._modalController.id).subscribe(async(event: EventModel) => {
          this.editMode = true;
          this.createMode=false;
          this.modifyMode=false;
          this.event = await event;
          this.facilitie = await this._facilitieServices.facilities.filter((facilite) => { return facilite._id === event.facilitie })[0];
            this.page = "7";
        });
        }
      this.eventsSubscription = this._calendarServices.events$.subscribe((eventOrder: EventOrder) => {
        if (eventOrder.order === 'put') {
          this.resetValues().then(async () => {
            this.editMode = true;
            this.createMode=false;
            this.modifyMode=false;
            this.event = await eventOrder.event;
            this.page = "7";
          })
        }
      });
    });
  }

  ////// PAGE 3 ///////
  startPosition: number;
  prevPosition: number;
  prevSpaceAvailable: number;
   async page3(back?:string) {
      if(back){
        this.event.position = this.prevPosition;
        this.spaceAvailable = this.prevSpaceAvailable;
        this.minutesPrevValue = 0;
        this.hoursPrevValue = 0;
      }
      this.spaceAvailable = 12;
      this.spaceAvailable = this.spaceAvailable - this.event.position;
      let hour = this._calendarServices.currentDay[`hour${parseInt(String(this.event.position))}`];
      await this.checkOtherHoursEventsSpace(hour)
      await this.checkSpaceInEventHour(hour);
      
      this.page = "3";    
  }

  private checkOtherHoursEventsSpace(hour: EventModel[]) {
    return new Promise((resolve) => {
      let hours = [
        this._calendarServices.currentDay.hour11,
        this._calendarServices.currentDay.hour10,
        this._calendarServices.currentDay.hour9,
        this._calendarServices.currentDay.hour8,
        this._calendarServices.currentDay.hour7,
        this._calendarServices.currentDay.hour6,
        this._calendarServices.currentDay.hour5,
        this._calendarServices.currentDay.hour4,
        this._calendarServices.currentDay.hour3,
        this._calendarServices.currentDay.hour2,
        this._calendarServices.currentDay.hour1,
        this._calendarServices.currentDay.hour0
      ];
      let hourIndex = hours.indexOf(hour);
      hours.forEach((hour, index) => {
        if (index < hourIndex) {
          if(hour.length > 0){
            _.sortBy(hour,(event)=>{
              return event.position
            })
            hour.reverse()
            hour.forEach(event => {
              if (event.facilitie === this.event.facilitie) {
                this.spaceAvailable = hourIndex - (hourIndex-event.position) - this.event.position;
              }
            });
          }
        }
      });
      resolve(); 
    });
  }

  private checkSpaceInEventHour(hour: EventModel[]) {
    return new Promise((resolve) => {
      if (hour.length > 0) {
        let eventsInSamePositionAndSameFacilitie = hour.filter((event: any) => {
          return (
            event.facilitie === this.event.facilitie &&
            event._id != this.event._id
          );
        });
        if(eventsInSamePositionAndSameFacilitie.length > 0){
          for (let event of eventsInSamePositionAndSameFacilitie) {
            if (event.position === this.event.position + 0.75) {
              this.spaceAvailable = 0.75;
            }
            if (event.position === this.event.position + 0.5) {
              this.spaceAvailable = 0.5;
            }
            if (event.position === this.event.position + 0.25) {
              this.spaceAvailable = 0.25;
            }
          }
          resolve()
        }else{
          resolve()
        }
      } else {
        resolve();
      }
    });
  }
   checkInitialStartHour() {
    return Number(this.event.position) - parseInt(String(this.event.position));
  }

  ////// PAGE 4 ///////
   page4() {
     this.prevSpaceAvailable = this.spaceAvailable;
     this.prevPosition = this.event.position;
     this.spaceAvailable -=this.startPosition;
     this.event.duration = 0;
     this.event.position += this.startPosition - (this.event.position - parseInt(String(this.event.position)));
     this.timeValue1 = this.spaceAvailable;
     this.timeValue2 = this.spaceAvailable;
     this.page = "4";
  }

  timeValue1: number = 0;
  timeValue2: number = 0;
  private minutesPrevValue: number = 0;
  private hoursPrevValue: number = 0;
  checkHoursAvailables(value: string) {
    this.timeValue1 += this.hoursPrevValue;
    this.timeValue1 -= Number(value);
    this.hoursPrevValue = Number(value);
  }
  checkMinutesAvailables(value: string) {
    this.timeValue2 += this.minutesPrevValue;
    this.timeValue2 -= Number(value);
    this.minutesPrevValue = Number(value);
  }


 /////// PAGE 5 ////////
  dayWithPermanentEvents: Day[];
  availableDatesFrame: Date[] = [];
  weeksOfDuration: number = 0;
  noLimit: boolean = false;

  async page5(back?:string) {
    this.event.duration = (this.spaceAvailable - this.timeValue1) + (this.spaceAvailable -this.timeValue2);
    if(back){
      if (this.event.permanent) {
        this.weeksOfDuration = 0;
        this.noLimit = false;
        this.page = '5';
      }
      else {
        this.page4()
      }
    }else{
      if (this.event.permanent) {
        this._calendarServices.checkPermanentEvents(this.event).subscribe((day) => {
          if (day) {
            let ourDay = new Date(this.event.startDate);
            let followingDay = new Date(day.date);
            this.dayWithPermanentEvents = day;
            let milisecondsBetween = followingDay.getTime() - ourDay.getTime();
            let weeks = milisecondsBetween / 604800000;
            let referenceDay = new Date(ourDay);
           for (let i = 0; i < weeks; i++)  {
              referenceDay.setTime(referenceDay.getTime())
              this.availableDatesFrame.push(referenceDay)
            }
            setTimeout(() => {
              this.page = '5'
            })
          } else {
            this.page = '5'
          }
        });
      } else {
        this.page6()
      }
    }
  }

  public updateEndUpDate(){
    let ourDay = new Date(this.event.startDate);
    let endDate = new Date(ourDay.getTime() + (this.weeksOfDuration -1) * 604800000);
    return new Date(endDate)    
  }

  /////////// PAGE 6 //////////////
   page6() {
      if(this.event.permanent){
        if (this.noLimit === false) {
          if(this.weeksOfDuration === 1){
            this.event.permanent = false;
            this.page = '6';
          }else{
            let dateFrom = new Date(this.event.startDate);
            let limitDate = dateFrom.getTime() + (this.weeksOfDuration-1) * 604800000;
            if(dateFrom === new Date(limitDate)){
             this.event.endDate = null;
             this.event.permanent = false;
            }else{
              this.event.endDate = new Date(limitDate);
            }
          }
      }else{
          this.event.endDate = null;
      }
    }else{
      this.event.endDate = null;
    }
    this.page = "6";
  }

  //////////////////// PAGE 7 /////////////
  page7(){
    if(this.editMode){
      this.editMode=false;
      this.modifyMode=true;
    }
    this.page = '7';
  }

  dateFixer(date: Date) {
    date = new Date(date);
    if (new Date(date).getTime() === 8640000000000000) {
      return 'de forma indefinida'
    } else {
      return `hasta el día ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
  }
  ////////////// POST AND PUT /////////////
   postEvent() {
    if (this.event.endDate) {
      this._calendarServices.postEvent(this.event, this._calendarServices.currentDay._id, this.event.endDate.getTime()).subscribe()
    } else {
        this._calendarServices.postEvent(this.event, this._calendarServices.currentDay._id).subscribe()        
      }  
  }

   putEvent() {
    this._calendarServices
        .putEvent(this.event._id, this.event)
        .subscribe();
  }

  //////////// REINIT ////////////  

   fixEventBack() {  
    if(this.event._id){
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
        this._calendarServices.currentDay.hour0,
        this._calendarServices.currentDay.hour1,
        this._calendarServices.currentDay.hour2,
        this._calendarServices.currentDay.hour3,
        this._calendarServices.currentDay.hour4,
        this._calendarServices.currentDay.hour5,
        this._calendarServices.currentDay.hour6,
        this._calendarServices.currentDay.hour7,
        this._calendarServices.currentDay.hour8,
        this._calendarServices.currentDay.hour9,
        this._calendarServices.currentDay.hour10,
        this._calendarServices.currentDay.hour11
      ];
      let hourIndex = currentEvent.hour;
      let prevEventsInSameFacilitie = [];
      hours.forEach((day, index) => {
        if (index < hourIndex) {
          day.forEach(event => {
            if (event.facilitie === currentEvent.facilitie && event._id != currentEvent._id) {
              prevEventsInSameFacilitie.push(event);
            }
          });
        }
      });
      if (prevEventsInSameFacilitie.length > 0) {
        prevEventsInSameFacilitie.reverse();
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

      let hour = this._calendarServices.currentDay[`hour${parseInt(String(currentEvent.position))}`];
      hour = hour.filter(event => {
        return event.facilitie === currentEvent.facilitie && event._id != this.event._id
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
  }

  private fixEventPosition(event, timeBack: number) {
    return new Promise((resolve) => {
      if (event.hour === this.event.hour - timeBack) {
        if (event.duration + 1 > timeBack) {
          resolve(true);
        }
      }
      resolve(false);
    });
  }

  resetValues(){
   return new Promise((resolve)=>{
      this.page = "0";
      this.event = null;

      this.editMode = false;
      this.createMode = false;
      this.modifyMode = false;

      this.spaceAvailable = 12;
      this.startPosition = null;

      this.timeValue1=0;
      this.timeValue2=0;
      this.minutesPrevValue = 0;
      this.hoursPrevValue = 0;

      this.dayWithPermanentEvents = null;
      this.availableDatesFrame = []
      this.weeksOfDuration = 0;
      this.noLimit = false;

      resolve()
    })
  }

  //////////// CLOSE ///////////
   hideModal() {
    this.resetValues().then(()=>{
      this._modalController.hideModal();
        this.eventsSubscription.unsubscribe()
        this.facilitie = undefined;
    })
  }
}

