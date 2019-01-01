import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Facilitie } from '../../../../models/facilitie.modal';
import { UserServices } from '../../../../providers/user.service';
import { DayComponent } from '../day.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  token:string

  @Input() facilitie:any
  @Input() position:number

  @ViewChild('eventCard') eventCard : ElementRef

  constructor(private _userServices: UserServices,
              private dayComponent: DayComponent,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document) {
     
     this.token = this._userServices.token;   
   }

  ngOnInit() {

    const child = document.createElement("a")
    const plus = document.createTextNode("+");
    child.appendChild(plus)
    this.renderer.appendChild(this.eventCard.nativeElement, child)
    this.renderer.addClass(this.eventCard.nativeElement,'emtpy')
    let spaceMustBe = (720 - ((this.position-1) * 60));

    if(Number(this.facilitie.space) === spaceMustBe){

      this.renderer.setStyle(this.eventCard.nativeElement, 'height', `${60}px`)

      this.renderer.setStyle(this.eventCard.nativeElement, 'width', `60px`)

      this.facilitie.space = this.facilitie.space - 60;

      this.dayComponent.events.forEach((event) => {
        if (event.instalacion === this.facilitie._id && event.posicion === this.position) {
          this.renderer.removeChild(this.eventCard.nativeElement, child)
          const child2 = document.createElement(`a`);
          const name = document.createTextNode(`${event.nombre}`)
          child2.append(name)
          this.renderer.appendChild(this.eventCard.nativeElement, child2)
          this.renderer.setStyle(this.eventCard.nativeElement, 'height', `${60 * event.duracion}px`)
          this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
          this.facilitie.space = this.facilitie.space + (spaceMustBe - this.facilitie.space);
          this.facilitie.space = this.facilitie.space - (60 * event.duracion);
        }
      })
      return

    }else{

      if(spaceMustBe-this.facilitie.space >= 60){

        this.renderer.removeChild(this.eventCard.nativeElement,child)

      }else{
        
             this.renderer.setStyle(this.eventCard.nativeElement, "height", `${spaceMustBe - this.facilitie.space}px`);
             this.facilitie.space = this.facilitie.space - (spaceMustBe - this.facilitie.space);

             this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);

             this.dayComponent.events.forEach(event => {
               if (event.instalacion === this.facilitie._id && event.posicion === this.position) {
                 this.renderer.removeChild(this.eventCard.nativeElement, child);
                 const child2 = document.createElement(`a`);
                 const name = document.createTextNode(`${event.nombre}`);
                 child2.append(name);
                 this.renderer.appendChild(this.eventCard.nativeElement, child2);
                 this.renderer.setStyle(this.eventCard.nativeElement, "height", `${60 * event.duracion}px`);
                 this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
                 this.facilitie.space = this.facilitie.space + this.facilitie.space - (spaceMustBe - this.facilitie.space);
                 this.facilitie.space = this.facilitie.space - 60 * event.duracion;
               }
             });
           }
      return
    }
    }
  }


