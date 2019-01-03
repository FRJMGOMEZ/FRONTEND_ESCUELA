import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, Inject, destroyPlatform } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { UserServices } from '../../../../providers/user.service';
import { DayComponent } from '../day.component';
import { EventModalController } from '../../../../modals/events-modal/eventsModal.controller';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  token:string

  @Input() facilitie:any
  @Input() position:number
  @Input() hour:Event[]

  @ViewChild('eventCard') eventCard : ElementRef
  child = this.renderer.createElement('a')

  constructor(private _userServices: UserServices,
              private el:ElementRef,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document,
              private _modalEventController:EventModalController) {

     this.token = this._userServices.token;

   }

  ngOnInit() {
    const plus = document.createTextNode("+");
    this.child.appendChild(plus);
    this.child.setAttribute("id", "#child");
    this.renderer.setStyle(this.child, "cursor", "pointer")

    this.render()
    }

   render(){ 

     let spaceMustBe = 720 - ((this.position - 1) * 60);

     //console.log(spaceMustBe)

     let ourEvent = null;

     for (let event of this.hour) {
       if (event['instalacion'] === this.facilitie._id && event['posicion'] === this.position) {
         ourEvent = event;
       }
      }

     if (Number(this.facilitie.space) === spaceMustBe) {
      
      if(ourEvent != null){
        //console.log(this.facilitie.space)
        const child2 = document.createElement(`a`);
        const name = document.createTextNode(`${ourEvent.nombre}`)
        child2.append(name)
        this.renderer.appendChild(this.eventCard.nativeElement, child2)
        this.renderer.setStyle(this.eventCard.nativeElement, 'height', `${60 * ourEvent.duracion}px`)
        this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
        this.facilitie.space = this.facilitie.space - (60 * ourEvent.duracion);
        //console.log(this.facilitie.space)
        return;
      }else if (ourEvent === null){
     
        this.renderer.appendChild(this.eventCard.nativeElement, this.child)
        this.renderer.listen(this.eventCard.nativeElement, 'click', () => {
          this.createEvent(this.position, this.facilitie)
        })
        this.renderer.setStyle(this.eventCard.nativeElement, 'height', `${60}px`)
        this.renderer.setStyle(this.eventCard.nativeElement, 'width', `60px`)
        this.facilitie.space = this.facilitie.space - 60;
      }
       return;
      } else {
       if (spaceMustBe - this.facilitie.space >= 60) {
          this.renderer.setStyle(this.eventCard.nativeElement,'height','0')
         this.renderer.setStyle(this.eventCard.nativeElement, 'width', '0')
         return
       } else {
         if(ourEvent !=null){
           console.log(spaceMustBe)
           console.log(this.facilitie.space)
         const child2 = document.createElement(`a`);
         const name = document.createTextNode(`${ourEvent.nombre}`);
         child2.append(name);
         this.renderer.appendChild(this.eventCard.nativeElement, child2);
         this.renderer.setStyle(this.eventCard.nativeElement, "height", `${60 * ourEvent.duracion}px`);
         this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
         this.facilitie.space = this.facilitie.space - (60 * ourEvent.duracion);
         console.log(this.facilitie.space)
           return          
         } else if (ourEvent === null){
           console.log(spaceMustBe)
          console.log(this.facilitie.space)

           this.renderer.appendChild(this.eventCard.nativeElement, this.child)
           this.renderer.listen(this.eventCard.nativeElement, 'click', () => {
             this.createEvent(this.position, this.facilitie)
           })
           
           this.renderer.setStyle(this.eventCard.nativeElement, "height", `${this.facilitie.space+60 - spaceMustBe}px`);
           this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
           this.facilitie.space = this.facilitie.space - (this.facilitie.space + 60 - spaceMustBe);
          
           console.log(this.facilitie.space)

           }
         }         
       }
       return
  }
   

  createEvent(position: number, facilitie:any) {

    this._modalEventController.showModal()

    let minutes = this.eventCard.nativeElement.offsetHeight/60
    
    this._modalEventController.notification.emit({facilitieId:facilitie._id,position,minutes})
  } 
  }


