import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild} from '@angular/core';
import { UserServices } from '../../../../providers/user.service';
import { EventModalController } from '../../../../modals/events-modal/eventsModal.controller';
import { Event } from '../../../../models/event.model';


@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.scss"]
})
export class EventComponent implements OnInit {
  token: string;

  @Input() facilitie: any;
  @Input() position: number;
  @Input() hour: Event[];

  ourEvents: any = {
    "0": undefined,
    "0.25": undefined,
    "0.50": undefined,
    "0.75": undefined
  };

  @ViewChild("eventCard") eventCard: ElementRef;
  child1 = this.renderer.createElement("a");
  newDiv;
  newDiv1;
  newDiv2;
  newDiv3;
  newDiv4;
  newDiv5;
  newDiv6;

  constructor(
    private _userServices: UserServices,
    private renderer: Renderer2,
    private _modalEventController: EventModalController
  ) {
    this.token = this._userServices.token;
  }

  ngOnInit() {
    const plus = document.createTextNode("+");
    this.child1.appendChild(plus);
    this.child1.setAttribute("id", "#child");
    this.renderer.setStyle(this.child1, "cursor", "pointer");

    this.render2();

    this._modalEventController.notification.subscribe(res => {
      if (!res) {
        this.renderer.removeChild(this.eventCard.nativeElement, this.child1);

        this.render2();
      }
    });
  }

  render2() {

    let spaceMustBe = 720 - this.position * 60;
    
    for (let event of this.hour) {
      if (event.instalacion === this.facilitie._id) {
        if (event.posicion === this.position) {
          this.ourEvents["0"] = event;
        }
        if (event.posicion === this.position + 0.25) {
          this.ourEvents["0.25"] = event;
        }
        if (event.posicion === this.position + 0.5) {
          this.ourEvents["0.50"] = event;
        }
        if (event.posicion === this.position + 0.75) {
          this.ourEvents["0.75"] = event;
        }
      }
    }

    if (
      this.ourEvents["0"] === undefined &&
      this.ourEvents["0.25"] === undefined &&
      this.ourEvents["0.50"] === undefined &&
      this.ourEvents["0.75"] === undefined
    ) {
      if (Number(this.facilitie.space) === spaceMustBe) {

        this.renderer.appendChild(this.eventCard.nativeElement, this.child1);
        this.renderer.listen(this.eventCard.nativeElement, "click", () => {
          this.createEvent(this.position, this.facilitie);
        });
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "height",
          `${60}px`
        );
        this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "background-color",
          "#c4afa1"
        );
        this.facilitie.space = this.facilitie.space - 60;

        return
      } else {
        if (spaceMustBe - this.facilitie.space >= 60) {
          this.renderer.setStyle(this.eventCard.nativeElement, "height", "0");
          this.renderer.setStyle(this.eventCard.nativeElement, "width", "0");
          return;
        } else {
          this.renderer.appendChild(this.eventCard.nativeElement, this.child1);
          this.renderer.listen(this.eventCard.nativeElement, "click", () => {
            this.createEvent(this.position, this.facilitie);
          });
          this.renderer.setStyle(
            this.eventCard.nativeElement,
            "height",
            `${this.facilitie.space + 60 - spaceMustBe}px`
          );
          this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
          this.renderer.setStyle(
            this.eventCard.nativeElement,
            "background-color",
            "#c4afa1"
          );
          this.facilitie.space = this.facilitie.space - (this.facilitie.space + 60 - spaceMustBe);
        }
      }return
    } else {
      
      if (this.ourEvents["0"] != undefined) {
        let parent = this.renderer.parentNode(this.eventCard.nativeElement);
        this.newDiv = this.renderer.createElement("div");
        this.renderer.insertBefore(
          parent,
          this.newDiv,
          this.eventCard.nativeElement
        );
        const child = document.createElement(`a`);
        const name3 = document.createTextNode(`${this.ourEvents["0"].nombre}`);
        child.append(name3);
        this.renderer.appendChild(this.newDiv, child);
        this.renderer.setStyle(
          this.newDiv,
          "height",
          `${60*this.ourEvents["0"].duracion}px`
        );
        this.renderer.setStyle(this.newDiv, "width", `60px`);
        this.renderer.setStyle(this.newDiv, "background-color", "blue");
        this.facilitie.space =
        this.facilitie.space - 60 * this.ourEvents["0"].duracion;


        if (this.ourEvents["0.75"] === undefined) {
          this.newDiv1 = this.renderer.createElement("div");
          this.renderer.setStyle(this.newDiv1, "height", `${45}px`);
        }

        if (this.ourEvents["0.50"] === undefined) {
          this.newDiv1 = this.renderer.createElement("div");
          this.renderer.setStyle(this.newDiv1, "height", `${30}px`);
        }

        if (this.ourEvents["0.25"] === undefined) {
          this.newDiv1 = this.renderer.createElement("div");
          this.renderer.setStyle(this.newDiv1, "height", `${15}px`);
        }
       
        if (this.ourEvents["0"].duracion < 1) {
          let parent = this.renderer.parentNode(this.eventCard.nativeElement);
          this.renderer.appendChild(parent, this.newDiv1);
          const child = document.createElement(`a`);
          const name = document.createTextNode(`+`);
          child.append(name);
          this.renderer.appendChild(this.newDiv1, child);
          this.renderer.listen(this.newDiv1, "click", () => {
            this.createEvent(this.position, this.facilitie);
          });
          this.renderer.setStyle(this.newDiv1, "width", `60px`);
          this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
          let height = this.newDiv1.offsetHeight;
          this.facilitie.space -= height
        
        }
      } else {
        let parent = this.renderer.parentNode(this.eventCard.nativeElement);

        if (this.ourEvents["0.75"] != undefined) {
          this.newDiv = this.renderer.createElement("div");
          this.renderer.setStyle(this.newDiv, "height", `${45}px`);
         
        }
        if (this.ourEvents["0.50"] != undefined) {
          this.newDiv = this.renderer.createElement("div");
          this.renderer.setStyle(this.newDiv, "height", `${30}px`);
       
        }
        if (this.ourEvents["0.25"] != undefined) {
          this.newDiv = this.renderer.createElement("div");
          this.renderer.setStyle(this.newDiv, "height", `${15}px`);
          
        }
        this.renderer.insertBefore(
          parent,
          this.newDiv,
          this.eventCard.nativeElement
        );
        const child3 = document.createElement(`a`);
        const name3 = document.createTextNode(`+`);
        child3.append(name3);
        this.renderer.appendChild(this.newDiv, child3);
        this.renderer.listen(this.newDiv, "click", () => {
          this.createEvent(this.position, this.facilitie);
        });
        this.renderer.setStyle(this.newDiv, "width", `60px`);
        this.renderer.setStyle(this.newDiv, "background-color", "#c4afa1");
        let height = this.newDiv.offsetHeight;
        this.facilitie.space -= height
      
      }

      if (this.ourEvents["0.25"] != undefined) {

        let parent = this.renderer.parentNode(this.eventCard.nativeElement);

        this.newDiv2 = this.renderer.createElement("div");
        this.renderer.addClass(this.newDiv2, "card");
        let body = this.renderer.createElement("div");
        this.renderer.addClass(body, "card-body");
        this.renderer.appendChild(this.newDiv2, body);
        const child2 = document.createElement(`a`);
        const name2 = document.createTextNode(
          `${this.ourEvents["0.25"].nombre}`
        );
        child2.append(name2);

        this.renderer.appendChild(body, child2);

        this.renderer.appendChild(parent, this.newDiv2);

        this.renderer.setStyle(
          this.newDiv2,
          "height",
          `${60 * this.ourEvents["0.25"].duracion}px`
        );
        this.renderer.setStyle(this.newDiv2, "width", `60px`);
        this.renderer.setStyle(this.newDiv2, "background-color", "blue");
        this.facilitie.space =
        this.facilitie.space - 60 * this.ourEvents["0.25"].duracion;

        if (this.ourEvents["0.50"] === undefined) {
          this.newDiv2 = this.renderer.createElement("div");
          this.renderer.setStyle(this.newDiv2, "height", `${15}px`);
         
        }

        if (this.ourEvents["0.75"] === undefined) {
          this.newDiv2 = this.renderer.createElement("div");
          this.renderer.setStyle(this.newDiv2, "height", `${30}px`);
          
        }

        if (this.ourEvents["0.25"].duracion < 0.75) {
          let parent = this.renderer.parentNode(this.eventCard.nativeElement);
          this.renderer.appendChild(parent, this.newDiv2);
          const child = document.createElement(`a`);
          const name = document.createTextNode(`+`);
          child.append(name);
          this.renderer.appendChild(this.newDiv2, child);
          this.renderer.listen(this.newDiv2, "click", () => {
            this.createEvent(this.position, this.facilitie);
          });
          this.renderer.setStyle(this.newDiv2, "width", `60px`);
          this.renderer.setStyle(this.newDiv2, "background-color", "#c4afa1");
          let height = this.newDiv2.offsetHeight;
          this.facilitie.space -= height

        }
      }

      if (this.ourEvents["0.50"] != undefined) {
        let parent = this.renderer.parentNode(this.eventCard.nativeElement);

        this.newDiv4 = this.renderer.createElement("div");
        this.renderer.addClass(this.newDiv4, "card");
        let body = this.renderer.createElement("div");
        this.renderer.addClass(body, "card-body");
        this.renderer.appendChild(this.newDiv4, body);

        const child2 = document.createElement(`a`);
        const name2 = document.createTextNode(
          `${this.ourEvents["0.50"].nombre}`
        );
        child2.append(name2);

        this.renderer.appendChild(body, child2);

        this.renderer.appendChild(parent, this.newDiv4);

        this.renderer.setStyle(
          this.newDiv4,
          "height",
          `${60 * this.ourEvents["0.50"].duracion}px`
        );
        this.renderer.setStyle(this.newDiv4, "width", `60px`);
        this.renderer.setStyle(this.newDiv4, "background-color", "blue");
        this.facilitie.space =
          this.facilitie.space - 60 * this.ourEvents["0.50"].duracion;

        if (this.ourEvents["0.75"] === undefined) {
          this.newDiv5 = this.renderer.createElement("div");
          this.renderer.setStyle(this.newDiv5, "height", `${15}px`);
          this.facilitie.space-=15;
          let parent = this.renderer.parentNode(this.eventCard.nativeElement);
          this.renderer.appendChild(parent, this.newDiv5);
          const child = document.createElement(`a`);
          const name = document.createTextNode(`+`);
          child.append(name);
          this.renderer.appendChild(this.newDiv5, child);
          this.renderer.listen(this.newDiv5, "click", () => {
            this.createEvent(this.position, this.facilitie);
          });
          this.renderer.setStyle(this.newDiv5, "width", `60px`);
          this.renderer.setStyle(this.newDiv5, "background-color", "#c4afa1");
        } 
      }

      if(this.ourEvents['0.75']!=undefined){

        let parent = this.renderer.parentNode(this.eventCard.nativeElement);

        this.newDiv6 = this.renderer.createElement("div");
        this.renderer.addClass(this.newDiv6, "card");
        let body = this.renderer.createElement("div");
        this.renderer.addClass(body, "card-body");
        this.renderer.appendChild(this.newDiv6, body);

        const child2 = document.createElement(`a`);
        const name2 = document.createTextNode(
          `${this.ourEvents["0.75"].nombre}`
        );
        child2.append(name2);

        this.renderer.appendChild(body, child2);

        this.renderer.appendChild(parent, this.newDiv6);

        this.renderer.setStyle(
          this.newDiv6,
          "height",
          `${60 * this.ourEvents["0.75"].duracion}px`
        );
        this.renderer.setStyle(this.newDiv6, "width", `60px`);
        this.renderer.setStyle(this.newDiv6, "background-color", "blue");
        this.facilitie.space =
          this.facilitie.space - 60 * this.ourEvents["0.75"].duracion;
      }else{}

      /*

      if(this.ourEvents['0.25']!= undefined){

        let parent = this.renderer.parentNode(this.eventCard.nativeElement);
        this.newDiv = this.renderer.createElement("div");
        this.renderer.insertBefore(parent, this.newDiv, this.eventCard.nativeElement)
        const child3 = document.createElement(`a`);
        const name3 = document.createTextNode(`${this.ourEvents['0'].nombre}`);
        child3.append(name3);
        this.renderer.appendChild(this.newDiv1, child3);

        this.renderer.setStyle(this.newDiv, "height", `${this.ourEvents["0.25"].duracion}px`);
        this.renderer.setStyle(this.newDiv, "width", `60px`);
        this.renderer.setStyle(this.newDiv, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.25"].duracion;

      
      }

      if (this.ourEvents['0'] != undefined && this.ourEvents['0.25'] === undefined && this.ourEvents['0.50'] === undefined && this.ourEvents['0.75'] === undefined){   
   
                
         
      }

      if (this.ourEvents['0'] != undefined && this.ourEvents['0.25'] != undefined && this.ourEvents['0.50'] === undefined && this.ourEvents['0.75'] === undefined){

     

        let parent = this.renderer.parentNode(this.eventCard.nativeElement);

        this.newDiv1 = this.renderer.createElement("div");
        this.renderer.appendChild(parent, this.newDiv1)
        const child3 = document.createElement(`a`);
        const name3 = document.createTextNode(`${this.ourEvents['0.25'].nombre}`);
        child3.append(name3);
        this.renderer.appendChild(this.newDiv1, child3);
        this.renderer.setStyle(this.newDiv1, "height", `${this.ourEvents["0.25"].duracion}px`);
        this.renderer.setStyle(this.newDiv1, "width", `60px`);
        this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.25"].duracion;
        if (this.ourEvents["0.25"].duracion < 0.75) { this.position += this.ourEvents["0.25"].duracion }
        
        if(this.position === 0.50){
          this.newDiv2 = this.renderer.createElement("div");
          this.renderer.insertBefore(parent, this.newDiv2, this.eventCard.nativeElement)
          const child4 = document.createElement(`a`);
          const name4 = document.createTextNode(`+`);
          child4.append(name4);
          this.renderer.appendChild(this.newDiv2, child3);
          this.renderer.listen(this.newDiv2, "click", () => { this.createEvent(this.position, this.facilitie); })
          this.renderer.setStyle(this.newDiv2, "height", `${30}px`);
          this.renderer.setStyle(this.newDiv2, "width", `60px`);
          this.renderer.setStyle(this.newDiv2, "background-color", "#c4afa1")
          this.facilitie.space -= 30
        }
        if (this.position === 0.75) {
          this.newDiv2 = this.renderer.createElement("div");
          this.renderer.insertBefore(parent, this.newDiv2, this.eventCard.nativeElement)
          const child4 = document.createElement(`a`);
          const name4 = document.createTextNode(`+`);
          child3.append(name3);
          this.renderer.appendChild(this.newDiv2, child3);
          this.renderer.listen(this.newDiv2, "click", () => { this.createEvent(this.position, this.facilitie); })
          this.renderer.setStyle(this.newDiv2, "height", `${15}px`);
          this.renderer.setStyle(this.newDiv2, "width", `60px`);
          this.renderer.setStyle(this.newDiv2, "background-color", "#c4afa1")
          this.facilitie.space -= 15
        }    
      }
      if (this.ourEvents['0'] != undefined && this.ourEvents['0.25'] != undefined && this.ourEvents['0.50'] != undefined && this.ourEvents['0.75'] === undefined){

        const child2 = document.createElement(`a`);
        const name = document.createTextNode(`${this.ourEvents['0'].nombre}`);
        child2.append(name);
        this.renderer.appendChild(this.eventCard.nativeElement, child2);
        this.renderer.setStyle(this.eventCard.nativeElement, "height", `${60 * this.ourEvents["0"].duracion}px`);
        this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
        this.renderer.setStyle(this.eventCard.nativeElement, "background-color", "#ed9961");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0"].duracion;

        let parent = this.renderer.parentNode(this.eventCard.nativeElement);

        this.newDiv1 = this.renderer.createElement("div");
        this.renderer.appendChild(parent, this.newDiv1)
        const child3 = document.createElement(`a`);
        const name3 = document.createTextNode(`${this.ourEvents['0.25'].nombre}`);
        child3.append(name3);
        this.renderer.appendChild(this.newDiv1, child3);
        this.renderer.setStyle(this.newDiv1, "height", `${60 * this.ourEvents["0.25"].duracion}px`);
        this.renderer.setStyle(this.newDiv1, "width", `60px`);
        this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.25"].duracion;

        this.newDiv2 = this.renderer.createElement("div");
        this.renderer.appendChild(parent, this.newDiv1);
        const child4 = document.createElement(`a`);
        const name4 = document.createTextNode(`${this.ourEvents["0.50"].nombre}`);
        child4.append(name4);
        this.renderer.appendChild(this.newDiv1, child3);
        this.renderer.setStyle(this.newDiv1, "height", `${60 * this.ourEvents["0.50"].duracion}px`);
        this.renderer.setStyle(this.newDiv1, "width", `60px`);
        this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.50"].duracion;

        if (this.ourEvents["0.50"].duracion < 0.50) {
          this.position += this.ourEvents["0.50"].duracion;
        }

        if (this.position === 0.75) {
          this.newDiv2 = this.renderer.createElement("div");
          this.renderer.insertBefore(parent, this.newDiv2, this.eventCard.nativeElement)
          const child4 = document.createElement(`a`);
          const name4 = document.createTextNode(`+`);
          child3.append(name3);
          this.renderer.appendChild(this.newDiv2, child3);
          this.renderer.listen(this.newDiv2, "click", () => { this.createEvent(this.position, this.facilitie); })
          this.renderer.setStyle(this.newDiv2, "height", `${15}px`);
          this.renderer.setStyle(this.newDiv2, "width", `60px`);
          this.renderer.setStyle(this.newDiv2, "background-color", "#c4afa1")
          this.facilitie.space -= 15
        }  
      }
      if (this.ourEvents['0'] != undefined && this.ourEvents['0.25'] != undefined && this.ourEvents['0.50'] != undefined && this.ourEvents['0.75'] != undefined) {

        const child2 = document.createElement(`a`);
        const name = document.createTextNode(`${this.ourEvents["0"].nombre}`);
        child2.append(name);
        this.renderer.appendChild(this.eventCard.nativeElement, child2);
        this.renderer.setStyle(this.eventCard.nativeElement, "height", `${60 * this.ourEvents["0"].duracion}px`);
        this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
        this.renderer.setStyle(this.eventCard.nativeElement, "background-color", "#ed9961");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0"].duracion;

        let parent = this.renderer.parentNode(this.eventCard.nativeElement);

        this.newDiv1 = this.renderer.createElement("div");
        this.renderer.appendChild(parent, this.newDiv1);
        const child3 = document.createElement(`a`);
        const name3 = document.createTextNode(`${this.ourEvents["0.25"].nombre}`);
        child3.append(name3);
        this.renderer.appendChild(this.newDiv1, child3);
        this.renderer.setStyle(this.newDiv1, "height", `${60 * this.ourEvents["0.25"].duracion}px`);
        this.renderer.setStyle(this.newDiv1, "width", `60px`);
        this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.25"].duracion;

        this.newDiv2 = this.renderer.createElement("div");
        this.renderer.appendChild(parent, this.newDiv1);
        const child4 = document.createElement(`a`);
        const name4 = document.createTextNode(`${this.ourEvents["0.50"].nombre}`);
        child4.append(name4);
        this.renderer.appendChild(this.newDiv1, child3);
        this.renderer.setStyle(this.newDiv1, "height", `${60 * this.ourEvents["0.50"].duracion}px`);
        this.renderer.setStyle(this.newDiv1, "width", `60px`);
        this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.50"].duracion;

        this.newDiv3 = this.renderer.createElement("div");
        this.renderer.appendChild(parent, this.newDiv1);
        const child5 = document.createElement(`a`);
        const name5 = document.createTextNode(`${this.ourEvents["0.75"].nombre}`);
        child5.append(name5);
        this.renderer.appendChild(this.newDiv1, child3);
        this.renderer.setStyle(this.newDiv1, "height", `${60 * this.ourEvents["0.75"].duracion}px`);
        this.renderer.setStyle(this.newDiv1, "width", `60px`);
        this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.75"].duracion;
      }
      if (this.ourEvents['0'] === undefined && this.ourEvents['0.25'] != undefined && this.ourEvents['0.50'] != undefined && this.ourEvents['0.75'] != undefined){
        
        if (Number(this.facilitie.space) === spaceMustBe){
          this.renderer.setStyle(this.eventCard.nativeElement, "height", `${15}px`);
          this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
        }
        if(spaceMustBe - Number(this.facilitie.space) === 15){
          this.renderer.setStyle(this.eventCard.nativeElement, "height", `${0}px`);
          this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
        }

        let parent = this.renderer.parentNode(this.eventCard.nativeElement);

        this.newDiv1 = this.renderer.createElement("div");
        this.renderer.appendChild(parent, this.newDiv1)
        const child1 = document.createElement(`a`);
        const name1 = document.createTextNode(`${this.ourEvents['0.25'].nombre}`);
        child1.append(name1);
        this.renderer.appendChild(this.newDiv1, child1);
        this.renderer.setStyle(this.newDiv1, "height", `${this.ourEvents["0.25"].duracion}px`);
        this.renderer.setStyle(this.newDiv1, "width", `60px`);
        this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.25"].duracion;
        
        this.newDiv2 = this.renderer.createElement("div");
        this.renderer.appendChild(parent, this.newDiv1)
        const child2 = document.createElement(`a`);
        const name2 = document.createTextNode(`${this.ourEvents['0.50'].nombre}`);
        child2.append(name2);
        this.renderer.appendChild(this.newDiv1, child2);
        this.renderer.setStyle(this.newDiv1, "height", `${this.ourEvents["0.50"].duracion}px`);
        this.renderer.setStyle(this.newDiv1, "width", `60px`);
        this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.50"].duracion;
       
        this.newDiv3 = this.renderer.createElement("div");
        this.renderer.appendChild(parent, this.newDiv1)
        const child3 = document.createElement(`a`);
        const name3 = document.createTextNode(`${this.ourEvents['0.75'].nombre}`);
        child3.append(name3);
        this.renderer.appendChild(this.newDiv1, child3);
        this.renderer.setStyle(this.newDiv1, "height", `${this.ourEvents["0.75"].duracion}px`);
        this.renderer.setStyle(this.newDiv1, "width", `60px`);
        this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
        this.facilitie.space = this.facilitie.space - 60 * this.ourEvents["0.75"].duracion;
      }  */
    }
  }

  render() {
    let spaceMustBe = 720 - this.position * 60;

    for (let event of this.hour) {
      if (
        event["instalacion"] === this.facilitie._id &&
        event["posicion"] >= this.position &&
        event["posicion"] < this.position + 1
      ) {
        this.ourEvents.push(event);
      }
    }

    if (Number(this.facilitie.space) === spaceMustBe) {
      if (this.ourEvents.length > 0) {
        let eventsTime: number = 0;
        for (let event of this.ourEvents) {
          eventsTime += Number(event.duracion);
        }

        let eventsPosition: number;

        for (let event of this.ourEvents) {
          if (event.posicion === this.position + 0.75) {
            eventsPosition = 0.75;
          }
        }
        for (let event of this.ourEvents) {
          if (event.posicion === this.position + 0.5) {
            eventsPosition = 0.5;
          }
        }
        for (let event of this.ourEvents) {
          if (event.posicion === this.position + 0.25) {
            eventsPosition = 0.25;
          }
        }
        for (let event of this.ourEvents) {
          if (event.posicion === this.position) {
            eventsPosition = 0;
          }
        }

        if (eventsPosition === 0.25) {
          let parent = this.renderer.parentNode(this.eventCard.nativeElement);
          this.newDiv1 = this.renderer.createElement("div");
          this.renderer.insertBefore(
            parent,
            this.newDiv1,
            this.eventCard.nativeElement
          );
          const child3 = document.createElement(`a`);
          const name3 = document.createTextNode(`+`);
          child3.append(name3);
          this.renderer.appendChild(this.newDiv1, child3);
          this.renderer.listen(this.newDiv1, "click", () => {
            this.createEvent(this.position, this.facilitie);
          });
          this.renderer.setStyle(this.newDiv1, "height", `${15}px`);
          this.renderer.setStyle(this.newDiv1, "width", `60px`);
          this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
          this.facilitie.space -= 15;
        }

        if (eventsPosition === 0.5) {
          let parent = this.renderer.parentNode(this.eventCard.nativeElement);
          this.newDiv2 = this.renderer.createElement("div");
          this.renderer.insertBefore(
            parent,
            this.newDiv2,
            this.eventCard.nativeElement
          );
          const child3 = document.createElement(`a`);
          const name3 = document.createTextNode(`+`);
          child3.append(name3);
          this.renderer.appendChild(this.newDiv2, child3);
          this.renderer.listen(this.newDiv2, "click", () => {
            this.createEvent(this.position, this.facilitie);
          });
          this.renderer.setStyle(this.newDiv2, "height", `${30}px`);
          this.renderer.setStyle(this.newDiv2, "width", `60px`);
          this.renderer.setStyle(this.newDiv2, "background-color", "#c4afa1");
          this.facilitie.space -= 30;
        }

        if (eventsPosition === 0.75) {
          let parent = this.renderer.parentNode(this.eventCard.nativeElement);
          this.newDiv3 = this.renderer.createElement("div");
          this.renderer.insertBefore(
            parent,
            this.newDiv3,
            this.eventCard.nativeElement
          );
          const child3 = document.createElement(`a`);
          const name3 = document.createTextNode(`+`);
          child3.append(name3);
          this.renderer.appendChild(this.newDiv3, child3);
          this.renderer.listen(this.newDiv3, "click", () => {
            this.createEvent(this.position, this.facilitie);
          });
          this.renderer.setStyle(this.newDiv3, "height", `${45}px`);
          this.renderer.setStyle(this.newDiv3, "width", `60px`);
          this.renderer.setStyle(this.newDiv3, "background-color", "#c4afa1");
          this.facilitie.space -= 45;
        }

        if (eventsTime < 1) {
          for (let event of this.ourEvents) {
            if (event.posicion === eventsPosition) {
              this.facilitie.space =
                this.facilitie.space -
                (60 - (spaceMustBe - this.facilitie.space));
              const child2 = document.createElement(`a`);
              const name2 = document.createTextNode(`${event.nombre}`);
              child2.append(name2);
              this.renderer.appendChild(this.eventCard.nativeElement, child2);
              this.renderer.setStyle(
                this.eventCard.nativeElement,
                "height",
                `${60 * event.duracion}px`
              );
              this.renderer.setStyle(
                this.eventCard.nativeElement,
                "width",
                `60px`
              );
              this.renderer.setStyle(
                this.eventCard.nativeElement,
                "background-color",
                "#ed9961"
              );
              eventsPosition += event.duracion;
              return;
            } else {
              /*let parent = this.renderer.parentNode(this.eventCard.nativeElement);
                     this.newDiv = this.renderer.createElement("div");
                     this.renderer.appendChild(parent, this.newDiv);
                     const child3 = document.createElement(`a`);
                     const name3 = document.createTextNode(`+`);
                     child3.append(name3);
                     this.renderer.appendChild(this.newDiv, child3);
                     this.renderer.listen(this.newDiv, "click", () => { this.createEvent(this.position + eventsTime, this.facilitie); });
                     this.renderer.setStyle(this.newDiv, "height", `${60 - 60 * eventsTime}px`);
                     this.renderer.setStyle(this.newDiv, "width", `60px`);
                     this.renderer.setStyle(this.newDiv, "background-color", "#c4afa1");
                     eventsPosition += event.duracion;*/
            }
          }

          /*    let parent = this.renderer.parentNode(this.eventCard.nativeElement);
              this.newDiv = this.renderer.createElement("div");
              this.renderer.appendChild(parent, this.newDiv);
              const child3 = document.createElement(`a`);
              const name3 = document.createTextNode(`+`);
              child3.append(name3);
              this.renderer.appendChild(this.newDiv, child3);
              this.renderer.listen(this.newDiv,"click",() => {this.createEvent(this.position+eventsTime,this.facilitie);});                
              this.renderer.setStyle(this.newDiv, "height", `${60 - 60 * eventsTime}px`);
              this.renderer.setStyle(this.newDiv, "width", `60px`);
              this.renderer.setStyle(this.newDiv, "background-color", "#c4afa1");*/
        } else {
          for (let event of this.ourEvents) {
            const child2 = document.createElement(`a`);
            const name = document.createTextNode(`${event.nombre}`);
            child2.append(name);
            this.renderer.appendChild(this.eventCard.nativeElement, child2);
            this.renderer.setStyle(
              this.eventCard.nativeElement,
              "height",
              `${60 * event.duracion}px`
            );
            this.renderer.setStyle(
              this.eventCard.nativeElement,
              "width",
              `60px`
            );
            this.renderer.setStyle(
              this.eventCard.nativeElement,
              "background-color",
              "#ed9961"
            );
            this.facilitie.space = this.facilitie.space - 60 * event.duracion;
          }
        }
        return;
      } else if (this.ourEvents.length === 0) {
        this.facilitie.space = this.facilitie.space - 60;
        this.renderer.appendChild(this.eventCard.nativeElement, this.child1);
        this.renderer.listen(this.eventCard.nativeElement, "click", () => {
          this.createEvent(this.position, this.facilitie);
        });
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "height",
          `${60}px`
        );
        this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
        this.renderer.setStyle(
          this.eventCard.nativeElement,
          "background-color",
          "#c4afa1"
        );
      }
      return;
    } else {
      if (spaceMustBe - this.facilitie.space >= 60) {
        this.renderer.setStyle(this.eventCard.nativeElement, "height", "0");
        this.renderer.setStyle(this.eventCard.nativeElement, "width", "0");
        return;
      } else {
        if (this.ourEvents.length > 0) {
          let eventsTime: number;
          for (let event of this.ourEvents) {
            eventsTime += event.duracion;
          }

          let eventsPosition: number = this.position;

          for (let event of this.ourEvents) {
            if (event.posicion === this.position + 0.75) {
              eventsPosition = 0.75;
            }
          }
          for (let event of this.ourEvents) {
            if (event.posicion === this.position + 0.5) {
              eventsPosition = 0.5;
            }
          }
          for (let event of this.ourEvents) {
            if (event.posicion === this.position + 0.25) {
              eventsPosition = 0.25;
            }
          }

          if (eventsPosition === 0.25) {
            let parent = this.renderer.parentNode(this.eventCard.nativeElement);
            this.newDiv1 = this.renderer.createElement("div");
            this.renderer.insertBefore(
              parent,
              this.newDiv1,
              this.eventCard.nativeElement
            );
            const child3 = document.createElement(`a`);
            const name3 = document.createTextNode(`+`);
            child3.append(name3);
            this.renderer.appendChild(this.newDiv1, child3);
            this.renderer.listen(this.newDiv1, "click", () => {
              this.createEvent(this.position, this.facilitie);
            });
            this.renderer.setStyle(this.newDiv1, "height", `${15}px`);
            this.renderer.setStyle(this.newDiv1, "width", `60px`);
            this.renderer.setStyle(this.newDiv1, "background-color", "#c4afa1");
            this.facilitie.space -= 15;
          }

          if (eventsPosition === 0.5) {
            let parent = this.renderer.parentNode(this.eventCard.nativeElement);
            this.newDiv2 = this.renderer.createElement("div");
            this.renderer.insertBefore(
              parent,
              this.newDiv2,
              this.eventCard.nativeElement
            );
            const child3 = document.createElement(`a`);
            const name3 = document.createTextNode(`+`);
            child3.append(name3);
            this.renderer.appendChild(this.newDiv2, child3);
            this.renderer.listen(this.newDiv2, "click", () => {
              this.createEvent(this.position + 0.25, this.facilitie);
            });
            this.renderer.setStyle(this.newDiv2, "height", `${30}px`);
            this.renderer.setStyle(this.newDiv2, "width", `60px`);
            this.renderer.setStyle(this.newDiv2, "background-color", "#c4afa1");
            this.facilitie.space -= 30;
          }

          if (eventsPosition === 0.75) {
            let parent = this.renderer.parentNode(this.eventCard.nativeElement);
            this.newDiv3 = this.renderer.createElement("div");
            this.renderer.insertBefore(
              parent,
              this.newDiv3,
              this.eventCard.nativeElement
            );
            const child3 = document.createElement(`a`);
            const name3 = document.createTextNode(`+`);
            child3.append(name3);
            this.renderer.appendChild(this.newDiv3, child3);
            this.renderer.listen(this.newDiv3, "click", () => {
              this.createEvent(this.position + 0.5, this.facilitie);
            });
            this.renderer.setStyle(this.newDiv3, "height", `${45}px`);
            this.renderer.setStyle(this.newDiv3, "width", `60px`);
            this.renderer.setStyle(this.newDiv3, "background-color", "#c4afa1");
            this.facilitie.space -= 45;
          }

          if (eventsTime < 1 - (spaceMustBe - this.facilitie.space) / 60) {
            for (let event of this.ourEvents) {
              const child2 = document.createElement(`a`);
              const name = document.createTextNode(`${event.nombre}`);
              child2.append(name);
              this.renderer.appendChild(this.eventCard.nativeElement, child2);
              this.renderer.setStyle(
                this.eventCard.nativeElement,
                "height",
                `${60 * event.duracion}px`
              );
              this.renderer.setStyle(
                this.eventCard.nativeElement,
                "width",
                `60px`
              );
              this.renderer.setStyle(
                this.eventCard.nativeElement,
                "background-color",
                "#ed9961"
              );
              this.facilitie.space = this.facilitie.space - 60 * event.duracion;
            }
            let parent = this.renderer.parentNode(this.eventCard.nativeElement);
            this.newDiv = this.renderer.createElement("div");
            this.renderer.appendChild(parent, this.newDiv);
            const child3 = document.createElement(`a`);
            const name3 = document.createTextNode(`+`);
            child3.append(name3);
            this.renderer.appendChild(this.newDiv, child3);
            this.renderer.listen(this.newDiv, "click", () => {
              this.createEvent(this.position, this.facilitie);
            });
            this.renderer.setStyle(
              this.newDiv,
              "height",
              `${spaceMustBe -
                this.facilitie.space -
                (spaceMustBe - this.facilitie.space) * eventsTime}px`
            );
            this.renderer.setStyle(this.newDiv, "width", `60px`);
            this.renderer.setStyle(this.newDiv, "background-color", "#c4afa1");
          } else {
            for (let event of this.ourEvents) {
              const child2 = document.createElement(`a`);
              const name = document.createTextNode(`${event.nombre}`);
              child2.append(name);
              this.renderer.appendChild(this.eventCard.nativeElement, child2);
              this.renderer.setStyle(
                this.eventCard.nativeElement,
                "height",
                `${60 * event.duracion}px`
              );
              this.renderer.setStyle(
                this.eventCard.nativeElement,
                "width",
                `60px`
              );
              this.renderer.setStyle(
                this.eventCard.nativeElement,
                "background-color",
                "#ed9961"
              );
              this.facilitie.space = this.facilitie.space - 60 * event.duracion;
            }
          }
          return;
        } else if (this.ourEvents.length === 0) {
          this.renderer.appendChild(this.eventCard.nativeElement, this.child1);
          this.renderer.listen(this.eventCard.nativeElement, "click", () => {
            this.createEvent(this.position, this.facilitie);
          });
          this.renderer.setStyle(
            this.eventCard.nativeElement,
            "height",
            `${this.facilitie.space + 60 - spaceMustBe}px`
          );
          this.renderer.setStyle(this.eventCard.nativeElement, "width", `60px`);
          this.facilitie.space =
            this.facilitie.space - (this.facilitie.space + 60 - spaceMustBe);
          this.renderer.setStyle(
            this.eventCard.nativeElement,
            "background-color",
            "#c4afa1"
          );
        }
      }
    }
    return;
  }

  createEvent(position: number, facilitie: any) {
    if (this.ourEvents.length === 0) {
      this._modalEventController.showModal();
      let percent = this.eventCard.nativeElement.offsetHeight / 60;
      this._modalEventController.notification.emit({
        facilitieId: facilitie._id,
        position: position * percent,
        percent
      });
    } else if (this.ourEvents.length > 0) {
    }
  }
}


