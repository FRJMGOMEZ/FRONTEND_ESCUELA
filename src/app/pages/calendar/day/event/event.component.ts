import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { EventModalController } from '../../../../modals/events-modal/eventsModal.controller';
import { DayComponent } from '../day.component';
import { CalendarService } from '../../../../providers/calendar.service';
import { EventModel } from '../../../../models/event.model';
import { SwalService } from '../../../../providers/swal.service';

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"],
})
export class EventComponent implements OnInit,AfterViewInit, OnDestroy{

  @Input() facilitie:any;
  @Input() position: number = 0
  @Input() hour:any
  
  ourEvents: any = {
    "0": undefined,
    "0.25": undefined,
    "0.5": undefined,
    "0.75": undefined
  };

  @ViewChild("eventCard") eventCard: ElementRef;
  child = this.renderer.createElement("a");
  newDiv = this.renderer.createElement('div')
  newDiv1 = this.renderer.createElement('div')
  newDiv2 = this.renderer.createElement('div')
  newDiv3 = this.renderer.createElement('div')

  constructor(
    private renderer: Renderer2,
    private _modalEventController: EventModalController,
    private dayComponent:DayComponent,
    private _calendarServices:CalendarService,
    private _swalServices:SwalService
  ) {
  }
  ngOnInit() {
    const plus = document.createTextNode("+");
    this.child.appendChild(plus);
    this.child.setAttribute("id", "#child");
    this.renderer.setStyle(this.child, "cursor", "pointer");
  }

  ngAfterViewInit(): void {
    this.render().then(() => {
      this.dayComponent.notification.emit({ position: this.position });
    });
  }
  
  async render() {
   
    if(this.hour){

    let spaceWithoutEvents = 720 - (this.position) * 60; 

    for (let event of this.hour) {
       let facilitieId = event.facilitie._id || event.facilitie || null;
      if (facilitieId && facilitieId === this.facilitie._id) {
        if (event.position === this.position) {
          this.ourEvents["0"] = event;
        }
        if (event.position === this.position + 0.25) {
          this.ourEvents["0.25"] = event;
        }
        if (event.position === this.position + 0.5) {
          this.ourEvents["0.5"] = event;         
        }
        if (event.position === this.position + 0.75) {
          this.ourEvents["0.75"] = event;
        }
      }
    }

    if (
      this.ourEvents["0"] === undefined &&
      this.ourEvents["0.25"] === undefined&&
      this.ourEvents["0.5"] === undefined&&
      this.ourEvents["0.75"] === undefined 
    ) {

      if (Number(this.facilitie.space) === spaceWithoutEvents) {        
        this.renderer.appendChild(this.eventCard.nativeElement, this.child);
        this.renderer.listen(this.eventCard.nativeElement, "click", () => {
          this.createEvent(this.position);
        });
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "height",
          `${60}px`
        );
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "background-color",
          "#F5F1E3"
        );
        this.facilitie.space -= 60;
        return
      } else if ((Number(this.facilitie.space) != spaceWithoutEvents)) {
      
          if (spaceWithoutEvents - this.facilitie.space >= 60) {
            this.renderer.setStyle(this.eventCard.nativeElement, "height", "0");
            this.renderer.setStyle(this.eventCard.nativeElement, "width", "0"); return    
          } else {
          
            this.renderer.setStyle(this.eventCard.nativeElement, "height", `${60 - (spaceWithoutEvents - this.facilitie.space)}px`);
            this.position = this.position + (1 - ((this.facilitie.space + 60 - spaceWithoutEvents) / 60));
            this.facilitie.space -= 60 - (spaceWithoutEvents-this.facilitie.space)            
            this.renderer.appendChild(this.eventCard.nativeElement, this.child);
            this.renderer.listen(this.eventCard.nativeElement, "click", () => {
              this.createEvent(this.position);
            });
            this.renderer.setStyle(
              this.eventCard.nativeElement,
              "background-color",
              "#F5F1E3"
            );
            return
          }               
      } 
    } else {
             await this.setEvent(0),
             await this.setEvent(0.25)
             await this.setEvent(0.5)
             await this.setEvent(0.75)

             return
           }}
  }

 async setEvent(eventPosition:number){
    if (this.ourEvents[eventPosition] != undefined) {
      await this.placeEvent(eventPosition);
      await this.fixHeight(60 * this.ourEvents[eventPosition].duration)
  }else{
      let res = await this.checkSpace(eventPosition);
      if (res) {
        await this.fixHeight(res["height"]);
        await this.setEmptySpace(res["height"], res['position']);
        return
    }
    else{return}
  }
}
  
 placeEvent(position:number) {

    return new Promise((resolve,reject)=>{

      let card;
      switch (position) {
        case 0: card = this.newDiv;
          break;
        case 0.25: card = this.newDiv1;
          break;
        case 0.5: card = this.newDiv2;
          break;
        case 0.75: card = this.newDiv3;
        break;
      } 

      card = this.renderer.createElement('div')
      this.renderer.addClass(card,'card');
      let cardBody = this.renderer.createElement('div');
      this.renderer.addClass(cardBody,'card-body');
      this.renderer.appendChild(card,cardBody);

      if(this.ourEvents[String(position)].permanent === true){
        this.renderer.setStyle(cardBody, "background-color", "red");
      }else{
        this.renderer.setStyle(cardBody, "background-color", "blue");
      }
      this.renderer.addClass(cardBody,'d-flex')
      this.renderer.addClass(cardBody, 'justify-content-around')

      const child1 = document.createElement(`a`);
      const name1 = document.createTextNode(`${this.ourEvents[String(position)].name}`);
      child1.append(name1);
      this.renderer.listen(child1, "click", () => {
        this.showEventInfo(this.ourEvents[String(position)]._id);
      });
      this.renderer.appendChild(cardBody, child1);

      const child2 = document.createElement(`a`);
      const icon = document.createElement('icon');
      this.renderer.addClass(icon,'fas');
      this.renderer.addClass(icon, 'fa-times');
      this.renderer.appendChild(child2,icon);
      this.renderer.setStyle(icon,'margin-right',10)
   
      this.renderer.listen(child2, "click", () => {
        this._swalServices.confirmDelete().then((res)=>{
          if(res){
            this.deleteEvent(this.ourEvents[String(position)]);
          }
        })
      });
      this.renderer.appendChild(cardBody, child2);
      this.renderer.setStyle(
        cardBody,
        "height",
        `${60 * this.ourEvents[String(position)].duration}px`
      );

      let parent = this.renderer.parentNode(this.eventCard.nativeElement);
      let parent2 = this.renderer.parentNode(parent);
     
      switch (position) {
        case 0:
          this.renderer.appendChild(parent2, card)
          break;
        case 0.25:
          this.renderer.appendChild(parent2, card)
          break;
        case 0.5:
          this.renderer.appendChild(parent2, card)
          break;
        case 0.75:
          this.renderer.appendChild(parent2, card)
          break;
      }
      resolve();
    })
   }

fixHeight(height: number) {
    return new Promise((resolve, reject) => {
      this.facilitie.space -= height;
      resolve()
    })
  } 

 checkSpace(reference?:number){
  return new Promise((resolve,reject)=>{
  
     if (reference + 0.25 < 1 && this.ourEvents[String(reference + 0.25)] === undefined) {
       if (reference + 0.5 < 1 && this.ourEvents[String(reference + 0.5)] === undefined) {
         if (reference + 0.75 < 1 && this.ourEvents[String(reference + 0.75)] === undefined) {
           resolve()
         } else { 
           if ((60 * (reference + 1) === (60 * (12 - this.position + 1) - this.facilitie.space))){
             resolve({ height: 45, position:reference })
           }else{resolve()}
        }
       } else {
         if ((60 * (reference + 1) === (60 * (12 - this.position + 1) - this.facilitie.space))){
           resolve({ height: 30, position: reference })
         }else{resolve()}
         }
     } else {
       if ((60 * (reference + 1) === (60 * (12 - this.position + 1) - this.facilitie.space))){
         resolve({ height: 15, position: reference })
       }else{resolve()} }
        
  }) }

  setEmptySpace(height?:number,position?:number){
    return new Promise((resolve,reject)=>{
      let division;
      switch (position) {
        case 0: division = this.newDiv;
          break;
        case 0.25: division = this.newDiv1;
          break;
        case 0.5: division = this.newDiv2;
          break;
        case 0.75: division = this.newDiv3;
          break;
      }
      this.renderer.addClass(division, 'card')
      let cardBody = this.renderer.createElement('div');
      this.renderer.addClass(cardBody, 'card-body');
      this.renderer.appendChild(division, cardBody)
      this.renderer.setStyle(cardBody, 'height', `${height}px`)
      this.renderer.setStyle(cardBody, "background-color", "#F5F1E3");
      const child = document.createElement(`a`);
      const name = document.createTextNode(`+`);
      child.append(name);
      this.renderer.appendChild(cardBody, child);
      this.renderer.listen(cardBody, "click", () => {
        let positionSum = this.position+position;
        this.createEvent(positionSum);
      });

      let parent = this.renderer.parentNode(this.eventCard.nativeElement);
      let parent2 = this.renderer.parentNode(parent);

      if (position === 0) { this.renderer.appendChild(parent2, division);resolve() }
      if (position === 0.25) { this.renderer.appendChild(parent2, division);resolve() }
      if (position === 0.5) { this.renderer.appendChild(parent2, division);resolve() }
      if (position === 0.75) { this.renderer.appendChild(parent2, division);resolve() }
    })
  }
            
  createEvent(position:number) {
    this._modalEventController.notification.emit({position, facilitieId:this.facilitie._id })
    this._modalEventController.showModal()
  }

  showEventInfo(id:string){ 
    this._modalEventController.showModal(id) 
    this._modalEventController.notification.emit()
  }

  deleteEvent(event:EventModel){
    if(event.permanent){
      this._calendarServices.pullEvent(this.dayComponent.currentDay._id,event._id).subscribe()
    }else{
      this._calendarServices.deleteEvent(event._id, this.dayComponent.currentDay._id).subscribe()
    }
  }

  ngOnDestroy(): void {
    
    console.log('DESTROYED')
    
  }
}


