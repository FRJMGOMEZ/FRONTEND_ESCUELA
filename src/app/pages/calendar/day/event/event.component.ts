import { Component,Input, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { EventModalController } from '../../../../modals/events-modal/eventsModal.controller';
import { DayComponent } from '../day.component';
import { CalendarService } from '../../../../providers/calendar.service';
import { SwalService } from '../../../../providers/swal.service';
import { UserServices } from '../../../../providers/user.service';

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"],
})
export class EventComponent implements AfterViewInit{

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
  newDiv = this.renderer.createElement('div')
  newDiv1 = this.renderer.createElement('div')
  newDiv2 = this.renderer.createElement('div')
  newDiv3 = this.renderer.createElement('div')

  constructor(
    private renderer: Renderer2,
    private _modalEventController: EventModalController,
    private dayComponent:DayComponent,
    private _calendarServices:CalendarService,
    private _swalServices:SwalService,
    private _userServices:UserServices
  ) {
  }

  ngAfterViewInit(): void {
    this.render().then(() => {
      this.dayComponent.notification.emit({ position: this.position });
    });
  }
  
  async render() {
    if(this.hour){
    let spaceWithoutEvents = 520 - ((this.position) * 40); 
    for (let event of this.hour) {
      console.log(event);
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
      let child = this.renderer.createElement("strong");
      const plus = document.createTextNode("add");
      child.appendChild(plus);
      child.setAttribute("id", "#child");
      this.renderer.setStyle(child, 'font-size', '10px');
      this.renderer.setStyle(child, "color", "#f47742");
      this.renderer.setStyle(child, "cursor", "pointer");

      if (Number(this.facilitie.space) === spaceWithoutEvents) {
        if (this._userServices.checkRole()) {
        this.renderer.appendChild(this.eventCard.nativeElement,child);
        this.renderer.listen(this.eventCard.nativeElement, "click", () => {
          this._modalEventController.hideModal()
          this.createEvent(this.position);
        });}
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "height",
          `${40}px`
        );
        this.renderer.setStyle(this.eventCard.nativeElement,'width',this.dayComponent.cardWidth)
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "background-color",
          "#F5F1E3"
        );
        this.facilitie.space -= 40;
        return
      } else if ((Number(this.facilitie.space) != spaceWithoutEvents)) {
          if (spaceWithoutEvents - this.facilitie.space >= 40) {
            this.renderer.setStyle(this.eventCard.nativeElement, "height", "0");
            this.renderer.setStyle(this.eventCard.nativeElement, "width", "0"); return    
          } else {
            this.renderer.setStyle(this.eventCard.nativeElement, "height", `${40 - (spaceWithoutEvents - this.facilitie.space)}px`);
            this.renderer.setStyle(this.eventCard.nativeElement,'width',this.dayComponent.cardWidth)
            this.position = this.position + (1 - ((this.facilitie.space + 40 - spaceWithoutEvents) / 40));
            this.facilitie.space -= 40 - (spaceWithoutEvents-this.facilitie.space) 
            if(this._userServices.checkRole()){
              this.renderer.appendChild(this.eventCard.nativeElement, child);
              this.renderer.listen(this.eventCard.nativeElement, "click", () => {
                this._modalEventController.hideModal()
                this.createEvent(this.position);
              });
            }           
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
      await this.fixHeight(40 * this.ourEvents[eventPosition].duration)
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
      this.renderer.setStyle(card,'width',this.dayComponent.cardWidth)
      this.renderer.setStyle(
        cardBody,
        "height",
        `${40 * this.ourEvents[String(position)].duration}px`
      );
      if(this.ourEvents[String(position)].permanent === true){
        if(this.ourEvents[String(position)].endDate === null){
          this.renderer.setStyle(cardBody, "background-color", "#f45042");
        }else{
          this.renderer.setStyle(cardBody, "background-color", "#38a548");
        }
      }else{
        this.renderer.setStyle(cardBody, "background-color", "#42b0f4");
      }
      const div = document.createElement('div')
      this.renderer.addClass(div, 'd-flex')
      this.renderer.addClass(div, 'justify-content-around')
      this.renderer.setStyle(div, 'height', `${40 * this.ourEvents[String(position)].duration}px`)
      this.renderer.appendChild(cardBody,div)


      const div2 = document.createElement('div')
      this.renderer.addClass(div2,'d-flex')
      this.renderer.addClass(div2, 'flex-row')
      this.renderer.addClass(div2, 'justify-content-start')
      const child1 = document.createElement(`strong`);
      this.renderer.setStyle(child1, "cursor", "pointer");
      this.renderer.setStyle(child1, 'font-size', '15px');
      this.renderer.setStyle(child1, 'height', `${40 * this.ourEvents[String(position)].duration}px`)
      const name1 = document.createTextNode(`${this.ourEvents[String(position)].name}`);
      child1.append(name1);
      this.renderer.listen(child1, "click", () => {
        this._modalEventController.hideModal()
        this.showEventInfo(this.ourEvents[String(position)]._id);
      });
      this.renderer.appendChild(div2, child1);
      this.renderer.appendChild(div, div2)

      if (this._userServices.checkRole()) {

      const div3 = document.createElement('div')  
      this.renderer.addClass(div3, 'd-flex')
      this.renderer.addClass(div3, 'flex-row')
      this.renderer.addClass(div3, 'justify-content-start')
      const child2 = document.createElement('i');
      this.renderer.setStyle(child2, "cursor", "pointer");
      this.renderer.setStyle(child2, 'font-size', '15px');
      this.renderer.addClass(child2,'fas');
      this.renderer.addClass(child2, 'fa-times');
      this.renderer.listen(child2, "click", () => {
          this._swalServices.confirmDelete().then((res) => {
            this._modalEventController.hideModal()
              if (res) {
                if (this.ourEvents[String(position)].permanent) {
                  this._calendarServices.pullEvent(this._calendarServices.currentDay._id, this.ourEvents[String(position)]._id).subscribe()
                } else {
                  this._calendarServices.deleteEvent(this.ourEvents[String(position)]._id).subscribe();
                }
              }
          })   
      });
      this.renderer.appendChild(div3, child2)
    this.renderer.appendChild(div,div3)
    }
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
       console.log('ok1')
       if (reference + 0.5 < 1 && this.ourEvents[String(reference + 0.5)] === undefined) {
         console.log('ok2')
         if (reference + 0.75 < 1 && this.ourEvents[String(reference + 0.75)] === undefined) {
           console.log('not Referenced')
           resolve()
         } else { 
           if ((40 * (reference + 1) === (40 * (13 - this.position + 1) - this.facilitie.space))){
             resolve({ height: 30, position:reference })
           }else{resolve()}
        }
       } else {
         console.log('breakPoint')
         if ((40 * (reference + 1) === (40 * (13 - this.position + 1) - this.facilitie.space))){
           resolve({ height: 20, position: reference })
         }else{
          console.log('breakPoint2') 
          resolve()}
         }
     } else {
       if ((40 * (reference + 1) === (40 * (13 - this.position + 1) - this.facilitie.space))){
         resolve({ height: 10, position: reference })
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
      this.renderer.setStyle(cardBody,'width',this.dayComponent.cardWidth)
      this.renderer.setStyle(cardBody, "background-color", "#F5F1E3");
      this.renderer.addClass(cardBody,'d-flex')
      this.renderer.addClass(cardBody, 'flex-column')
      this.renderer.addClass(cardBody, 'justify-content-start')
      this.renderer.addClass(cardBody, 'text-center')
      if(this._userServices.checkRole()){
        const child = document.createElement(`strong`);
        const name = document.createTextNode(`add`);
        child.append(name);
        this.renderer.setStyle(child,'font-size','10px');
        this.renderer.setStyle(child, "color", "#f47742");
        this.renderer.setStyle(child, "cursor", "pointer");
        this.renderer.appendChild(cardBody, child);
        this.renderer.listen(cardBody, "click", () => {
          let positionSum = this.position + position;
          this._modalEventController.hideModal()
          this.createEvent(positionSum);
        });
      }
      let parent = this.renderer.parentNode(this.eventCard.nativeElement);
      let parent2 = this.renderer.parentNode(parent);

      if (position === 0) { this.renderer.appendChild(parent2, division);resolve() }
      if (position === 0.25) { this.renderer.appendChild(parent2, division);resolve() }
      if (position === 0.5) { this.renderer.appendChild(parent2, division);resolve() }
      if (position === 0.75) { this.renderer.appendChild(parent2, division);resolve() }
    })
  }
            
  createEvent(position:number) {
    this._modalEventController.showModal()
    this._modalEventController.notification.emit({position, facilitieId:this.facilitie._id })
  }

  showEventInfo(id:string){ 
    this._modalEventController.showModal(id) 
    this._modalEventController.notification.emit()
  }
}


